import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import { useState } from 'react';

export const LoadButton = ({children}) => {

  const [loading, setLoading] = useState(true);
  
  const handleClick = () => {
    setLoading(true);
  }

  return (
    <Box>
      <Box sx={{ '& > button': { m: 1 } }}>
        <LoadingButton
          size="small"
          onClick={handleClick}
          loading={!loading}
          loadingIndicator="Loading…"
                  variant="outlined"
                  type="submit"
        >
          <span>{children}</span>
        </LoadingButton>
      </Box>
    </Box>
  );
}