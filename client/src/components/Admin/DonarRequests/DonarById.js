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

export const DonarById = () => {
  const { id } = useParams()
  const [specificDonarData, setSpecificDonarData] = useState({})
  const [loadingData, setLoadingData] = React.useState(false)
  useEffect(() => {
    setLoadingData(true)
    axios.post(ApiBaseUrl + "/donar_by_id", {
      id: id
    }).then((res) => {
      console.log(res.data)
      if (res.data.success) {
        let obj = res.data.data
        delete obj["_id"]
        delete obj["createdAt"]
        delete obj["updatedAt"]
        delete obj["__v"]
        delete obj["card"]
        delete obj["fitcer"]
        setSpecificDonarData(res.data.data)
        setLoadingData(false)
      }
    }).catch((er) => console.log(er))
  }, [])


  const handleApproval = () => {
    axios.post(ApiBaseUrl + "/approve_donation_request", {
      email: specificDonarData.email
    }).then((res) => {
      console.log(res.data)
      if (res.data.success) {
        toast.success('Donation Aproved')
        axios.post(ApiBaseUrl + "/send_mail",{
          recipient:specificDonarData.email,
          subject:"Donation Approved Blood Bank",
          text:`<p>Hi ${specificDonarData.name},</p>
          <br>
          <p>Your donation request has been accepted.</p> 
          <p>We really appreciate your donation! Your contribution will help us change lives literally!</p>
          <br>
          <p>Thanks and Regards</p>
          <p>Admin (Blood Bank DEI)</p>
          `
        }).then((res) => {

        }).catch((err) => {
          console.log(err)
        })
      }
    }).catch((er) => console.log(er))
  }

  const handleDownload = () => {
    var a = document.createElement("a"); 
    a.href = specificDonarData.doctorapproval
    a.download = "doctorapproval";
    a.click()
  }
  return (
    <SidebarLayout>
      <Card sx={{ p: 2 }}>
        {!loadingData ? <>
          <Typography variant='h6'>Donar Information <span style={{color: specificDonarData.status === "Pending" ? yellow[700] : green[400] }}>{`(Request status: ${specificDonarData.status})`}</span></Typography>
          <CardContent  >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {Object.keys(specificDonarData).map((_, index) => (
                <Grid item xs={12} sm={4} md={4} key={index}>
                  <Box>
                    <Typography>{_}</Typography>
                    {_ === "doctorapproval" ? <Box sx={{ display: 'flex', alignItems: "center", gap: 2 }}>
                      <img src={specificDonarData[_]} height={140} width={200} />
                    <IconButton color='primary' onClick={handleDownload}> <i className="fa fa-light fa-download" ></i></IconButton>
                    </Box> : <Alert message={specificDonarData[_]} type="info" />}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
          <Box sx={{ display: 'flex', textAlign: "center", gap: 2, p: 2 }}>
            <Button variant="contained" color="success" onClick={handleApproval}>
              Approve
            </Button>
            <Button variant="contained" color="error">
              Reject
            </Button>
          </Box>
        </> : <CircularProgress />}
      </Card>
    </SidebarLayout>
  )
}

