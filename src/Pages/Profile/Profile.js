import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Profile = () => {
    const{user}=useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h1 className='text-center text-7xl mb-10 text-blue-500'>----Profile----</h1>
         <div className='rounded-full flex justify-center'>
         <img className='rounded-full' src={user.photoURL} alt="" />
         </div>
         <div className='text-center mb-20'>
            <h1 className='text-4xl font-semibold '>
            NickName: <span className='text-blue-600'>{user.displayName}</span>
            </h1>
            <h1 className='text-4xl font-semibold '>
            Email: <span className='text-blue-600'>{user.email}</span>
            </h1>
            <h1 className='text-4xl font-semibold '>
            creationTime
: <span className='text-blue-600'>{user.metadata
.creationTime}</span>
            </h1>
            <h1 className='text-4xl font-semibold '>
            lastSignInTime
: <span className='text-blue-600'>{user.metadata.lastSignInTime}</span>
            </h1>
         </div>
        </div>
    );
};

export default Profile;