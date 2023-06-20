import React, { useState } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
    import './SignUp.css'
    import signup from "../../images/signup.png";
const SignUp = () => {
    const [showPass,setShowPass]=useState(false);


    const pass=() =>{
        if(showPass=== false){
            setShowPass(true)
        }
        else{
            setShowPass(false)
        }}

       


    return (
        <div>
           <div className='grid grid-cols-2'>
               
                <div className=' mx-16 my-5 py-14 rounded-lg shadow-lg glass'>
                   
                   <form >
                   <div className='mt-28'> 
                        <h1 className='text-5xl font-bold text-center d'>Sign Up Now</h1>
                        <div className='text-center mt-5'>
                            
                            <input id='inputID'  className='w-2/3 glass  border-y-0 border-x-2 text-black px-2 py-2 ' type="text" placeholder='Full Name' />
                        </div>
                        <div className='text-center mt-5'>
                            
                            <input id='inputID'  className='w-2/3 glass  border-y-0 border-x-2 text-black px-2 py-2 ' type="text" placeholder='PhotoUrl' />
                        </div>
                        <div className='text-center mt-5'>
                            
                            <input id='inputID'  className='w-2/3 glass  border-y-0 border-x-2 text-black px-2 py-2 ' type="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className='text-center mt-5'>
                            <input id='inputID' className='w-2/3 glass  border-y-0 border-x-2 text-black px-2 py-2 ' type={showPass?"text":"password"} placeholder='Enter Your valid passWord' />
                            
                        </div>
                        <div className='mx-24'>
                       <p> <input onClick={pass} type="checkbox"  className="checkbox-info" />Show Password</p>
                        </div>
                        <div className='text-center mt-5'>
                            <button className='w-2/3 btn btn-info'>SignUp</button>
                        </div>
                    </div>
                   </form>
                   <p className='mx-24 mt-5'>Already Have an Account ?<Link className='text-blue-400' to="/login">Login</Link> </p>
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
                <div className=' mx-16 my-5 py-14 rounded-lg shadow-lg glass'>
                    <img src={signup} alt="" />
                </div>
            </div> 
        </div>
    );
};

export default SignUp;