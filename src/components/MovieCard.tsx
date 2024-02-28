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
  // TODO: it would be better to compose the url based on the size of the card
  // because the service provides different sizes
  const image = movie.poster_path
    ? `${process.env.NEXT_PUBLIC_MOVIESDB_IMAGE_URL}${movie.poster_path}`
    : '/movie-placeholder.png';
  return (
    <Card>
      {/** TODO: implement details page */}
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
          {/** FIXME: overview can be really long. Maybe we should display only the first sentence */}
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
