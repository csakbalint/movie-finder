import { Container } from '@mui/material';

import React from 'react';

import Navbar from '@/components/Navbar';

import MovieContainer from '../components/MovieContainer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: '30px' }}>
        <MovieContainer />
      </Container>
    </>
  );
};

export default Home;
