import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';

const EmptyMoviesHero = () => (
  <Box
    display="flex"
    width="100%"
    height="100%"
    alignItems="center"
    justifyContent="center"
  >
    <Box display="flex" flexDirection="row" gap={1} alignItems="center">
      <SearchIcon sx={{ fontSize: 32 }} />
      <Typography gutterBottom variant="h5" component="div" m={0}>
        Type anything in the search bar to get started!
      </Typography>
    </Box>
  </Box>
);

export default EmptyMoviesHero;
