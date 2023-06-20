import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";


const NavBer = () => {
  return (
    <div>
      <div className="navbar glass text-white">
        <div className="navbar-start">



          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li>
                <Link>jjjj</Link>
               
              </li>
              <li><Link>Item 3</Link></li>
              <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
           
          </div>
            </ul>
          </div>
          <Link>
            <p className='text-4xl font-bold d'> <CountUp className='text-red-600'
              end={45}
              duration={10}
            ></CountUp><span className='text-blue-600 '>Food</span></p></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link>Home</Link></li>
            <li><Link>About</Link></li>
           
           
            <li><Link>Item 3</Link></li>
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
           
          </div>
          </ul>



        </div>

        <div className="navbar-end">
          <input type="text" placeholder="Search Food Category" className="bg-white input input-bordered input-info w-full max-w-xs" /><button className='btn btn-info'><BsSearch /></button>
          <div className='btn btn-ghost'>
            <Link to="/login">Login</Link>
          </div>
       
          
          <div className="dropdown dropdown-end">
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBer;