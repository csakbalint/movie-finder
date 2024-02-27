import redis from '@/lib/redis';
import { safeParseJson } from '@/utils';

export const getCache = async (query: string, page: number) => {
  try {
    const result = await redis.get(`${query}-${page}`);
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
    await redis.set(`${query}-${page}`, JSON.stringify(value), 'EX', 120);
  } catch (error) {
    return null;
  }
};
