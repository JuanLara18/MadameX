import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import SecurityIcon from '@mui/icons-material/Security';
import LabTabs from './LabTabs';
import InitialLabTabs from './InitialLabTabs';
import logo from './logo.png';

function Header(props) {
  const { onDrawerToggle, ...other } = { ...props };

  return (
    <React.Fragment>
      <AppBar 
        position="sticky" 
        elevation={0} 
        sx={{ 
          background: "linear-gradient(90deg, rgba(21,34,56,1) 0%, rgba(28,54,84,1) 100%)",
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 64, sm: 70 } }}>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.08)',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.15)' },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            
            <Grid item>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar 
                  src={logo} 
                  alt="MadameX Logo" 
                  sx={{ 
                    width: 40, 
                    height: 40, 
                    mr: 1.5,
                    bgcolor: 'transparent',
                    animation: 'pulse 4s infinite ease-in-out',
                    '@keyframes pulse': {
                      '0%': { transform: 'scale(1)', opacity: 1 },
                      '50%': { transform: 'scale(1.05)', opacity: 0.9 },
                      '100%': { transform: 'scale(1)', opacity: 1 },
                    }
                  }} 
                />
                <Typography 
                  color="inherit" 
                  variant="h5" 
                  component="h1" 
                  sx={{ 
                    fontWeight: 600, 
                    letterSpacing: 0.5,
                    fontSize: { xs: '1.2rem', sm: '1.5rem' }
                  }}
                >
                  MadameX
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs />
            
            <Grid item>
              <Tooltip title="Help & Documentation">
                <IconButton 
                  href='https://drive.google.com/file/d/1SDfttkWMeUh1vzmamreGQZoJerFVndBK/view?usp=drivesdk' 
                  color="inherit"
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.15)' },
                    transition: 'all 0.2s',
                  }}
                >
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
        
        <Box sx={{ px: 3, pb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Breadcrumbs 
              separator={<NavigateNextIcon fontSize="small" sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />}
              aria-label="breadcrumb"
              sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <HomeIcon sx={{ mr: 0.5, fontSize: 18 }} />
                <Typography color="inherit" variant="body2">
                  Home
                </Typography>
              </Box>
              
              {(other.prop1 !== "none" && other.prop1 != null) && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <SecurityIcon sx={{ mr: 0.5, fontSize: 18 }} />
                  <Typography color="inherit" variant="body2">
                    {other.prop1}
                  </Typography>
                </Box>
              )}
            </Breadcrumbs>
          </Box>
          
          <Typography 
            color="inherit" 
            variant="h4" 
            component="h1"
            sx={{ 
              fontWeight: 700, 
              mb: 1,
              fontSize: { xs: '1.75rem', sm: '2.25rem' },
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            {(other.prop1 === "none" || other.prop1 == null) 
              ? "Welcome to Modern Cryptography" 
              : `${other.prop1}`
            }
          </Typography>
          
          <Typography 
            variant="body1" 
            color="rgba(255, 255, 255, 0.7)"
            sx={{ 
              maxWidth: 800, 
              display: { xs: 'none', sm: 'block' },
              mb: 2
            }}
          >
            {(other.prop1 === "none" || other.prop1 == null) 
              ? "Explore, encrypt, decrypt, and analyze with our comprehensive toolkit" 
              : "Secure your data with advanced encryption techniques and mathematical algorithms"
            }
          </Typography>
        </Box>
        
        {(other.prop1 == null || other.prop1 === "none") ? (
          <InitialLabTabs />
        ) : (
          <LabTabs
            prop3={other.prop3}
            prop4={other.prop4}
          />
        )}
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;