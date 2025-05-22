import React, { useEffect, useState } from 'react';

const ExploreGardeners = () => {
  const [users,setUsers] =useState([]);
  // console.log(users)

  useEffect(() =>{
    fetch('http://localhost:3000/explore-gardeners')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h1>Explore Gardeners</h1>
      {
        users.map(user => (<div  key={user._id}>
      <div className="border rounded-xl p-4 shadow-md  bg-gray-50 border-0 pb-6">
          <img src={user.profilePic} alt={user.name} className="w-96  rounded-xl mx-auto h-[250px]" />
          <h3 className=" text-center text-emerald-950 text-2xl font-bold pt-4">{user.name}</h3>
          <div className='flex justify-around pt-2'>
            
          <p className="text-center text-xs font-bold text-gray-900 btn rounded-2xl">{user.location}</p>
          <p className="text-center textarea-sm text-green-900 font-bold btn rounded-2xl">{user.specialty}</p>
          </div>
        </div>
    </div>))
      }
    </div>
  );
};

export default ExploreGardeners;