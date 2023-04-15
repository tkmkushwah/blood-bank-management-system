import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { NavLink } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import newlogo from '../../assets/newlogo.jpg'
import axios from 'axios';
import { useEffect, useState } from 'react'

import Grid from '@mui/material/Grid';
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, CircularProgress, Paper, styled, Typography,Button } from '@mui/material';
import { blue, blueGrey, deepPurple, grey, indigo, pink, red } from '@mui/material/colors';
import {  Input, Tooltip } from 'antd';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import { textAlign } from '@mui/system';
import Chart from "react-apexcharts"
import {userMenu} from '../../Data/BankData';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

 
function BankDashboardLayout(props) {
    const { window,children } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    
    const drawer = (
        <div>
            {/* <Toolbar /> */}
            <NavLink to="/"> <img textAlign='center' src={newlogo} height={160} /></NavLink>
            <Divider />
            <List>
                {localStorage.getItem("userType") === "admin" && userMenu.map((menu, index) => (
                    <Link to={menu.path} style={{textDecoration:'none',color:grey[800]}}>
                    <ListItem key={index}>
                        <ListItemButton sx={{background:grey[300],borderRadius:2}}>
                            <ListItemIcon>
                                <i className={menu.icon}></i>
                            </ListItemIcon>
                            <ListItemText primary={menu.name} />
                        </ListItemButton>
                    </ListItem>
                    </Link>
                ))}
            </List>
            {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const [showMore, setShowMore] = useState(3)

     
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Blood Bank Management
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                // component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 2, width: { sm: `calc(100% - ${drawerWidth}px)`, background: '#F8F8FF' } }}
            >
                <Toolbar />
                
                {children}
            </Box>
        </Box>
    );
}

BankDashboardLayout.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default BankDashboardLayout;
