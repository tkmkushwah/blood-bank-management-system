import React from 'react'
import img from '../../assets/about_page_flow_chart.jpg'

const About = () => {
  return (
    <>
    <div>
     <p>
    Blood bank management system is an online software system that helps in
    managing various blood banks in a better way.This project gives
    information about various blood deposits available along with associated
    details. These details include blood type, storage area and date of storage.
    These details help in maintaining and monitoring the blood deposits.The
    project is an online system that allows to check whether required blood
    deposits of a particular group are available in the blood bank.Moreover, the
    system also has added features such as patient name and contacts, blood
    booking and even need for certain blood group is posted on the website to
    find available donors for a blood emergency. This online system is
    developed on the .NET platform and supported by the SQL database to
    store blood and user specific details.</p>
    </div>
    <div>
      <img src={img} alt="an image" />
    </div>
    </>
  )
}

export default About