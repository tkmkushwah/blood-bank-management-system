import React from 'react'
import { useParams } from 'react-router'
import SidebarLayout from '../../../SidebarLayout'
import { Box, Button, Card, CardActions, CardContent, CardHeader, CircularProgress, Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Alert } from 'antd'
import { toast } from 'react-hot-toast'
import { ApiBaseUrl } from '../../../apiConfig'
import { green, yellow } from '@mui/material/colors'

export const DonarRequestById = () => {
  const { id } = useParams()
  const [specificDonarData, setSpecificDonarData] = useState({})
  const [loadingData, setLoadingData] = React.useState(false)
  useEffect(() => {
    setLoadingData(true)
    axios.post( ApiBaseUrl + "/donar_by_id", {
      id: id
    }).then((res) => {
      console.log(res.data)
      if (res.data.success) {
        let user = res.data.data
        delete user["__v"]
        delete user["card"]
        delete user["fitcer"]
        setSpecificDonarData(user)
        setLoadingData(false)
      }
    }).catch((er) => console.log(er))
  }, [])

  return (
    <SidebarLayout>
      <Card sx={{ p: 2 }}>
        {!loadingData ? <>
          <Typography variant='h6'>Your Request <span style={{ color:specificDonarData.status === "Pending" ? yellow[700] : green[400]}}>{`(Request status: ${specificDonarData.status})`}</span></Typography>
          <CardContent  >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {Object.keys(specificDonarData).map((_, index) => (
                <Grid item xs={12} sm={4} md={4} key={index}>
                  <Box>
                    <Typography>{_}</Typography>
                    <Alert message={specificDonarData[_]} type="info" />
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

