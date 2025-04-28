import React from 'react';
import { Box, Typography, IconButton, Tooltip, Paper } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const ResultDisplay = ({ title, content, variant = "default" }) => {
  // Define color schemes based on variant
  const colorSchemes = {
    default: {
      bg: "#f5f9ff",
      border: "#e0e9fa",
      title: "#1976d2"
    },
    encrypted: {
      bg: "#f0f7ff",
      border: "#bbdefb",
      title: "#1565c0"
    },
    decrypted: {
      bg: "#f1f8e9",
      border: "#c5e1a5",
      title: "#558b2f"
    },
    error: {
      bg: "#ffebee",
      border: "#ffcdd2",
      title: "#c62828"
    }
  };
  
  const scheme = colorSchemes[variant] || colorSchemes.default;
  
  return (
    <Paper elevation={0} sx={{ mb: 3, overflow: 'hidden', borderRadius: 2 }}>
      <Typography 
        variant="subtitle1" 
        sx={{ 
          py: 1, 
          px: 2, 
          backgroundColor: scheme.title, 
          color: '#fff',
          fontWeight: 500
        }}
      >
        {title}
      </Typography>
      
      <Box
        sx={{
          width: "100%",
          bgcolor: scheme.bg,
          border: `1px solid ${scheme.border}`,
          borderTop: 0,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          p: 2,
          minHeight: "60px",
          overflowWrap: 'break-word',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          position: 'relative',
          wordBreak: 'break-word'
        }}
      >
        {content || "No data to display"}
        
        <Tooltip title="Copy to Clipboard" placement="top">
          <IconButton
            onClick={() => { navigator.clipboard.writeText(content) }}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              bgcolor: 'rgba(0, 0, 0, 0.05)',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.1)',
              },
            }}
            size="small"
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </Paper>
  );
};

export default ResultDisplay;