import React from 'react'
import './Portofolio.css'
import $, { hasData } from 'jquery';
import sora1 from '../../assets/Images/poert1.png'
import sora2 from '../../assets/Images/port2.png'
import sora3 from '../../assets/Images/port3.png'



export default function Portofolio() {


  let x

  function getimg(x) {
    $('.model__ img').attr('src', x)
    $('.model__ ').removeClass('d-none')
    $('.model__ ').addClass('d-block')
  }

  function close() {
    

    $('.model__ ').removeClass('d-block')
    $('.model__ ').addClass('d-none')

    /*       if (y.includes('img')) {   
               console.log(y) */

  }


  /* $('model__').onClick(() => {
    console.log('dfdf')
    $('.model__ ').removeClass('d-block')
    $('.model__ ').addClass('d-none')
  
  }) */





  return (
    <>

      <div className="container mt-5 ">
        <h1 className='text-center'>PORTFOLIO COMPONENT
        </h1>
        <div className="d-flex align-items-center justify-content-center mb-5 mt-3">
          <div className="line me-3 bg-dark" />
          <i className="fa-solid fa-star" />
          <div className="line ms-3 bg-dark" /></div>
      </div>
      <div className="container  page mb-5">

        <div className="row g-5">
          <div className="col-md-4 ">
            <div onClick={() => { getimg('Images/poert1.png') }} className=" overflow-hidden position-relative p-0 rounded-2">
              <img src='Images/poert1.png' className=' w-100' alt="" />
              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className="text-white fa-solid fa-plus fa-6x" />
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div onClick={() => { getimg('Images/port2.png') }} className=" overflow-hidden position-relative p-0 rounded-2">
              <img src='Images/port2.png' className=' w-100' alt="" />
              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className="text-white fa-solid fa-plus fa-6x" />
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div onClick={() => { getimg('Images/port3.png') }} className=" overflow-hidden position-relative p-0 rounded-2">
              <img src='Images/port3.png' className=' w-100' alt="" />
              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className="text-white fa-solid fa-plus fa-6x" />
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div onClick={() => { getimg('Images/poert1.png') }} className=" overflow-hidden position-relative p-0 rounded-2">
              <img src='Images/poert1.png' className=' w-100' alt="" />
              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className="text-white fa-solid fa-plus fa-6x" />
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div onClick={() => { getimg('Images/port2.png') }} className=" overflow-hidden position-relative p-0 rounded-2">
              <img src='Images/port2.png' className=' w-100' alt="" />
              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className="text-white fa-solid fa-plus fa-6x" />
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div onClick={() => { getimg('Images/port3.png') }} className=" overflow-hidden position-relative p-0 rounded-2">
              <img src='Images/port3.png' className=' w-100' alt="" />
              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className="text-white fa-solid fa-plus fa-6x" />
              </div>
            </div>
          </div>

        </div>


      </div>
      <div>
        <div onClick={close} className="model__ position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center d-none ">
          <img src={x} />
        </div>
      </div >

    </>



  )

}