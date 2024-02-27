'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { GetManyResults, Movie } from '@/interfaces';

export const QUERY_KEY = 'movies';

interface GetMoviesParams {
  query: string;
}

export async function getMovies({
  query,
}: GetMoviesParams): Promise<GetManyResults<Movie>> {
  const response = await fetch(
    `/api/movies?query=${encodeURIComponent(query)}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const data = await response.json();
  return data;
}

export const useMovies = (query: string) => {
  return useQuery({
    queryKey: [QUERY_KEY, query],
    queryFn: () => getMovies({ query }),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    enabled: !!query,
    initialData: {
      results: [],
      page: 1,
      total_pages: 0,
      total_results: 0,
    },
  });
};
