import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Form, Input, message } from "antd";
import axios from "axios";
import toast from 'react-hot-toast'
import { useAuth } from "../../context/auth";
import Layout from '../Layout/Layout'
import { ApiBaseUrl } from "../../apiConfig";

const Login = () => {
    const [auth, setAuth] = useAuth();
    
    const navigate = useNavigate();
    const location = useLocation();
  //formHandler
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post( ApiBaseUrl + "/login", values);

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("email",res.data.user.email)
        localStorage.setItem("auth", JSON.stringify(res.data));
        let userType = res.data.user.usertype
        localStorage.setItem("userType",userType)
        message.success("login successfull");
        if(userType === "Donor"){
          navigate("/donar/dashboard")
        } else if (userType === "Receiver"){
          navigate("/receiver/dashboard")
        } else if (userType === "admin") {
          navigate("/admin/dashboard")
        }
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      message.error("something went wrong");
    }
  };

  return (
    <Layout>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3
            className="text-center"
            style={{ textEmphasisStyle: "double-circle" }}
          >
            Login
          </h3>

          <div style={{ padding: "10px 50px", marginTop: "20px" }}>
            <Form.Item label="Email" name="email">
              <Input placeholder="Email" type="email" required />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input Placeholder="Password" type="password" required />
            </Form.Item>
            <Link to="/register" className="m-2">
              Not a user? Register here
            </Link>
          </div>

          <button className="btn btn-primary" type="submit">
            Login
          </button>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={() => {
              navigate("/forgot-password");
            }}
          >
            Forgot password
          </button>
        </Form>
      </div>
    </Layout>
  );
};

export default Login;
