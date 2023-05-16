import React from 'react'
import { useParams } from 'react-router'
import { Box, Button, Card,  CardContent,CircularProgress, Grid, IconButton, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Alert } from 'antd'
import { toast } from 'react-hot-toast'
import { ApiBaseUrl } from '../../apiConfig'
import { green, yellow } from '@mui/material/colors'
import BankDashboardLayout from '../Layout/BankDashboardLayout'


export const RequestsById = () => {
  const { id } = useParams()
  const [specificReqData, setSpecificReqData] = useState({})
  const [loadingData, setLoadingData] = React.useState(false)
  useEffect(() => {
    setLoadingData(true)
    axios.post(ApiBaseUrl + "/request_by_id", {
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
      
        setSpecificReqData(res.data.data);
        setLoadingData(false)
      }
    }).catch((er) => console.log(er))
  }, [])


  const handleReqApproval = () => {
    axios
      .post(ApiBaseUrl + "/approve_bankdonation_request", {
        recemail: setSpecificReqData.email,
      })
      .then((res) => {
        if (res.data.success) {
          toast.success("Request Aproved");
          axios
            .post(ApiBaseUrl + "/send_mail", {
              recipient: specificReqData.recemail,
              subject: `${specificReqData.bloodgroup} Blood Request Approved `,
              text: `<p>Hi ${specificReqData.name},</p>
          <br>
          <p>Your blood request for ${specificReqData.bloodgroup} bloodgroup has been approved. you can further communicate with us on this email ${specificReqData.donarId}.<br> </p>
                  <p>Thanks and Regards <br>  (Blood Bank DEI)</p>
          `,
            })
            .then((res) => {})
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((er) => console.log(er));
  };

  const handleDownload = () => {
    var a = document.createElement("a"); 
    a.href = specificReqData.doctorapproval;
    a.download = "doctorapproval";
    a.click()
  }
  return (
    <BankDashboardLayout>
      <Card sx={{ p: 2 }}>
        {!loadingData ? (
          <>
            <Typography variant="h6">
              Donar Information{" "}
              <span
                style={{
                  color:
                    specificReqData.status === "Pending"
                      ? yellow[700]
                      : green[400],
                }}
              >{`(Request status: ${specificReqData.status})`}</span>
            </Typography>
            <CardContent>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {Object.keys(specificReqData).map((_, index) => (
                  <Grid item xs={12} sm={4} md={4} key={index}>
                    <Box>
                      <Typography>{_}</Typography>
                      {_ === "doctorapproval" ? (
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <img
                            src={specificReqData[_]}
                            height={140}
                            width={200}
                          />
                          <IconButton color="primary" onClick={handleDownload}>
                            {" "}
                            <i className="fa fa-light fa-download"></i>
                          </IconButton>
                        </Box>
                      ) : (
                        <Alert message={specificReqData[_]} type="info" />
                      )}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
            <Box sx={{ display: "flex", textAlign: "center", gap: 2, p: 2 }}>
              <Button
                variant="contained"
                color="success"
                onClick={handleReqApproval}
              >
                Approve
              </Button>
              <Button variant="contained" color="error">
                Reject
              </Button>
            </Box>
          </>
        ) : (
          <CircularProgress />
        )}
      </Card>
    </BankDashboardLayout>
  );
}

