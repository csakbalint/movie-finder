import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from '@mui/material';

import React from 'react';

import { Movie } from '@/interfaces';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const image = movie.poster_path
    ? `${process.env.NEXT_PUBLIC_MOVIESDB_IMAGE_URL}${movie.poster_path}`
    : '/movie-placeholder.png';
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Tooltip title={movie.overview}>
            <Typography noWrap variant="body2" color="text.secondary">
              {movie.overview}
            </Typography>
          </Tooltip>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
