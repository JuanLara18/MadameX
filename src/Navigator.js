import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import SimpleAccordion from './SimpleAccordion';
import logo from './logo.png'
import { ImageList, ImageListItem, Typography } from '@mui/material';

// Update the styling for the navigator
const item = {
    py: '6px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.9)',
    borderLeft: '3px solid transparent',
    '&:hover': {
      color: "#fff",
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      borderLeft: '3px solid #4dabf5',
    },
    '&:focus': {
      bgcolor: 'rgba(255, 255, 255, 0.12)',
    },
  };
  
  const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 2,
    px: 3,
  };

export default function Navigator(props) {
    const { prop1, prop2, prop3, prop4, ...other } = { ...props };

    return (
        <Drawer
            variant="permanent"
            {...other}

        >
            <List disablePadding>
            <ListItem sx={{ ...item, ...itemCategory, fontSize: 25, color: '#fff', mt: 1.5, pb: 3 }}>
            <Typography sx={{ fontSize: 24, mr: 2, ml: 0, fontWeight: 600 }}>MadameX</Typography>
            <img
                src={logo}
                alt="logo"
                style={{
                width: "50px",
                filter: "brightness(1.2)",
                animation: "pulse 2s infinite ease-in-out"
                }}
                className="logo"
            />
            </ListItem>
                {/* <ListItem sx={{ ...item, ...itemCategory }}>
                    <ListItemIcon>
                        <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText>Project Overview</ListItemText>
                </ListItem> */}

                <Box key="Algorithms" sx={{ bgcolor: '#101F33' }}>
                    <ListItem sx={{ py: 2, px: 3 }}>
                        <ListItemText sx={{ color: '#fff' }}>Algorithms</ListItemText>
                    </ListItem>

                    <ListItem disablePadding key="selector">
                        <ListItemButton selected={true} sx={{ p: 0 }}>

                            <SimpleAccordion
                                prop1={props.prop1}
                                prop2={props.prop2}
                                prop3={props.prop3}
                                prop4={props.prop4}
                            />

                        </ListItemButton>

                    </ListItem>

                    {/* <ListItem disablePadding key="cryptoAnalysis">
                        <ListItemButton
                            selected={false}
                            sx={item}
                        // onClick={(e) => { selected: true }}
                        >
                            <ListItemIcon><QueryStatsIcon /></ListItemIcon>
                            <ListItemText>Unknown Algorithm</ListItemText>
                        </ListItemButton>
                    </ListItem> */}

                    <Divider sx={{ mt: 2 }} />
                </Box>

                <Box key="Other Options" sx={{ bgcolor: '#101F33' }}>
                    <ListItem sx={{ py: 2, px: 3 }}>
                        <ListItemText sx={{ color: '#fff' }}>Other Options</ListItemText>
                    </ListItem>

                    {/* <ListItem disablePadding key="records">
                        <ListItemButton selected={false} sx={item}>
                            <ListItemIcon><CenterFocusStrongIcon /></ListItemIcon>
                            <ListItemText>Records</ListItemText>
                        </ListItemButton>
                    </ListItem> */}

                    <ListItem disablePadding key="settings">
                        <ListItemButton selected={false} sx={item} disabled>
                            <ListItemIcon><SettingsIcon /> </ListItemIcon>
                            <ListItemText>Settings</ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding key="home">
                        <ListItemButton selected={false} sx={item} disabled>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItemButton>
                    </ListItem>


                    <Divider sx={{ mt: 2 }} />
                </Box>
            </List>
        </Drawer>
    );
}