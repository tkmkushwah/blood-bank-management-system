import React from 'react'
import img1 from '../../assets/b_donor_reg.png'
const About = () => {
  return (
    <section className='about-us'>
        <h1>ABOUT US</h1>
      <div className="container">
        <div className="logo">
          <img src={img1} alt="dh" />
        </div>
        <div className="about">
          <h1>BLOOD DONATION</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, tempora illum itaque nesciunt optio eligendi, temporibus, dolore qui unde quis laborum sapiente doloremque deleniti maiores veniam! Eveniet vitae sunt voluptatum quos, impedit magni voluptates illum, eligendi consectetur at provident? Recusandae, explicabo sint. Nulla sapiente adipisci illo quisquam dolores cupiditate debitis.</p>
        </div>
      </div>
    </section>
  )
}

export default About