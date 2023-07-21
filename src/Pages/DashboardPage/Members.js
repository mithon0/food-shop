import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2';
const Members = () => {
    const user = useLoaderData();
    console.log(user);
    const deleteUser=(email)=>{
        console.log(email);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/user/${email}`,{
                    method:"DELETE"
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        console.log(data);
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                          
                    })
                   
            }
          })

       
    }
    return (
        <div>
            <div className='mx-36 my grid grid-cols-3'>
                {
                    user.map(users => <><div
                    key={users._id}
                    className="mt-5 card w-80 bg-blue-300 text-white shadow-xl">
                        <figure className="px-5 pt-5">
                            <img src={users.photo} alt="" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{users.name}</h2>
                            <p>{users.email}</p>
                            <div className="card-actions ">
                           
                                <button className="btn-primary btn-outline btn hover:bg-slate-900">Make Admin</button>
                                <button className="btn btn-warning btn-outline  ">Make Chef</button>
                                <div className='mx-auto'>
                                <button onClick={()=>deleteUser(users.email)} className='btn btn-error btn-outline rounded-full'><FaTrash className='text-3xl'/></button>
                                </div>
                            </div>
                        </div>
                    </div></>)
                }
            </div>
        </div>
    );
};

export default Members;