import React, { useState } from 'react';
import './Login.css';
import login from '../../images/login.png';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
const Login = () => {
    const [showPass,setShowPass]=useState(false);


    const pass=() =>{
        if(showPass=== false){
            setShowPass(true)
        }
        else{
            setShowPass(false)
        }
    }
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className=' mx-16 my-5 py-14 rounded-lg shadow-lg glass'>
                    <img src={login} alt="" />
                </div>
                <div className=' mx-16 my-5 py-14 rounded-lg shadow-lg glass'>
                   
                   <form >
                   <div className='mt-28'> 
                        <h1 className='text-5xl font-bold text-center d'>Please Login</h1>
                        <div className='text-center mt-5'>
                            
                            <input   className='w-2/3 glass  border-y-0 border-x-2 text-black px-2 py-2 ' type="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className='text-center mt-5'>
                            <input className='w-2/3 glass  border-y-0 border-x-2 text-black px-2 py-2 ' type={showPass?"text":"password"} placeholder='Enter Your valid passWord' />
                            
                        </div>
                        <div className='mx-24'>
                       <p> <input onClick={pass} type="checkbox"  className="checkbox-info" />Show Password</p>
                        </div>
                        <div className='text-center mt-5'>
                            <button className='w-2/3 btn btn-info'>Login</button>
                        </div>
                    </div>
                   </form>
                   <p className='mx-24 mt-5'>Want to Create New Account ?<Link className='text-blue-400' to="/signup">SignUp</Link> </p>
                   <div className="divider w-2/3 mx-auto">OR</div>
                   <div className="w-2/3 mx-44">
                    <button className='btn glass rounded-full mr-5  '>
                        <FcGoogle className='text-3xl rounded-full'/>
                    </button>
                    <button className='btn glass rounded-full'>
                        <FaGithubSquare className='text-3xl rounded-full'/>
                    </button>
                   </div>
                   <div className="divider w-2/3 mx-auto"></div>
                   <div>

                   </div>
                </div>
            </div>
        </div>
    );
};

export default Login;