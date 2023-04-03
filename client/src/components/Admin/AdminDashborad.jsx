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
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, CircularProgress, Paper, styled, Typography,Button } from '@mui/material';
import { blue, blueGrey, deepPurple, grey, indigo, pink, red } from '@mui/material/colors';
import {  Input, Tooltip } from 'antd';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import { textAlign } from '@mui/system';
import Chart from "react-apexcharts"
import { adminMenu } from '../../Data/data';
import { BiChevronDown } from 'react-icons/bi';
import SidebarLayout from '../../SidebarLayout';
import { ApiBaseUrl } from '../../apiConfig';

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
    const [img, setImg] = React.useState('');

     

    const [donarsData, setDonarsData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [chartOptions, setChartOptions] = useState(LineChart)
    const [graphsLoading, setGraphsLoading] = useState(false)
    const [donarsAvailable, setDonarsAvailable] = useState(0)


    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/user/blood-donars').then((res) => {
            console.log(res.data)
            setDonarsData(res.data.data)
            setFilteredData(res.data.data)
        }).catch(err => console.log(err))
    }, [])

    useEffect(() => {
        setGraphsLoading(true)
        axios.get('http://localhost:8000/api/v1/user/count').then((res) => {
            console.log(res.data)
            let temp = chartOptions
            temp.options.xaxis.categories = Object.keys(res.data.count)
            temp.series[0].data = Object.values(res.data.count)
            setChartOptions(temp)
            setDonarsAvailable(res.data.donarsavailable)
            setGraphsLoading(false)
        }).catch(err => console.log(err))
    }, [chartOptions])

    useEffect(() => {
        axios.get(ApiBaseUrl + '/get_img').then((res) => {
            console.log(res.data)
            
            setImg(toBase64(res.data.data?.img.data.data))
            // setImg(new Buffer.from(res.data.data?.img.data.data).toString('base64'))
        })
    },[])

    console.log(chartOptions)
    const randomColors = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return "#" + randomColor;
    }

    function handleSearch(search) {
        if (search === "") {
            setFilteredData(donarsData)
            return
        }
        let filtered = donarsData.filter((it) => it.bloodgroup.includes(search))
        setFilteredData(filtered)

    }

    function toBase64(arr) {
        //arr = new Uint8Array(arr) if it's an ArrayBuffer
        return btoa(
           arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
     }
 
    const [showMore, setShowMore] = useState(3)

    console.log(showMore, filteredData.length, showMore !== filteredData,img)
    return (
        // <SidebarLayout>
        <Box sx={{ flexGrow: 1, padding: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ borderRadius: 2,height:350 }}>
                                <Typography variant='h6' sx={{ padding: 2 }}>Analytics</Typography>
                                {graphsLoading ? <CircularProgress /> : (
                                    <Box>
                                        {
                                            chartOptions.series[0].data?.length > 0 ?
                                                <Chart
                                                    options={chartOptions.options}
                                                    series={chartOptions.series}
                                                    height={250}
                                                    width={"100%"}
                                                    type="line"
                                                /> : <Typography>No Data Found!</Typography>
                                        }
                                    </Box>
                                )
                                }
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', height: 300, gap: 5 }}>
                                <Card sx={{ backgroundColor: blue[100], width: 250, height: 150, borderRadius: 3, padding: 2 }}>
                                    <Typography align='left' variant='h5' sx={{
                                        color: indigo[500],
                                        fontWeight: 'bold'
                                    }}>
                                        Total Donars
                                    </Typography>
                                    <Typography variant='h5' sx={{
                                        color: indigo[500],
                                        fontWeight: 'bold'
                                    }}>{donarsAvailable}</Typography>
                                </Card>
                                <Card sx={{ backgroundColor: pink[100], width: 250, height: 150, borderRadius: 3, padding: 2 }}>
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
                                        fontWeight: '700',
                                        mt: 3
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

                                    {filteredData.length > 0 && filteredData
                                        .slice(0, showMore)
                                        ?.map((item) => (
                                            <Card sx={{ display: 'flex', alignItems: "center", justifyContent: 'space-between', padding: 1, mt: 2, borderRadius: 2, background: '#fff' }}>
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
                                        {showMore < filteredData.length && <Box
                                    sx={{
                                        padding:2,
                                        color:indigo[300],
                                        textAlign:'center',
                                        background:blue[100],
                                        borderBottomLeftRadius:20,
                                        borderBottomRightRadius:20
                                    }}
                                        onClick={() => {
                                            if(showMore > filteredData.length){
                                                return
                                            }
                                            setShowMore((initial) => initial+3)
                                        }}  // set the currently expended item
                                    >
                                        <Button sx={{
                                            background:grey[100],
                                            borderRadius:10,
                                            position:'relative'
                                        }}>Show More</Button>
                                        <BiChevronDown position='absolute' color='white' size={40}/>
                                    </Box> }
                                    
                                </CardContent>
                            </Card>
                        </Grid>
                             </Grid>
                </Box>
                // </SidebarLayout>
        
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
