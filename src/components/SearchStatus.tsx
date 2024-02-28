import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import { Box, Typography } from '@mui/material';

import { FC } from 'react';

interface Props {
  isLoading: boolean;
  isCached?: boolean;
  hitCount?: number;
}

// FIXME: what's the point to display loading state, there is a progress bar for that
const SearchStatus: FC<Props> = ({
  isLoading,
  isCached = false,
  hitCount = 0,
}) => {
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
        {isLoading
          ? 'Loading...'
          : isCached
            ? `Cached (${hitCount})`
            : 'Fetched'}
      </Typography>
    </Box>
  );
};

export default SearchStatus;
