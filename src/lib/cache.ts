import { GetManyResults, Movie } from '@/interfaces';
import redis from '@/lib/redis';
import { safeParseJson } from '@/utils';

// TODO: generalize caching to be used for other data types
export const getCachedMovies = async (
  query: string,
  page: number,
): Promise<GetManyResults<Movie> | null> => {
  try {
    // if could not find the cache, return null
    const result = await redis.get(`${query}-${page}`);
    if (!result) {
      return null;
    }
    // wait for the parse before increasing the hit count
    const returnValue =
      safeParseJson<Omit<GetManyResults<Movie>, 'hit_count'>>(result);
    // if could not parse the cache, return null
    if (!returnValue) {
      return null;
    }
    // increase the hit count in the background
    const hit_count = await redis.incr(`${query}-${page}-hit`);
    return { ...returnValue, hit_count };
  } catch (error) {
    return null;
  }
};

// TODO: generalize caching to be used for other data types
export const cacheMovieResults = async (
  query: string,
  page: number,
  value: GetManyResults<Movie>,
) => {
  try {
    // Set every cache to expire in 2 minutes
    await redis.set(
      `${query}-${page}`,
      JSON.stringify({ ...value, hitCount: 0 }),
      'EX',
      120,
    );
    // Set the hit count to expire in 2 minutes as well
    // FIXME: the expiration of these two keys should be atomic
    await redis.set(`${query}-${page}-hit`, 0, 'EX', 120);
  } catch (error) {
    return null;
  }
};
