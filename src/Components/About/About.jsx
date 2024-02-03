import React from 'react'
import './About.css'

export default function About() {
  return (
    <>
      <div className="container-fluid home d-flex justify-content-center align-items-center">
        <div>
          <h1 className='text-center'>ABOUT COMPONENT

          </h1>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3 bg-white" />
            <i className="fa-solid fa-star" />
            <div className="line ms-3 bg-white" /></div>
          <div  className="container">
            <div  className="row px-5">
              <div  className="col-md-6 ps-md-5">
                <p > Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
              </div>
              <div  className="col-md-6 pe-5">
                <p > Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
