import React, { useRef, useState } from "react";
import { Form, Input, message, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../Layout/Layout";

const Register = () => {
  const [date, setDate] = useState("");
  const [answer, setAnswer] = useState("");
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const navigate = useNavigate();

  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/user/register", values);
      if (res.data.success) {
        message.success("register successfully");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };
  const options = [
    { value: "Donor", label: "Donor" },
    { value: "Receiver", label: "Receiver" }
  ];
  return (
    <Layout>
      <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3
            className="text-center"
            style={{ textEmphasisStyle: "double-circle" }}
          >
            Register
          </h3>
          <div style={{ padding: "10px 50px", marginTop: "20px" }}>
            <Form.Item label="Name" name="name">
              <Input placeholder="Enter Name" type="text" required />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input placeholder="Enter email" type="email" required />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input
                placeholder="Phone Number ex:- 8585858585"
                type="number"
                required
              />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input placeholder="Password" type="password" required />
            </Form.Item>

            {/* <Form.Item name="DOB">
              <Input type="date" onChange={handleChange} ref={dateInputRef} />
            </Form.Item> */}

            {/* <Form.Item name="address">
              <Input placeholder="Address" type="string" required />
            </Form.Item> */}

            <Form.Item
              label="Who is your best friend?"
              name="answer"
              onChange={(e) => setAnswer(e.target.value)}
            >
              <Input placeholder="Ex:- Binod" type="string" required />
            </Form.Item>
            <Form.Item label="What are you?" name="usertype">
              <Select placeholder="Ex:- Donor">

                {options.map((item, id) => (
                  <Select.Option key={id} value={item.value}>
                    {item.label}
                  </Select.Option>
                ))}
                
                {/* <Select.Option>Receiver</Select.Option>
                <Select.Option>Donor</Select.Option> */}
              </Select>
            </Form.Item>
            <Link to="/login" className="m-2">
              Already user? login here
            </Link>
          </div>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </Layout>
  );
};

export default Register;
