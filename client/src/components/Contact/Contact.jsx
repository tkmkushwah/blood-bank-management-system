import React from "react";
import { motion } from "framer-motion";
import Layout from "../Layout/Layout";
import img from "../../assets/b_donor_reg.png";

const Contact = () => {
  return (
    <Layout>
      <section className="contact">
        <motion.form
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ delay: 0.2 }}
        >
          <h2>Contact Us</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />

          <textarea placeholder="Message..." cols="30" rows="10"></textarea>

          <button type="submit">Send</button>
        </motion.form>

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
            <img src={img} alt="Burger" />
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Contact;
