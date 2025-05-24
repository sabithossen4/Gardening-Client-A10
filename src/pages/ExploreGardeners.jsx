import React, { useEffect, useState } from 'react';
import { AiFillLike } from "react-icons/ai";

const ExploreGardeners = () => {
  const [users,setUsers] =useState([]);
  // console.log(users)

  useEffect(() =>{
    fetch('http://localhost:3000/explore-gardeners')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div className='grid grid-cols-3 gap-4'>     
      {
        users.map(user => (<div  key={user._id}>



      <div className="card bg-base-100  shadow-sm border-1">
  <figure>
    <img
      className='h-[250px] w-96'
      src={user.profilePic}
      alt="Not Image" />
  </figure>
  <div className="card-body">
    <h2 className=" flex justify-between items-center">
      <div className='text-2xl font-bold'>{user.name}</div>
      <div className='font-semibold'>{user.experience}</div>
      
    </h2>
    <p>Specialty : {user.specialty}</p>
    <p>Gender : {user.gender}</p>
    <p> <span>Age : </span>{user.age}</p>
    <div className="card-actions  justify-between items-center">
      <div className="badge font-bold">{user.location}</div>
      <div>{user.status}</div>
      <div className="badge font-black"><AiFillLike />{user.totalSharedTips}</div>
    </div>
  </div>
</div>





    </div>))
      }
    </div>
  );
};

export default ExploreGardeners;