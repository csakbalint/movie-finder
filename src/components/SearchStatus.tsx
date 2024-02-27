import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import { Box, Typography } from '@mui/material';

import { FC } from 'react';

interface Props {
  isCached: boolean;
  isLoading: boolean;
}

const SearchStatus: FC<Props> = ({ isCached, isLoading }) => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
      {isLoading ? (
        <CachedOutlinedIcon />
      ) : isCached ? (
        <StorageOutlinedIcon />
      ) : (
        <CloudDownloadOutlinedIcon />
      )}
      <Typography variant="body2" color="text.white" fontWeight="bold">
        {isLoading ? 'Loading...' : isCached ? 'Cached' : 'Fetched'}
      </Typography>
    </Box>
  );
};

export default SearchStatus;
