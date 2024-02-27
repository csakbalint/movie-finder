import {
  AppBar,
  Box,
  LinearProgress,
  Toolbar,
  Typography,
} from '@mui/material';

import { FC } from 'react';

import SearchStatus from '@/components/SearchStatus';

import SearchBar from './SearchBar';

interface Props {
  isCached: boolean;
  isLoading: boolean;
  handleChange: (term: string) => void;
}

const Navbar: FC<Props> = ({ isCached, isLoading, handleChange }) => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Movie finder
        </Typography>
        <Box>
          <SearchBar handleChange={handleChange} />
        </Box>
        <SearchStatus isCached={isCached} isLoading={isLoading} />
      </Toolbar>
      <LinearProgress sx={{ visibility: isLoading ? 'visible' : 'hidden' }} />
    </AppBar>
  );
};

export default Navbar;
