import SearchIcon from '@mui/icons-material/SearchOutlined';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import { Box, Typography } from '@mui/material';

import { FC } from 'react';

interface Props {
  emptyResponse: boolean;
}

const EmptyMoviesHero: FC<Props> = ({ emptyResponse }) => {
  const Icon = emptyResponse ? SentimentDissatisfiedIcon : SearchIcon;
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Box display="flex" flexDirection="row" gap={1} alignItems="center">
        <Icon sx={{ fontSize: 32 }} />
        <Typography variant="h6" component="div">
          {emptyResponse
            ? 'No movies found for this search query. Please try another one!'
            : 'Type anything in the search bar to get started!'}
        </Typography>
      </Box>
    </Box>
  );
};

export default EmptyMoviesHero;
