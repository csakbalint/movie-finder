import { NextApiRequest, NextApiResponse } from 'next';

import { GetManyResults, Movie } from '@/interfaces';
import { getCache, setCache } from '@/lib/cache';

const API_KEY = process.env.MOVIESDB_API_KEY;
const API_URL = process.env.MOVIESDB_API_URL;

async function fetchMovies(query: string, page: string) {
  // TODO: assert parameters
  const apiUrl = `${API_URL}?query=${query}&page=${page}&api_key=${API_KEY}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }

    // await for the promise to catch the error
    return (await response.json()) as GetManyResults<Movie>;
  } catch (error) {
    // TODO: a better logging solution would be great
    console.error('Error fetching movies:', error);
    throw new Error('Error fetching movies');
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    return;
  }

  // TODO: validate and deserialize parameters
  const { query, page } = req.query;

  const cached = await getCache(query as string, parseInt(page as string));
  if (cached) {
    res.status(200).json({ ...cached, cached: true });
    return;
  }

  try {
    const results = await fetchMovies(query as string, page as string);
    setCache(query as string, parseInt(page as string), results);

    res.status(200).json({ ...results, cached: false });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch movies' });
  }
}
