import redis from '@/lib/redis';
import { safeParseJson } from '@/utils';

export const getCache = async (query: string, page: number) => {
  try {
    const result = await redis.hget(query, page.toString());
    if (!result) {
      return null;
    }
    return safeParseJson(result);
  } catch (error) {
    return null;
  }
};

export const setCache = async (query: string, page: number, value: unknown) => {
  try {
    await redis.hset(query, page.toString(), JSON.stringify(value));
  } catch (error) {
    return null;
  }
};
