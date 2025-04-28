import React from 'react';
import { Paper, Typography, Divider, Box } from '@mui/material';

/**
 * Consistent layout wrapper for algorithm pages
 * 
 * @param {Object} props Component props
 * @param {string} props.title Main title of the algorithm page
 * @param {string} props.subtitle Optional subtitle (action type)
 * @param {React.ReactNode} props.children Child components to render
 * @param {Object} props.sx Additional styles to apply to the container
 * @returns {React.ReactElement} Rendered component
 */
const AlgorithmLayout = ({ title, subtitle, children, sx = {} }) => {
  return (
    <Paper sx={{
      width: "auto",
      margin: 'auto',
      overflow: 'hidden',
      p: 4,
      borderRadius: 3,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.07)',
      ...sx
    }}>
      <Typography
        variant='h5'
        sx={{ 
          fontWeight: 600,
          color: '#1565c0',
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        {title}
        {subtitle && (
          <Typography 
            component="span" 
            sx={{ 
              fontSize: '0.85em', 
              color: '#5c6bc0', 
              bgcolor: 'rgba(92, 107, 192, 0.1)', 
              py: 0.5, 
              px: 1.5, 
              borderRadius: 4,
              ml: 2
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Typography>
      
      <Divider sx={{ my: 2 }} />
      
      <Box sx={{ pt: 1 }}>
        {children}
      </Box>
    </Paper>
  );
};

export default AlgorithmLayout;