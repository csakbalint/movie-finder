'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { GetManyResults, Movie } from '@/interfaces';

export const QUERY_KEY = 'movies';

interface GetMoviesParams {
  query: string;
  page?: number;
}

export async function getMovies({
  query,
  page,
}: GetMoviesParams): Promise<GetManyResults<Movie>> {
  const response = await fetch(
    `/api/movies?query=${encodeURIComponent(query)}&page=${page}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const data = await response.json();
  return data;
}

export const useMovies = ({ query, page = 1 }: GetMoviesParams) => {
  return useQuery({
    queryKey: [QUERY_KEY, query, page],
    queryFn: () => getMovies({ query, page }),
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
