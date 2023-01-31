import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <div className="form-container ">
        <Form
          layout="vertical"
          className="register-form"
        >
          <h3 className="text-center">Register From</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/login" className="m-2">
            Already user login here
          </Link>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;
