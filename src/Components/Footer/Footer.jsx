import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (<>
    <footer>
      <div className="container-fluid foot">
        <div className="row mx-auto text-center  p-5">
          <div className=" col-md-4 text-white">
            <h2>LOCATION
            </h2>
            <p>2215 John Daniel Drive
            </p>
            <p>Clark, MO 65243
            </p>
          </div>
          <div className=" col-md-4 text-white">
            <h2>AROUND THE WEB

            </h2>
            <div className="icons">
              <i className="fa-brands fa-facebook mx-3 icon" />
              <i className="fa-brands fa-twitter mx-3 icon" />
              <i className="fa-brands fa-linkedin-in mx-3 icon" />
              <i className="fa-solid fa-globe mx-3 icon" />
            </div>

          </div>
          <div className=" col-md-4 text-white">
            <h2>ABOUT FREELANCER
            </h2>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route
            </p>

          </div>
        </div>
      </div>
      <div className='copyright'><p>Copyright © Your Website 2021</p></div>
    </footer >
  </>)
}
