import React from 'react'
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
        <div>
            <h2>Blood Donation</h2>
            <p>We are trying to give you the best solution of blood related problems</p> <br />
            <em> We give attention to genuine feedback.</em>
            <strong>All rights reserved @Tikam singh</strong>
        </div>

        <aside>
            <h4>Follow us</h4>
            <a href='https://www.instagram.com/kushwah_tkmm/'><AiFillInstagram/></a>
            <a  href='https://github.com/tkmkushwah'><AiFillGithub/></a>
        </aside>
    </footer>
  )
}

export default Footer