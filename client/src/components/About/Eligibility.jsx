import React from 'react'
import img1 from '../../assets/birthdaycake-h.png'
import img2 from '../../assets/Eat-h.png'
import img3 from '../../assets/drink-water.png'
import img4 from '../../assets/Eight-weeks-h.png'
import img5 from '../../assets/heart-h.png'
import img6 from '../../assets/license-h.png'
import img7 from '../../assets/scale-h.png'

const Eligibility = () => {
  return (
    <section className='eligibility'>
    <div className="container">
      <h2>Basic Requirements & Recommendations</h2>
      <div className='container2'>
      <div>
        <img src={img1} alt="img1" />
        <p>Must be at least 16 years old</p>
        <img src={img2} alt="img1" />
        <p>Drink plenty of non-alcoholic liquids</p>
        <img src={img3} alt="img1" />
        <p>Wait eight weeks between whole blood donations</p>
      </div>
      <div>
        <img src={img4} alt="img1" />
        <p>Eat within two hours ahead of your donation</p>
        <img src={img5} alt="img1" />
        <p>Be in good general health</p>
        <img src={img6} alt="img1" />
        <p>Bring your ID</p>
      </div>
      <div>
        <img src={img7} alt="img1" />
        <p>Weigh at least 110 pounds</p>
        <img src={img2} alt="img1" />
        <p>age must be sixteen</p>
        <img src={img3} alt="img1" />
        <p>age must be sixteen</p>
      </div>
     </div>
    </div>
    </section>
  )
}

export default Eligibility