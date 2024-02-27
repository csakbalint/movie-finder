import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import { FC } from 'react';

import SearchBar from './SearchBar';

interface Props {
  handleChange: (term: string) => void;
}

const Navbar: FC<Props> = ({ handleChange }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
