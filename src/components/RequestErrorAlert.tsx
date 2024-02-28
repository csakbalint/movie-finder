import { Alert, Snackbar } from '@mui/material';

import { FC, useEffect, useState } from 'react';

// TODO: handle stacking of multiple errors
const RequestErrorAlert: FC<{ error: Error | null }> = ({ error }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    error && setIsOpen(true);
  }, [error]);
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      autoHideDuration={4000}
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Alert severity="error" variant="filled" sx={{ width: '100%' }}>
        {error?.message ?? 'Unknown error'}
      </Alert>
    </Snackbar>
  );
};

export default RequestErrorAlert;
