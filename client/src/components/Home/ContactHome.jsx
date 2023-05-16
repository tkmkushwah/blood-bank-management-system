import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/b_donor_reg.png";
import { Form, Input, message, Select } from "antd";
import axios from "axios";

const onfinishHandler = async (values) => {
  try {
    const res = await axios.post("/api/v1/bloodBank/addQuarry", values);
    if (res.data.success) {
      message.success("successfully");
    } else {
      message.error(res.data.message);
    }
  } catch (error) {
    console.log(error);
    message.error("something went wrong");
  }
};

const Contact = () => {
  return (
    <section
      className="contact"
      style={{ borderRadius: "1%", margin: "50px 0" }}
    >
      <Form
      
      layout="verticle"
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
        onFinish={onfinishHandler}
      >
        <h2>Contact Us</h2>
        <Form.Item label=" Name" name="name">
              <Input placeholder="Enter Name" type="text" required />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input placeholder="Enter email" type="email" required />
            </Form.Item>
            <Form.Item label="Message" name="message">
              <Input.TextArea placeholder="Enter Name" type="text"  rows={5} required />
            </Form.Item>

        <button type="submit">Send</button>
      </Form>

      <motion.div
        className="formBorder"
        initial={{
          x: "100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          initial={{
            y: "-100vh",
            x: "50%",
            opacity: 0,
          }}
          animate={{
            x: "50%",
            y: "-50%",
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
        >
          <img src={img} alt="BloodBank" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
