import React, { useRef, useState } from 'react';
import { Form, Input, message ,Select} from "antd";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from '../Layout/Layout';
import SidebarLayout from '../../SidebarLayout';

const ApplyDonor = () => {
const [setDate] = useState('');
const dateInputRef = useRef(null);

const handleChange = (e) => {
setDate(e.target.value);
};

const navigate=useNavigate()

const onfinishHandler=async (values)=>{
  try {
    const res = await axios.post("/api/v1/user/apply-donor", values);
    
    if(res.data.success)
    {
      message.success('submitted successfully')
      navigate("/dashboard/user");
    }else{
      message.error("hello"+res.data)
    }
  } catch (error) {
    console.log(error)
    message.error('something went wrong')
  }
}
  const options=[
   { value:'A+',label:'A+'},
   { value:'A-',label:'A-'},
   { value:'B+',label:'B+'},
   { value:'B-',label:'B-'},
   { value:'AB+',label:'AB+'},
   { value:'AB-',label:'AB-'},
   { value:'O+',label:'O+'},
   { value:'O-',label:'O-'},
   { value:'A2-',label:'A2-'},
   { value:'A2+',label:'A2+'},
   { value:'A1B-',label:'A1B-'},
   { value:'A1B+',label:'A1B+'},
   { value:'A2B+',label:'A2B+'},
   { value:'A2B-',label:'A2B-'},
   { value:'Bombay Blood group',label:'Bombay Blood group'},
   { value:'INRA',label:'INRA'},
  { value:"Don't know",label:"Don't know"},
   ]
  return (
    <SidebarLayout>

      <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">APPLY DONOR FORM</h3>
          <Form.Item label="Name" name="name">
            <Input type="text"  />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email"  />
          </Form.Item>
          <Form.Item label="Contact Number" name="phone">
            <Input type="number"  />
          </Form.Item>
          <Form.Item label="Age" name="age">
            <Input type="number"  />
          </Form.Item>

          <Form.Item label="Weight in KG" name="weight">
            <Input type="number"  />
          </Form.Item>

          <Form.Item label="Select Blood Group"name='bloodgroup'>
            <Select  >
            {
              options.map((item,id)=>(
                <Select.Option key={id} value={item.value}>{item.label}</Select.Option>
              )
              )
            }
           </Select>
          </Form.Item>
          
          <Form.Item name='DOB'>
             <Input type="date"
             onChange={handleChange}
             ref={dateInputRef} 
             />

          </Form.Item>
          <Form.Item label="Location" name="address">
            <Input type="string" />
          </Form.Item>
          <Form.Item label="Fitness Certificate" name="fitcer" >
            <Input type="file"id="file-input" name="ImageStyle"  />
          </Form.Item>
          <Form.Item label="Photo Identity Card" name="card" >
            <Input type="file"id="file-input" name="ImageStyle"  />
          </Form.Item>

          <Form.Item label="Did you ever donote blood before? " name="question1">
            <Input type="text"  />
          </Form.Item>

          <Form.Item label="Do you suffer of any diseases? " name="question2">
            <Input type="text"  />
          </Form.Item>

          <Form.Item label="Do you have any allergies? " name="question3">
            <Input type="text"  />
          </Form.Item>

          
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </SidebarLayout>
  );
};

export default ApplyDonor;
