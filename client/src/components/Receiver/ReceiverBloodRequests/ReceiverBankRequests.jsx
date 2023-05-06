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
import SidebarLayout from '../../../SidebarLayout';
import { Badge, Box, Button, CircularProgress, Grid, InputLabel, Stack, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CallIcon from '@mui/icons-material/Call';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import PlaceIcon from '@mui/icons-material/Place';
import { Alert, Input, Select, Tooltip } from 'antd';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import { BiChevronDown } from 'react-icons/bi';
import { ApiBaseUrl } from '../../../apiConfig';
import { Toaster, toast } from 'react-hot-toast';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ReceiverDashboard() {

    const [requestsForReceiver, setRequestsForReceiver] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [showMore, setShowMore] = useState(4)
    const [loadingData, setLoadingData] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [dob, setDob] = useState('')
    const [bloodgroup, setBloodGroup] = useState([])
    const [units, setUnits] = useState('')
    const [address, setAddress] = useState('')
    const [doctorapproval, setDoctorApproval] = useState('')
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const options = [
        { value: 'A+', label: 'A+' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B-', label: 'B-' },
        { value: 'AB+', label: 'AB+' },
        { value: 'AB-', label: 'AB-' },
        { value: 'O+', label: 'O+' },
        { value: 'O-', label: 'O-' },
        { value: 'A2-', label: 'A2-' },
        { value: 'A2+', label: 'A2+' },
        { value: 'A1B-', label: 'A1B-' },
        { value: 'A1B+', label: 'A1B+' },
        { value: 'A2B+', label: 'A2B+' },
        { value: 'A2B-', label: 'A2B-' },
        { value: 'Bombay Blood group', label: 'Bombay Blood group' },
        { value: 'INRA', label: 'INRA' },
        { value: "Don't know", label: "Don't know" },
    ]

    useEffect(() => {
        setLoadingData(true)
        axios.get(ApiBaseUrl+"/bank_requests").then((res) => {
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

    const handleRequest = (item) => {
        console.log(item.email)
        axios.post(ApiBaseUrl+"/check_bankreceiver", {
            "email": localStorage.getItem("email")
        }).then((res) => {
            console.log(res.data)
            if (res.data.success) {
                const user = res.data.data
                if (user.requests < 1) {
                    axios.post(ApiBaseUrl+"/update_rectobank_requests", {
                        email: localStorage.getItem("email"),
                        donor_id:item.bankemail
                    }).then((resp) => {
                        console.log(resp.data)
                        if (res.data.success) {
                            toast.success("Your blood request have been sent successfully")
                        }
                    })
                } else {
                    toast.error("You can only send one request at a time")
                }
            } else {
                handleClickOpen()
            }
        }).catch((err) => console.log(err))
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const uploadImage = async (event) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        setDoctorApproval(base64)
        return base64
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(ApiBaseUrl + '/apply_bankreceiver', {
            name: name,
            recemail: email,
            phone: Number(phone),
            DOB: dob,
            bloodgroup: bloodgroup,
            units: units,
            address: address,
            doctorapproval: doctorapproval
        }).then((res) => {
            console.log(res.data)
            if(res.data.success){
                toast.success("You are successfully registered")
            }
        }).catch(err => console.log(err))
    }
    const navigate = useNavigate()
    const handleStatus = (item) => {
        navigate(`${item._id}`)
    }



    console.log(bloodgroup, doctorapproval)
    return (
        <SidebarLayout>
            <Toaster />
            <Grid container spacing={2}>
                {/* <Grid item xs={6} md={6}>
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
                    
                </Grid> */}
                <Grid item xs={12}>
                    <Card sx={{ p: 4 }}>
                        <Alert
                            message="Required"
                            description="Please provide following details by filling the form and after submitting your details you can browse below requests from our recent donars and send request for blood you need and after approval of admin you will be able to get the blood"
                            type="info"
                            showIcon
                        />
                        {/* <Typography>Please fill the form to get the blood of your need</Typography> */}
                        <CardContent sx={{ py: 5 }}>
                            <form onSubmit={handleSubmit}>
                                <Grid sx={{ rowGap: 2 }} container spacing={2}>
                                    <Grid xs={12} md={6} lg={4}>
                                        <InputLabel>Name</InputLabel>
                                        <TextField
                                            size='small'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            placeholder='Enter name'
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6} lg={4}>
                                        <InputLabel>Email</InputLabel>
                                        <TextField
                                            size='small'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type={"email"}
                                            required
                                            placeholder='Enter email'
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6} lg={4}>
                                        <InputLabel>Phone</InputLabel>
                                        <TextField
                                            size='small'
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                            placeholder='Enter contact number'
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6} lg={4}>
                                        <InputLabel>DOB</InputLabel>
                                        <TextField
                                            size='small'
                                            type={"date"}
                                            value={dob}
                                            onChange={(e) => setDob(e.target.value)}
                                            required
                                            placeholder='Enter Date of birth'
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6} lg={4}>
                                        <InputLabel>Select BloodGroup</InputLabel>
                                        <Select
                                            showSearch
                                            required
                                            style={{
                                                width: 220,
                                                marginTop: 2
                                            }}
                                            size='large'
                                            value={bloodgroup}
                                            onChange={(e) => {
                                                setBloodGroup(e)
                                            }}
                                            placeholder="Select blood group"
                                            optionFilterProp="children"
                                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                            filterSort={(optionA, optionB) =>
                                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                            }
                                            options={options}
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6} lg={4}>
                                        <InputLabel>Units</InputLabel>
                                        <TextField
                                            size='small'
                                            required
                                            value={units}
                                            onChange={(e) => setUnits(e.target.value)}
                                            placeholder='Enter units'
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6} lg={4}>
                                        <InputLabel>Address</InputLabel>
                                        <TextField
                                            size='small'
                                            required
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            placeholder='Enter address'
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6} lg={4}>
                                        <InputLabel>Doctor's Approval</InputLabel>
                                        <input accept="image/*" required type="file"
                                            onChange={(e) => {
                                               uploadImage(e)
                                            }} />
                                    </Grid>
                                    <Grid xs={12} textAlign="center">
                                        <Button type='submit' variant='contained'>Submit</Button>
                                    </Grid>

                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
                {/* <Grid item xs={12} md={12}> */}

                {/* </Grid> */}
            </Grid>
            <Box display={"flex"} alignItems={"center"} sx={{ width: '100%', flexWrap: 'wrap', gap: 2, mt: 2, p: 1, background: grey[200] }}>
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
                            <Card sx={{ width: 250, maxHeight: 350, borderRadius: 2, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} key={index}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                            {item.name.toUpperCase()[0]}
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <BloodtypeIcon color='error' />
                                        </IconButton>
                                    }
                                    title={item.name}
                
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
                                    {/* <Box display="flex" alignItems={"center"} justifyContent="space-between" gap={2} sx={{
                                        background: grey[200],
                                        p: 1,
                                        borderRadius: 2,
                                        mt: 1
                                    }}>
                                         
                                        <Typography fontWeight={700}>Units Available</Typography>
                                        <Typography fontWeight={700} color='red'>{item.units}</Typography>
                                         
                                    </Box> */}
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
                                    <Button textAlign="center" variant="contained" color='info' endIcon={<SendIcon />} onClick={() => {
                                        handleRequest(item)
                                    }}>
                                        Send Request
                                    </Button>
                                    <Button variant='contained' size='small' onClick={() => handleStatus(item)}>
                                                View
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
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Register yourself"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        You need to register yourself for document verfication then you will be able to send blood request.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>

        </SidebarLayout>
    );
}
