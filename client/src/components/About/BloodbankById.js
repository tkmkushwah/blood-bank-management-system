import React from 'react'
import { useParams } from 'react-router'
import SidebarLayout from '../../SidebarLayout'
import { Box, Button, Card, CardActions, CardContent, CardHeader, CircularProgress, Grid, IconButton, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Alert } from 'antd'
import { toast } from 'react-hot-toast'
import { ApiBaseUrl } from '../../apiConfig'
import { green, yellow } from '@mui/material/colors'
import Layout from "../Layout/Layout";

export const BloodbankById = () => {
  const { id } = useParams()
  const [specificDonarData, setSpecificDonarData] = useState({})
  const [loadingData, setLoadingData] = React.useState(false)
  useEffect(() => {
    setLoadingData(true)
    axios.post("/api/v1/bloodBank/bank_by_id", {
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
        delete obj["password"]
        delete obj["usertype"]
        delete obj["answer"]
        // delete obj["fitcer"]
        setSpecificDonarData(res.data.data)
        setLoadingData(false)
      }
    }).catch((er) => console.log(er))
  }, []) 
  return (
    <Layout>
      <Card sx={{ p: 2 }}>
        {!loadingData ? <>
          <Typography variant='h3'>Bank Information <span style={{color: specificDonarData.status === "Pending" ? yellow[700] : green[400] }}></span></Typography>
          <CardContent  >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {Object.keys(specificDonarData).map((_, index) => (
                <Grid item xs={12} sm={4} md={4} key={index}>
                  <Box>
                    <Typography>{_}</Typography>
                    {_ === "fitcer" ? <Box sx={{ display: 'flex', alignItems: "center", gap: 2 }}>
              
                      <img src={specificDonarData[_]} height={140} width={200} />
                    <IconButton color='primary'> <i className="fa fa-light fa-download" ></i></IconButton>
                    
                    </Box> : <Alert message={specificDonarData[_]} type="info" />}
                  </Box>
                  
                </Grid>
                
              ))}
            </Grid>
            
          </CardContent>
        </> : <CircularProgress />}
      </Card>
      </Layout>
  )
}

