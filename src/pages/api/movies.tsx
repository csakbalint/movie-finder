import { NextApiRequest, NextApiResponse } from 'next';

async function fetchMovies(query: string) {
  const apiKey = process.env.MOVIESDB_API_KEY;
  const apiUrl = `${process.env.MOVIESDB_API_URL}?query=${query}&api_key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }

    // await for the promise to catch the error
    return await response.json();
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw new Error('Error fetching movies');
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const { query } = req.query;
    try {
      const movies = await fetchMovies(query as string);
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch movies' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
