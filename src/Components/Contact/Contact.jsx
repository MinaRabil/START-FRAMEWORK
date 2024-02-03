import React from 'react'
import './Contact.css'
import $ from 'jquery';


export default function Contact() {
  let x
  function work(idName, nameC) {
    x = document.getElementById(idName).value
    if (x != '') {
      $(nameC).removeClass('__top')
      $(nameC).addClass('top-0')
    } else {
      $(nameC).addClass('__top')
      $(nameC).removeClass('top-0')
    }
  }


  return (
    <>
      <div className="container mt-5">
        <h1 className='text-center'>ABOUT COMPONENT

        </h1>
        <div className="d-flex align-items-center justify-content-center mb-5 mt-3">
          <div className="line me-3 bg-dark" />
          <i className="fa-solid fa-star" />
          <div className="line ms-3 bg-dark" /></div>
      </div>
      <div  className="w-50 p-3 mx-auto mt-5 mb-5 ">
        <label htmlFor="userName" className="position-relative 1st __top">userName : </label>
        <input onKeyUp={() => { work("userNameInput", ".1st") }} id="userNameInput" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty" />
        <label htmlFor="userAge" className="position-relative 2nd __top">userAge : </label>
        <input onKeyUp={() => { work("userAgeInput", ".2nd") }} id="userAgeInput" type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty" />
        <label htmlFor="userEmail" className="position-relative 3th __top">userEmail : </label>
        <input onKeyUp={() => { work("userEmailInput", ".3th") }} id="userEmailInput" type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty" />
        <label htmlFor="userPassword" className="position-relative 4th __top">userPassword : </label>
        <input onKeyUp={() => { work("userPasswordInput", ".4th") }} id="userPasswordInput" type="password" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty" />
        <button className="btn mt-4 text-white" > send Message </button>
      </div>
    </>
  )
}
