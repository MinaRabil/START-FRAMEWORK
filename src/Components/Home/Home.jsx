import React from 'react'
import './Home.css'

export default function Home() {
  return (<>
    <div className="container-fluid home d-flex justify-content-center align-items-center">
      <div>
      <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="32" y1="64" x2="32" y2="144" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M54.2,216a88.1,88.1,0,0,1,147.6,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polygon points="224 64 128 96 32 64 128 32 224 64" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M169.3,82.2a56,56,0,1,1-82.6,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
        <h1 className='text-center'>START FRAMEWORK
        </h1>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3 bg-white"  />
          <i className="fa-solid fa-star" />
          <div className="line ms-3 bg-white"/></div>
        <p className='text-center'>Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </div>
  </>
  )
}
