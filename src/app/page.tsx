'use client';
import { Container, Grid } from '@mui/material';

import { map } from 'lodash-es';
import React, { useState } from 'react';

import { useMovies } from '@/app/hooks';
import MovieCard from '@/components/MovieCard';
import Navbar from '@/components/Navbar';

const MoviesPage = () => {
  const [search, setSearch] = useState('');
  const { data } = useMovies(search);
  return (
    <>
      <Navbar handleChange={setSearch} />
      <Container maxWidth="lg" sx={{ mt: '30px' }}>
        <Grid container spacing={3}>
          {map(data.results, (item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default MoviesPage;
