import React from 'react'

const Eligibility = () => {
  return (
    <>
    <section className="eligibility">
      <div className="heading">
        <form className='applicationForm'>
          <h1 className="mainheading">Registration Form</h1>
          <br></br>
          <section>
            <h4>Name</h4>
            <input />
          </section>
          <section>
            <h4>Email</h4>
            <input />
          </section>
          <section>
            <h4>Phone Number</h4>
            <input />
          </section>
          <section>
            <h4>Address</h4>
            <input />
          </section>
          <section>
            <h4>Blood Group</h4>
            <label> Select Blood Group </label>
            <select>
              <option> A+</option>
              <option> A-</option>
              <option> B+</option>
              <option> B-</option>
              <option> O+</option>
              <option> O-</option>
              <option> AB+</option>
              <option> AB-</option>
            </select>
          </section>
          <section>
            <h4>Age</h4>
            <label>Enter your age</label>
            <input />
          </section>
          <section>
            <h4>Weight</h4>
            <label>Enter your weight(in kgs)</label>
            <input />
          </section>
          <section>
            <p>Have you donated blood in last 56 days?</p>
            <input type="checkbox" /><label>Yes</label>
            <br></br>
            <input type="checkbox" /><label>No</label>
          </section>
          <button className="submit">Submit</button>
        </form>
      </div>
    </section>
    </>
  )
}

export default Eligibility
