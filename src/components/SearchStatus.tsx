import { Box, Typography } from '@mui/material';

import { FC } from 'react';

interface Props {
  isLoading: boolean;
}

const SearchStatus: FC<Props> = ({ isLoading }) => {
  return (
    <Box>
      <Typography variant="body2" color="text.white" fontWeight="bold">
        Updated
      </Typography>
    </Box>
  );
};

export default SearchStatus;
