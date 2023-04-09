import React from 'react'
import { useParams } from 'react-router'
import SidebarLayout from '../../../SidebarLayout'
import { Box, Button, Card, CardActions, CardContent, CardHeader, CircularProgress, Grid, IconButton, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Alert } from 'antd'
import { toast } from 'react-hot-toast'
import { ApiBaseUrl } from '../../../apiConfig'
import { green, yellow } from '@mui/material/colors'

export const ReceiverById = () => {
    const { id } = useParams()
    const [specificReceiverData, setSpecificReceiverData] = useState({})
    const [completeObj, setCompleteObj] = useState({})
    const [donarObj, setDonarObj] = useState({})
    const [loadingData, setLoadingData] = React.useState(false)
    const [loadingdonarData, setLoadingdonarData] = React.useState(false)

    useEffect(() => {
        setLoadingData(true)
        setLoadingdonarData(true)
        axios.post(ApiBaseUrl + "/receiver_by_id", {
            id: id
        }).then((res) => {
            console.log(res.data)
            if (res.data.success) {
                setCompleteObj(res.data.data)
                axios.post(ApiBaseUrl + "/donar_by_id", {
                    id: res.data.data.donarId
                }).then((res) => {
                    console.log(res.data)
                    if (res.data.success) {
                        let obj = res.data.data
                        delete obj["_id"]
                        // delete obj["status"]
                        delete obj["createdAt"]
                        delete obj["updatedAt"]
                        delete obj["__v"]
                        setDonarObj(res.data.data)
                        setLoadingdonarData(false)
                    }
                }).catch((er) => { console.log(er); setLoadingdonarData(false) })


                const obj = res.data.data
                delete obj["_id"]
                delete obj["requests"]
                delete obj["donarId"]
                delete obj["createdAt"]
                delete obj["updatedAt"]
                delete obj["__v"]
                setSpecificReceiverData(obj)
                setLoadingData(false)
            }
        }).catch((er) => console.log(er))
    }, [])


    const handleApproval = () => {
        axios.post(ApiBaseUrl + "/approve_receiver_request", {
            email: specificReceiverData.email
        }).then((res) => {
            console.log(res.data)
            if (res.data.success) {
                toast.success('Request Aproved')
                axios.post(ApiBaseUrl + "/send_mail",{
                  recipient:specificReceiverData.email,
                  subject:"Blood Request Approved (Blood bank DEI)",
                  text:`<p>Hi ${specificReceiverData.name},</p>
                  <br>
                  <p>Your blood request for ${donarObj.bloodgroup} bloodgroup has been approved. you can communicate with our donor.<br> Below are the contact details of donor</p>
                  <p>Contact Details fo Donor:</p>
                  <p>Mobile Number: <strong>${donarObj.phone}</strong> <br> Email: <strong>${donarObj.email}</strong> <br> Address: <strong>${donarObj.address}</strong> </p>
                  <p>Thanks and Regards <br> Admin (Blood Bank DEI)</p>
                  `
                }).then((res) => {
                    if(res.data.success){
                        axios.post(ApiBaseUrl + "/send_mail",{
                            recipient:donarObj.email,
                            subject:"Request Raised (Blood bank DEI)",
                            text:`<p>Hi ${donarObj.name},</p>
                            <p>We are glad to inform you that someone has requested the blood group for which you have applied in our portal to donate, so we had provided your contact details to our receiver <br>
                            He/She will communicate with you, so we request you to help him/her and contribute to change lives.</p>
                            <p>In case he didn't respond, you can make contact with our receiver</p>
                            <p>Contact Details: <br> Mobile Number: <strong>${specificReceiverData.phone}</strong> <br> Email: <strong>${specificReceiverData.email}</strong> <br> Address: <strong>${specificReceiverData.address}</strong> </p>
                            <p>Thanks and Regards <br> Admin (Blood Bank DEI)</p>
                            `
                          }).then((res) => {
                              if(res.data.success){
                                 toast.success("Confirmation sent to both successfully") 
                              }
                          }).catch((err) => {
                            console.log(err)
                          })
                    }
                }).catch((err) => {
                  console.log(err)
                })
              }
        }).catch((er) => console.log(er))
    }

    console.log(completeObj, "com")
    
    const handleDownload = () => {
        var a = document.createElement("a"); 
        a.href = specificReceiverData.doctorapproval
        a.download = "doctorapproval";
        a.click()
      }
    return (
        <SidebarLayout>
            <Card sx={{ p: 2 }}>
                {!loadingData ? <>
                    <Typography variant='h6'>Receiver Information <span style={{ color: completeObj.status === "Pending" ? yellow[700] : green[400] }}>{`(Request status: ${completeObj.status})`}</span></Typography>
                    <CardContent  >
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {Object.keys(specificReceiverData).map((_, index) => (
                                <Grid item xs={12} sm={4} md={4} key={index}>
                                    <Box>
                                        <Typography>{_}</Typography>
                                        {_ === "doctorapproval" ? <Box sx={{ display: 'flex', alignItems: "center", gap: 2 }}>
                                            <img src={specificReceiverData[_]} height={140} width={200} />
                                            <IconButton color='primary' onClick={handleDownload}> <i className="fa fa-light fa-download" ></i></IconButton>
                                        </Box> : <Alert message={specificReceiverData[_]} type="info" />}
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </> : <CircularProgress />}
            </Card>
            <Card sx={{ p: 2 }}>
                {!loadingdonarData ? <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Typography variant='h6'>Donor Requested <span style={{ color: donarObj.status === "Pending" ? yellow[700] : green[400] }}>{`(Request status: ${donarObj.status})`}</span></Typography>
                    <Grid item xs={12} sm={4} md={4}>
                        <Box>
                            <Typography>Name</Typography>
                            <Alert message={donarObj.name} type="info" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} >
                        <Box>
                            <Typography>Email</Typography>
                            <Alert message={donarObj.email} type="info" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} >
                        <Box>
                            <Typography>BloodGroup</Typography>
                            <Alert message={donarObj.bloodgroup} type="info" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} >
                        <Box>
                            <Typography>Status</Typography>
                            <Alert message={donarObj.status} type="info" />
                        </Box>
                    </Grid>
                    <Box sx={{ display: 'flex', textAlign: "center", gap: 2, p: 2 }}>
                        <Button variant="contained" color="success" onClick={handleApproval}>
                            Approve
                        </Button>
                        <Button variant="contained" color="error">
                            Reject
                        </Button>
                    </Box>
                </Grid> : <CircularProgress />}

            </Card>
        </SidebarLayout>
    )
}

