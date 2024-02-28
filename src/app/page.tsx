'use client';
import { Box, Container, Pagination, Stack } from '@mui/material';

import { isEmpty } from 'lodash-es';
import React, { useState } from 'react';

import { useMovies } from '@/app/hooks';
import EmptyMoviesHero from '@/components/EmptyMoviesHero';
import { MovieCardContainer } from '@/components/MovieCardContainer';
import Navbar from '@/components/Navbar';
import RequestErrorAlert from '@/components/RequestErrorAlert';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { data, isFetching, isFetched, error } = useMovies({
    query,
    page,
  });
  const onChangePage = (value: number) => {
    setPage(value);
  };
  return (
    <Stack
      direction="column"
      flexGrow={1}
      sx={{ pb: 2, height: '100%', overflow: 'hidden' }}
    >
      <Navbar
        handleChange={setQuery}
        isLoading={isFetching}
        isCached={data?.cached}
        hitCount={data?.hit_count}
      />
      <Container maxWidth="lg" sx={{ py: 2, flexGrow: 1, overflowY: 'auto' }}>
        {isEmpty(data?.results) && (
          <EmptyMoviesHero emptyResponse={isFetched} />
        )}
        {data?.results && <MovieCardContainer movies={data.results} />}
      </Container>
      {data && data.total_pages > 1 && (
        <Box display="flex" justifyContent="center" pt={2}>
          <Pagination
            size="large"
            count={data.total_pages}
            page={page}
            onChange={(_, value) => onChangePage(value)}
            color="primary"
          />
        </Box>
      )}
      <RequestErrorAlert error={error} />
    </Stack>
  );
};

export default MoviesPage;
