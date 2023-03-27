import React from 'react'
// import Navbar from '../../components/Homepage/Navbar';
// import Footer from '../../components/Footer'
import '../adminStyles/login.css'
import Logo from '../../assets/lms_logo.png'
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    
  return (
    <>
      <div className="main-wrap">
        <div className="left">
          <div className="lhldr">
            <div className="imgwrp">
              <img src={Logo} alt="Logo" onClick={() => navigate('/')} />
            </div>
          </div>
          <div className="intro">
            <p className="big">Learn Web3 the right way</p>
            <p className="small">Join millions of learners in the Web3 space</p>
          </div>
        </div>
        <div className="right">
          <div className="logbox">
            <div className="loghead">
              <p> Sign Up</p>
              <p className="logtwo">Please, fill in details to continue</p>
            </div>
            <form>
            <label for="firstame">First Name</label>
              <input type="firstname" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/5 p-4" placeholder="First Name" required=""/>
              <label for="lastame">First Name</label>
              <input type="lastname" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/5 p-4" placeholder="Last Name" required=""/>
              <label for="email">Email</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/5 p-4" placeholder="name@company.com" required=""/>
              <label id="pass">Password</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/5 p-4" placeholder="xxxxxxx" required=""/>
              <a href="">Forgot Paswword?</a>
              <button className="w-72 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
            </form>
            <div className="signup">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
