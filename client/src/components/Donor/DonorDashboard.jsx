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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SidebarLayout from '../../SidebarLayout';
import { Toaster, toast } from 'react-hot-toast';
import { Button, Grid, InputLabel, TextField } from '@mui/material';
import { Alert, Select } from 'antd';
import { useState } from 'react';
import { ApiBaseUrl } from '../../apiConfig';
import axios from 'axios';


export default function RecipeReviewCard() {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [dob, setDob] = useState('')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [bloodgroup, setBloodGroup] = useState([])
  const [units, setUnits] = useState('')
  const [address, setAddress] = useState('')
  const [fitness, setFitness] = useState('')
  const [photoIdentity, setPhotoIdentity] = useState('')
  const [q1, setQ1] = useState('')
  const [q2, setQ2] = useState('')
  const [q3, setQ3] = useState('')
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
    if (event.target.name === "fitness") {
      setFitness(base64)
    } else if (event.target.name === "photo_identity"){
      setPhotoIdentity(base64)
    }
    return base64
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(ApiBaseUrl + '/apply-donor', {
        name: name,
        email: email,
        age:age,
        phone: Number(phone),
        weight:weight,
        DOB: dob,
        bloodgroup: bloodgroup,
        fitcer: fitness,
        address: address,
        card: photoIdentity,
        question1:q1,
        question2:q2,
        question3:q3
    }).then((res) => {
        console.log(res.data)
        if(res.data.success){
            toast.success("You are successfully registered, we will inform you once the admin will approve your request")
        }
    }).catch(err => console.log(err))
  }



  return (
    <SidebarLayout>
      <Toaster />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ p: 4 }}>
            <Alert
              message="Required"
              description="Please provide following details by filling the form"
              type="info"
              showIcon
            />
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
                    <InputLabel>Date of birth</InputLabel>
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
                    <InputLabel>Age</InputLabel>
                    <TextField
                      size='small'
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      required
                      placeholder='Enter Age'
                    />
                  </Grid>
                  <Grid xs={12} md={6} lg={4}>
                    <InputLabel>Weight (in Kg)</InputLabel>
                    <TextField
                      size='small'
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                      placeholder='Enter Weight'
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
                    <InputLabel>Photo Identity Card</InputLabel>
                    <input accept="image/*" required type="file" name='photo_identity'
                      onChange={(e) => {
                        uploadImage(e)
                      }} />
                  </Grid>
                  <Grid xs={12} md={6} lg={4}>
                    <InputLabel>Fitness Certificate</InputLabel>
                    <input accept="image/*" required type="file" name='fitness'
                      onChange={(e) => {
                        uploadImage(e)
                      }} />
                  </Grid>
                  <Grid xs={12} md={6} lg={4}>
                    <InputLabel>Did you ever donote blood before?</InputLabel>
                    <TextField
                      size='small'
                      required
                      value={q1}
                      multiline
                      placeholder='Type something'
                      onChange={(e) => setQ1(e.target.value)}
                    />
                  </Grid>
                  <Grid xs={12} md={6} lg={4}>
                    <InputLabel>Do you suffer of any diseases?</InputLabel>
                    <TextField
                      size='small'
                      required
                      value={q2}
                      multiline
                      placeholder='Type something'
                      onChange={(e) => setQ2(e.target.value)}
                    />
                  </Grid>
                  <Grid xs={12} md={6} lg={4}>
                    <InputLabel>Do you have any allergies?</InputLabel>
                    <TextField
                      size='small'
                      required
                      value={q3}
                      multiline
                      placeholder='Type something'
                      onChange={(e) => setQ3(e.target.value)}
                    />
                  </Grid>
                  <Grid xs={12} textAlign="center">
                    <Button type='submit' variant='contained'>Submit</Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </SidebarLayout>
  );
}
