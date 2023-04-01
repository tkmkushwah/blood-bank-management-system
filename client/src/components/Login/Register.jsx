import React, { useRef, useState } from 'react';
import { Form, Input, message ,Select} from "antd";
import { Link,useNavigate,Radio } from "react-router-dom";
import axios from "axios";
import Layout from '../Layout/Layout';

const Register = () => {
const [date, setDate] = useState('');
const [answer, setAnswer] = useState('');
const dateInputRef = useRef(null);

const handleChange = (e) => {
setDate(e.target.value);
};

const navigate=useNavigate()

const onfinishHandler=async (values)=>{
  try {
    const res=await axios.post('/api/v1/user/register',values)
    if(res.data.success)
    {
      message.success('register successfully')
      navigate('/login');
    }else{
      message.error(res.data.message)
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
    <Layout>
      <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Register From</h3>
          <div style={{padding:'10px 50px' ,marginTop:'20px'}}>
            <Form.Item label="Name" name="name">
              <Input type="text" required />
            </Form.Item>
            <Form.Item name="email">
              <Input placeholder="Name" type="email" required />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input type="number" required />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" required />
            </Form.Item>
            <Form.Item label="Select Blood Group" name="bloodgroup">
              <Select>
                {options.map((item, id) => (
                  <Select.Option key={id} value={item.value}>
                    {item.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item name="DOB">
              <Input type="date" onChange={handleChange} ref={dateInputRef} />
            </Form.Item>
            <Form.Item label="Location" name="address">
              <Input type="string" required />
            </Form.Item>
            <Form.Item
              label="who is your best frient?"
              name="answer"
              onChange={(e) => setAnswer(e.target.value)}
            >
              <Input type="string" required />
            </Form.Item>
          </div>

          <Link to="/login" className="m-2">
            Already user login here
          </Link>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </Layout>
  );
};

export default Register;
