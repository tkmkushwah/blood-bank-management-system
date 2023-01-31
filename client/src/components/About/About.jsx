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
          <p>A blood donation is a process whereby a person voluntarily has blood drawn to be used for future transfusions when in need at hospitals for treatment procedures that require them. Donation may be of whole blood (blood drawn directly from the body) or of specific components of the blood; such as red blood cells, white blood cells, plasma, and platelets. Blood banks often participate in the process of collecting blood and other procedures such as managing stocks, approving blood requests and updating donation information. <br />

The inspiration of this project is to improve blood banks in India and to develop a blood bank information system which focuses on making an online system that is accessible for both donors and administrators. Donors can directly receive information regarding their previous blood donations, including their blood results and donation history, in order to easily schedule their next donations. They can also update the personal information through the system, without having to contact the blood bank registry.
<br />
The administrator is also responsible for responding to the hospital’s blood requests and checking the stocks in the blood bank’s inventory.</p>
        </div>
      </div>
    </section>
  )
}

export default About