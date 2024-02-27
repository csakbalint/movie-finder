import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import React from 'react';

import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
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
            <SearchBar />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
