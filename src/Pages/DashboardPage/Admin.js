import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Members from './Members';

const Admin = () => {
    return (
        <div>
            <nav className='p-3 bg-blue-400 text-white'>
                <ul className='flex gap-5 '>
                <li ><Link to='/dashboard' className='hover:bg-blue-600 p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-700  '>Members</Link></li>
                <li><Link to='/dashboard/admin' className='hover:bg-blue-600 p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-700  '>Admin</Link></li>
                <li><Link className='hover:bg-blue-600 p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-700  '>Chef</Link></li>
                <li><Link className='hover:bg-blue-600 p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-700  '>AddFood</Link></li>
                </ul>
            </nav>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Admin;