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
import { yellow } from '@mui/material/colors'

export const ReceiverRequestById = () => {
  const { id } = useParams()
  const [specificReceiverData, setSpecificReceiverData] = useState({})
  const [loadingData, setLoadingData] = React.useState(false)
  useEffect(() => {
    setLoadingData(true)
    axios.post( ApiBaseUrl + "/receiver_by_id", {
      id: id
    }).then((res) => {
      console.log(res.data)
      if (res.data.success) {
        let user = res.data.data
        delete user["__v"]
        delete user["_id"]
        delete user["donarId"]
        delete user["requests"]
        setSpecificReceiverData(user)
        setLoadingData(false)
      }
    }).catch((er) => console.log(er))
  }, [])

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
          <Typography variant='h6'>Your Request <span style={{ color: yellow[700] }}>{`(Request status: ${specificReceiverData.status})`}</span></Typography>
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
    </SidebarLayout>
  )
}

