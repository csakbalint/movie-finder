'use client';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import {
  alpha,
  IconButton,
  InputAdornment,
  InputBase,
  styled,
  useTheme,
} from '@mui/material';

import { debounce } from 'lodash-es';
import React, { ChangeEventHandler, useEffect, useState } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '24ch',
    },
  },
}));

interface Props {
  handleChange: (term: string) => void;
}

const SearchBar: React.FC<Props> = ({ handleChange }) => {
  const theme = useTheme();
  const [search, setSearch] = useState('');
  const debouncedSetSearch = debounce(setSearch, 500);
  const handleSearchInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    debouncedSetSearch(e.target.value);
  };
  const handleSearchButtonClick = () => {
    handleChange(search);
  };

  useEffect(() => {
    search.length > 2 && handleChange(search ?? '');
  }, [search, handleChange]);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        onChange={handleSearchInputChange}
        inputProps={{ 'aria-label': 'search' }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              disabled={!search}
              type="button"
              sx={{ p: 0.5, m: 0.5 }}
              aria-label="search"
              onClick={handleSearchButtonClick}
            >
              <ArrowForwardIcon sx={{ color: theme.palette.common.white }} />
            </IconButton>
          </InputAdornment>
        }
      />
    </Search>
  );
};

export default SearchBar;
