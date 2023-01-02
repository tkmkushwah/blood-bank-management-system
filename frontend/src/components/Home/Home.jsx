import React from 'react'
import HomeCarousel from './HomeCarousel'
import bImg from '../../assets/b_donor_reg.png'
const Home = () => {
  return (
    <>
     {/* <HomeCarousel/> */}
      <section className='home'>
        <div className="img">
          <img src={bImg} alt="image" />
        </div>
        <div>
          <h1>Blood Donation</h1>
          <p>we are here to provide you best facility</p>
          <button>Know Us</button>
        </div>
      </section>
    </>
  )
}

export default Home