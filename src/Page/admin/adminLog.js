import React from 'react'
// import Navbar from '../../components/Homepage/Navbar';
// import Footer from '../../components/Footer'
import '../adminStyles/login.css'
import Elipse from './Ellipse 2.png'

const AdminLogin=()=>{
    return(
        <>
           <div className='main-wrap'>
                <div className='left'>
                   <div className='lhldr'>
                        <div className='imgwrp'>
                            <img src={Elipse} alt="" />
                        </div>
                   </div>
                    <div className='intro'>
                        <p className='big'>Learn Web3 the right way</p>
                        <p className='small'>Join millions of learners in the Web3 space</p>
                    </div>
                </div>
                <div className='right'>
                    <div className='logbox'>
                        <div className='loghead'>
                            <p>Log In</p>
                            <p className='logtwo'>Please, fill in details to continue</p>
                        </div>
                        <form>
                            <label for="email">Email</label>
                            <input type="text" placeholder='Enter your email address' name='email'/>
                            <label id='pass'>Password</label>
                            <input type="password" placeholder='Enter your password' />
                            <a href="">Forgot Paswword?</a>
                            <button>Login</button>
                        </form>
                        <div className='signup'>
                            <p>Don't have an Account?</p>
                            <span><a href="/">Sign Up</a></span>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}

export default AdminLogin