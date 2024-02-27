import { Grid } from '@mui/material';

import { map } from 'lodash-es';
import { FC } from 'react';

import MovieCard from '@/components/MovieCard';
import { Movie } from '@/interfaces';

interface Props {
  movies: Movie[];
}

export const MovieCardContainer: FC<Props> = ({ movies }) => (
  <Grid container spacing={3}>
    {map(movies, (item) => (
      <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
        <MovieCard movie={item} />
      </Grid>
    ))}
  </Grid>
);
