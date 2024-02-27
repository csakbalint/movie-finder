// components/MovieContainer.tsx

import { Grid } from '@mui/material';

import React from 'react';

import MovieCard from './MovieCard';

// Dummy movie data for demonstration
const movies = [
  {
    adult: false,
    backdrop_path:
      'http://image.tmdb.org/t/p/w500/cQIVPAzGRL61udgpUQG6grK9e7j.jpg',
    genre_ids: [35, 10402],
    id: 1148969,
    original_language: 'es',
    original_title: 'Los (casi) ídolos de Bahía Colorada',
    overview:
      "A colorful Mexican town. Two half brothers. Romeo and Preciado meet again to honor their dad's memory in a car rally full of adrenaline and banda music.",
    popularity: 8.268,
    poster_path:
      'http://image.tmdb.org/t/p/w500/2aBjSNnl1eIsR8RVNlczc1beL6l.jpg',
    release_date: '2023-07-19',
    title: 'The (Almost) Legends',
    video: false,
    vote_average: 7.883,
    vote_count: 47,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [35, 18, 10751],
    id: 1155696,
    original_language: 'ja',
    original_title: 'オールモストピープル',
    overview:
      'Four dramas about brothers and sisters, each of whom lacks a certain emotion.',
    popularity: 3.286,
    poster_path:
      'http://image.tmdb.org/t/p/w400/uczrUtJeZUh9Fnpd6PLrT5ZkSbA.jpg',
    release_date: '2023-09-30',
    title: 'Almost People',
    video: false,
    vote_average: 8.25,
    vote_count: 4,
  },
  {
    adult: false,
    backdrop_path:
      'http://image.tmdb.org/t/p/w400/mvAxm6CKIVnzyFw2BWoNBZyCgoE.jpg',
    genre_ids: [18, 36, 10749],
    id: 997777,
    original_language: 'de',
    original_title: 'Alma und Oskar',
    overview:
      'Vienna, Austria, 1912. The brilliant painter Oskar Kokoschka, considered one of the main representatives of the expressionist movement, has a tumultuous relationship, both professional and romantic, with the composer Alma Mahler.',
    popularity: 4.426,
    poster_path:
      'http://image.tmdb.org/t/p/w400/aWRqN48OFQcHChbjTwPc2ln4QRA.jpg',
    release_date: '2023-07-06',
    title: 'Alma and Oskar',
    video: false,
    vote_average: 6.5,
    vote_count: 2,
  },
];

const MovieContainer: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {movies.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieContainer;
