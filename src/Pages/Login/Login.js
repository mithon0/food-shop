import React, { useContext, useState } from 'react';
import './Login.css';
import login from '../../images/login.png';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
const Login = () => {
    const [showPass,setShowPass]=useState(false);
    const {googleSingnup,user,gitHubSingnup,logins}=useContext(AuthContext);
    const googleProvider =new GoogleAuthProvider();
    const gitProvider =new GithubAuthProvider();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm();

      const onSubmit=data=>{
        reset()
        console.log(data);
        Swal.fire({
            title: 'Are you sure to login?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Login!'
          }).then((result) => {
            if (result.isConfirmed) {
                logins(data.email,data.password)
                .then(res=>{
                    console.log(res.user);
                    Swal.fire(
                        'Login!',
                        'Now you are loggged in',
                        'success'
                      )
                }).catch(err=>{
                    console.log(err.message);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: err.message,
                        
                      })
                })
            
            }
          })
      }

// todo navigate
    console.log(user);
    const googleHandler =()=>{
        googleSingnup(googleProvider)
        .then(res=>{
            console.log(res.user);
            const users={name:res.user.displayName,photo:res.user.photoURL,email:res.user.email,}
            fetch("http://localhost:5000/users",{
                            method:"POST",
                            headers:{
                                "Content-Type":"application/json"
                            },
                            body:JSON.stringify(users)
                        })
                        .then(res=>res.json())
                        .then(data=>console.log(data))
            Swal.fire({
                position: 'top-start',
                icon: 'success',
                title: 'Login Success',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(err=>{
            console.log(err.message);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
               
              })
        })
    }
    const gitHandler =()=>{
        gitHubSingnup(gitProvider)
        .then(res=>{
            console.log(res.user);
            const users={name:res.user.displayName,photo:res.user.photoURL,email:res.user.email,}
            fetch("http://localhost:5000/users",{
                            method:"POST",
                            headers:{
                                "Content-Type":"application/json"
                            },
                            body:JSON.stringify(users)
                        })
                        .then(res=>res.json())
                        .then(data=>console.log(data))
            Swal.fire({
                position: 'top-start',
                icon: 'success',
                title: 'Login Success',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(err=>{
            console.log(err.message);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.message,
               
              })
        })
    }
   

    
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
                   
                   <form onSubmit={handleSubmit(onSubmit)}>
                   <div className='mt-28'> 
                        <h1 className='text-5xl font-bold text-center d'>Please Login</h1>
                        <div className='text-center mt-5'>
                            
                            <input {...register('email')}   className='w-2/3 glass  border-y-0 border-x-2 text-black px-2 py-2 ' type="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className='text-center mt-5'>
                            <input {...register('password')} className='w-2/3 glass  border-y-0 border-x-2 text-black px-2 py-2 ' type={showPass?"text":"password"} placeholder='Enter Your valid passWord' />
                            
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
                    <button onClick={googleHandler} className='btn glass rounded-full mr-5  '>
                        <FcGoogle className='text-3xl rounded-full'/>
                    </button>
                    <button onClick={gitHandler} className='btn glass rounded-full'>
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