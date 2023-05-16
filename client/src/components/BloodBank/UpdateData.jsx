import React, { useRef, useState } from "react";
import { Form, Input, message, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BankDashboardLayout from '../Layout/BankDashboardLayout'
import '../../styles/bankorm.scss'

const UpdateData = () => {
  const [date, setDate] = useState("");
  const [answer, setAnswer] = useState("");
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const navigate = useNavigate();

  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/bloodBank/addData", values);
      if (res.data.success) {
        message.success("Submitted successfully");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };

  return (
      <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
        >
          <h3
            className="text-center"
          >
            BLOODS AVAILABLE (UNITS)
          </h3>
          <div style={{ padding: "10px 50px", marginTop: "20px" }}>
          <div className="input-group">
          <Form.Item label="Bloodbank Name" name="name">
              <Input placeholder="Enter Name" type="text" required />
            </Form.Item>
            </div>
            <div className="input-group">
            <Form.Item label="Bank Email" name="bankemail">
              <Input placeholder="Enter email" type="email" required />
            </Form.Item>
            </div>
            <div className="input-group">
            <Form.Item label="Phone" name="phone">
              <Input
                placeholder="Phone Number ex:- 8585858585"
                type="number"
                required
              />
            </Form.Item>
            </div>
            <div className="input-group">
            <Form.Item label="Address"name="address">
              <Input placeholder="Address" type="string" required />
            </Form.Item>
            </div>
            <div className="input-group">
            <Form.Item label="A+ Units" name="bloodGroupA">
              <Input
                placeholder="A+"
                type="number"
                required
              />
            </Form.Item>
            </div>

            <div className="input-group">
            <Form.Item label="B+ Units" name="bloodGroupB">
              <Input
                placeholder="B+"
                type="number"
                required
              />
            </Form.Item>
            </div>

            <div className="input-group">
            <Form.Item label="AB+ Units" name="bloodGroupAB">
              <Input
                placeholder="AB+"
                type="number"
                required
              />
            </Form.Item>
            </div>

            <div className="input-group">
            <Form.Item label="O+ Units" name="bloodGroupO">
              <Input
                placeholder="O+"
                type="number"
                required
              />
            </Form.Item>
            </div>

            <div className="input-group">
            <Form.Item label="A- Units" name="bloodGroupAN">
              <Input
                placeholder="A-"
                type="number"
                required
              />
            </Form.Item>
            </div>

            <div className="input-group">
            <Form.Item label="B- Units" name="bloodGroupBN">
              <Input
                placeholder="B-"
                type="number"
                required
              />
            </Form.Item>
            </div>

            <div className="input-group">
            <Form.Item label="AB- Units" name="bloodGroupABN">
              <Input
                placeholder="AB-"
                type="number"
                required
              />
            </Form.Item>
            </div>

            <div className="input-group">
            <Form.Item label="O- Units" name="bloodGroupON">
              <Input
                placeholder="O-"
                type="number"
                required
              />
            </Form.Item>
            </div>

            <div className="input-group">
            <Form.Item label="A2- Units" name="bloodGroupA2N">
              <Input
                placeholder="A2-"
                type="number"
                required
              />
            </Form.Item>
            </div>

            <div className="input-group">
            <Form.Item label="A2+ Units" name="bloodGroupA2">
              <Input
                placeholder="A2+"
                type="number"
                required
              />
            </Form.Item>
            </div>

            <div className="input-group">
            <Form.Item label="A1B+ Units" name="bloodGroupA1B">
              <Input
                placeholder="A1B"
                type="number"
                required
              />
            </Form.Item>
            </div>

            <div className="input-group">
            <Form.Item label="A1B- Units" name="bloodGroupA1BN">
              <Input
                placeholder="A1B"
                type="number"
                required
              />
            </Form.Item>
            </div>

            <div className="input-group">
            <Form.Item label="A2B+ Units" name="bloodGroupA2B">
              <Input
                placeholder="A2B+"
                type="number"
                required
              />
            </Form.Item>
            </div>
            <div className="input-group">
            <Form.Item label="A2B- Units" name="bloodGroupA2BN">
              <Input
                placeholder="A2B-"
                type="number"
                required
              />
            </Form.Item>
            </div>
            <div className="input-group">
            <Form.Item label="BOMBAY BLOOD GROUP Units" name="bloodGroupBOMBAY">
              <Input
                placeholder="BOMBAY"
                type="number"
                required
              />
            </Form.Item>
            </div>

          </div>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      </div>
  );
};

export default UpdateData;
