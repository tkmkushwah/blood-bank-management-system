import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, blueGrey, green, grey, indigo, lightBlue, lightGreen, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SidebarLayout from '../../SidebarLayout';
import { Badge, Box, Button, CircularProgress, Grid, InputLabel, Stack, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CallIcon from '@mui/icons-material/Call';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import PlaceIcon from '@mui/icons-material/Place';
import { Input, Select, Tooltip } from 'antd';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import { BiChevronDown } from 'react-icons/bi';

export default function ReceiverDashboard() {

    const [requestsForReceiver, setRequestsForReceiver] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [showMore, setShowMore] = useState(4)
    const [loadingData, setLoadingData] = useState(false)

    useEffect(() => {
        setLoadingData(true)
        axios.get("http://localhost:8000/api/v1/user/donar-requests").then((res) => {
            console.log(res.data)
            if (res.data.success) {
                setRequestsForReceiver(res.data.data)
                setFilteredData(res.data.data)
                setLoadingData(false)
            }
        }).catch((er) => console.log(er))
    }, [])

    function handleSearch(search) {
        if (search === "") {
            setFilteredData(requestsForReceiver)
            return
        }
        let filtered = requestsForReceiver.filter((it) => it.bloodgroup.includes(search))
        setFilteredData(filtered)

    }

    return (
        <SidebarLayout>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <Card sx={{
                        height: 100,
                        background: lightGreen[200],
                        padding: 2
                    }}>
                        <Typography variant='h6' sx={{
                            color: green[700]
                        }}>
                            Blood Groups and Units status
                        </Typography>
                        <Badge badgeContent={30} size="xxl" >
                            <Typography fontSize="xl">
                                <Box sx={{
                                    padding: 1,
                                    borderRadius: 2,
                                    textAlign: 'center',
                                    backgroundColor: red[50]
                                }}>
                                    <Typography sx={{
                                        color: red[500]
                                    }}>
                                        A+
                                    </Typography>
                                </Box>
                            </Typography>
                        </Badge>
                    </Card>
                </Grid>
                <Grid item xs={6} md={6}>
                    {/* sdjijsd */}
                </Grid>
                <Grid item xs={12}>
                    <Card sx={{ p: 4 }}>
                        <Grid sx={{ rowGap: 2 }} container spacing={2}>
                            <Grid xs={12} md={6} lg={4}>
                                <InputLabel>Name</InputLabel>
                                <TextField
                                    size='small'
                                    required
                                    placeholder='Enter Name'
                                />
                            </Grid>
                            <Grid xs={12} md={6} lg={4}>
                                <InputLabel>Email</InputLabel>
                                <TextField
                                    size='small'
                                    type={"email"}
                                    required
                                    placeholder='Enter Name'
                                />
                            </Grid>
                            <Grid xs={12} md={6} lg={4}>
                                <InputLabel>Phone</InputLabel>
                                <TextField
                                    size='small'
                                    required
                                    placeholder='Enter Name'
                                />
                            </Grid>
                            <Grid xs={12} md={6} lg={4}>
                                <InputLabel>DOB</InputLabel>
                                <TextField
                                    size='small'
                                    type={"date"}
                                    required
                                    placeholder='Enter Name'
                                />
                            </Grid>
                            <Grid xs={12} md={6} lg={4}>
                                <InputLabel>Select BloodGroup</InputLabel>
                                <Select
                                    showSearch
                                    style={{
                                        width: 220,
                                        marginTop: 2
                                    }}
                                    size='large'
                                    placeholder="Search to Select"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: '1',
                                            label: 'Not Identified',
                                        },
                                        {
                                            value: '2',
                                            label: 'Closed',
                                        },
                                        {
                                            value: '3',
                                            label: 'Communicated',
                                        },
                                        {
                                            value: '4',
                                            label: 'Identified',
                                        },
                                        {
                                            value: '5',
                                            label: 'Resolved',
                                        },
                                        {
                                            value: '6',
                                            label: 'Cancelled',
                                        },
                                    ]}
                                />
                            </Grid>
                            <Grid xs={12} md={6} lg={4}>
                                <InputLabel>Units</InputLabel>
                                <TextField
                                    size='small'
                                    required
                                    placeholder='Enter Name'
                                />
                            </Grid>
                            <Grid xs={12} md={6} lg={4}>
                                <InputLabel>Address</InputLabel>
                                <TextField
                                    size='small'
                                    required
                                    placeholder='Enter Name'
                                />
                            </Grid>
                            <Grid xs={12} md={6} lg={4}>
                                <InputLabel>Doctor's Approval</InputLabel>
                                <Button variant="contained" size='small' component="label" sx={{ mt: 1 }}>
                                    Upload
                                    <input hidden accept="image/*" required type="file" />
                                </Button>
                            </Grid>
                            <Grid xs={12} textAlign="center">
                                <Button type='submit' variant='contained'>Submit</Button>
                            </Grid>

                        </Grid>
                    </Card>
                </Grid>
                {/* <Grid item xs={12} md={12}> */}

                {/* </Grid> */}
            </Grid>
            <Box display={"flex"} alignItems={"center"} sx={{ width: '100%', flexWrap: 'wrap', gap: 2, mt: 2, p: 1, background: lightBlue[50] }}>
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
                {!loadingData ? (
                    <>
                        {filteredData?.length > 0 && filteredData.slice(0, showMore).map((item, index) => (
                            <Card sx={{ width: 250, maxHeight: 350 }} key={index}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                            {item.name[0]}
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <BloodtypeIcon color='error' />
                                        </IconButton>
                                    }
                                    title={item.name}
                                    subheader={item.DOB.split('T')[0]}
                                    titleTypographyProps={{
                                        fontSize: 15, fontWeight: 600,
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}
                                    subheaderTypographyProps={{ fontWeight: 400 }}
                                />
                                <CardContent>
                                    <Box display="flex" alignItems={"center"} gap={2} sx={{
                                        background: grey[200],
                                        p: 1,
                                        borderRadius: 2
                                    }}>
                                        {/* <Box display="flex" alignItems={"center"}> */}
                                        <CallRoundedIcon color='success' fontSize='medium' />
                                        <Typography>{item.phone}</Typography>
                                        {/* </Box> */}
                                    </Box>
                                    <Box display="flex" alignItems={"center"} gap={2} sx={{
                                        background: grey[200],
                                        p: 1,
                                        borderRadius: 2,
                                        mt: 1
                                    }}>
                                        {/* <Box display="flex" alignItems={"center"}> */}
                                        <PlaceIcon color='success' fontSize='medium' />
                                        <Typography>{item.address}</Typography>
                                        {/* </Box> */}
                                    </Box>
                                    <Box display="flex" alignItems={"center"} justifyContent="space-between" gap={2} sx={{
                                        background: grey[200],
                                        p: 1,
                                        borderRadius: 2,
                                        mt: 1,
                                    }}>
                                        {/* <Box display="flex" alignItems={"center"}> */}
                                        <Typography fontWeight={700}>Blood Group</Typography>
                                        <Typography fontWeight={700} color='red'>{item.bloodgroup}</Typography>
                                        {/* </Box> */}
                                    </Box>
                                    <Box display="flex" alignItems={"center"} justifyContent="space-between" gap={2} sx={{
                                        background: grey[200],
                                        p: 1,
                                        borderRadius: 2,
                                        mt: 1
                                    }}>
                                        {/* <Box display="flex" alignItems={"center"}> */}
                                        <Typography fontWeight={700}>Units Available</Typography>
                                        <Typography fontWeight={700} color='red'>{item.units}</Typography>
                                        {/* </Box> */}
                                    </Box>
                                </CardContent>
                                <CardActions disableSpacing sx={{
                                    textAlign: 'center', ml: 1, pb: 2
                                }}>
                                    {/* <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton> */}
                                    <Button textAlign="center" variant="contained" color='info' endIcon={<SendIcon />}>
                                        Send Request
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}
                    </>
                ) : <Box display={"flex"} alignItems={"center"}>
                    Fetching Data
                    <CircularProgress textAlign="center" />
                </Box>}

            </Box>
            {showMore < filteredData.length && !loadingData && <Box
                sx={{
                    padding: 2,
                    color: indigo[300],
                    textAlign: 'center',
                    background: blue[100],
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
                onClick={() => {
                    if (showMore > filteredData.length) {
                        return
                    }
                    setShowMore((initial) => initial + 3)
                }}  // set the currently expended item
            >
                <Button sx={{
                    background: grey[100],
                    borderRadius: 10,
                    position: 'relative'
                }}>Show More</Button>
                <BiChevronDown position='absolute' color='white' size={40} />
            </Box>}
        </SidebarLayout>
    );
}
