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

// FIXME: prop drilling these parameters are not ideal
interface Props {
  isLoading: boolean;
  handleChange: (term: string) => void;
  isCached?: boolean;
  hitCount?: number;
}

const Navbar: FC<Props> = ({ isCached, hitCount, isLoading, handleChange }) => {
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
          Movie Finder
        </Typography>
        <SearchBar handleChange={handleChange} />
        <SearchStatus {...{ isCached, isLoading, hitCount }} />
      </Toolbar>
      <LinearProgress sx={{ visibility: isLoading ? 'visible' : 'hidden' }} />
    </AppBar>
  );
};

export default Navbar;
