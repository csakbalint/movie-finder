'use client';
import { Box, Container, Grid, Pagination } from '@mui/material';

import { map } from 'lodash-es';
import React, { useState } from 'react';

import { useMovies } from '@/app/hooks';
import MovieCard from '@/components/MovieCard';
import Navbar from '@/components/Navbar';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { data, isFetching } = useMovies({ query, page });
  const onChangePage = (value: number) => {
    setPage(value);
  };
  return (
    <>
      <Navbar handleChange={setQuery} isLoading={isFetching} />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3}>
          {map(data.results, (item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={item} />
            </Grid>
          ))}
        </Grid>
        {data.total_pages > 1 && (
          <Box display="flex" justifyContent="center" pt={4}>
            <Pagination
              size="large"
              count={data.total_pages}
              page={page}
              onChange={(_, value) => onChangePage(value)}
              color="primary"
            />
          </Box>
        )}
      </Container>
    </>
  );
};

export default MoviesPage;
