import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';

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
import DashboardLayout from '../Layout/DashboardLayout'
import Grid from '@mui/material/Grid';
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Paper, styled, Typography } from '@mui/material';
import { blue, blueGrey, deepPurple, grey, indigo, pink, red } from '@mui/material/colors';
import { Input, Tooltip } from 'antd';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import { textAlign } from '@mui/system';
import Chart from "react-apexcharts"
import { adminMenu } from '../../Data/data';
 
const drawerWidth = 240;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: 1,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const LineChart = {
  series: [{
    name: "Donors",
    data: []
  },
  {
    name: "Reciever",
    data: []
  }
  ],
  options: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: [],
    }
  },
};
function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [donarsData, setDonarsData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [chartOptions, setChartOptions] = useState(LineChart)

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/user/blood-donars').then((res) => {
      console.log(res.data)
      setDonarsData(res.data.data)
      setFilteredData(res.data.data)
    }).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/user/count').then((res) => {
      console.log(res.data)
      let temp = chartOptions
      temp.options.xaxis.categories = Object.keys(res.data.count)
      temp.series[0].data = Object.values(res.data.count)
      setChartOptions(temp)
    }).catch(err => console.log(err))
  }, [chartOptions])

  console.log(chartOptions)
  const randomColors = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
  }

  function handleSearch(search){
    if(search === ""){
        setFilteredData(donarsData)
        return
    }
    let filtered = donarsData.filter((it) => it.bloodgroup.includes(search))
    setFilteredData(filtered)

  }

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <img textAlign='center' src={newlogo} height={160}/>
      <Divider />
      <List>
        {adminMenu.map((menu, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <i className={menu.icon}></i>
              </ListItemIcon>
              <ListItemText primary={menu.name} />
            </ListItemButton>
          </ListItem>
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
        component="nav"
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
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`,background:'#F8F8FF' } }}
      >
        <Toolbar />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
        <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 2 }}>
              <Typography variant='h6' sx={{ padding: 2 }}>Analytics</Typography>
              {chartOptions.series[0].data?.length > 0 ? <Chart
                options={chartOptions.options}
                series={chartOptions.series}
                height={250}
                width={"100%"}
                type="line"
              /> : "loading"}
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', alignItems:'flex-start',height: 300,gap:5 }}>
              <Card sx={{ backgroundColor: blue[100], width:250, height: 150, borderRadius: 3, padding: 2 }}>
                <Typography align='left' variant='h5' sx={{
                  color: indigo[500],
                  fontWeight: 'bold'
                }}>
                  Total Donars
                </Typography>
                <Typography variant='h5' sx={{
                  color: indigo[500],
                  fontWeight: 'bold'
                }}>10</Typography>
              </Card>
              <Card sx={{ backgroundColor: pink[100],width:250, height: 150, borderRadius: 3, padding: 2 }}>
                <Typography align='left' variant='h5' sx={{
                  color: pink[500],
                  fontWeight: 'bold'
                }}>
                  Total Requests
                </Typography>
                <Typography variant='h5' sx={{
                  color: pink[500],
                  fontWeight: 'bold'
                }}>5</Typography>
              </Card>

            </Box>
          </Grid>
          {/* <Grid item xs={6} md={4}>
            <Item>xs=6 md=4</Item>
          </Grid> */}
          <Grid item xs={12} md={6}>
            <Card>
            <CardContent>
            <Typography variant='h6' sx={{
              fontWeight:'700',
              mt:3
            }}>Donars Available</Typography>
            <Input 
            onChange={(e) => handleSearch(e.target.value)}
              style={{ marginTop: 20 }}
              placeholder="Search by Blood group"
              prefix={<SearchIcon />}
              suffix={
                <Tooltip title="Extra information">
                  <InfoIcon
                  />
                </Tooltip>
              }
            />
            
            {filteredData.length > 0 && filteredData?.map((item) => (
              <Card sx={{ display: 'flex', alignItems: "center", justifyContent: 'space-between', padding: 1, mt: 2, borderRadius: 2,background:'#fff' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex' }}>
                    <Avatar sx={{ bgcolor: randomColors }}>{item.name[0].toUpperCase()}</Avatar>
                  </Box>
                  <CardContent>
                    <Typography variant='h7' sx={{ color: 'black' }}>{item.name}</Typography>
                    <Typography variant='subtitle2'>{item.DOB.split('T')[0]}</Typography>
                  </CardContent>
                </Box>
                <Box sx={{
                  padding: 1,
                  borderRadius: 2,
                  textAlign: 'center',
                  backgroundColor: red[50]
                }}>
                  <Typography sx={{
                    color: red[500]
                  }}>
                    {item.bloodgroup}
                  </Typography>
                </Box>
              </Card>
            ))}
            </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
