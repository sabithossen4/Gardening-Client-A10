import React from 'react';

const FeaturedGardeners = ({user}) => {
  const {profilePic,name,specialty,location,status} =user;
  // console.log(user)
  return (
    <div >
      <div className="border rounded-xl p-4 shadow-md border-1 pb-6">
          <img src={profilePic} alt={name} className="w-96  rounded-xl mx-auto h-[250px]" />
          <h3 className="   text-2xl font-bold pt-4">{name}</h3>
          
            
          <p className=" text-xs font-bold  py-2">{location}</p>
          <div className='flex justify-between items-center'>
            <p className=" textarea-sm font-bold ">{specialty}</p>
            <p className=" textarea-sm font-bold ">{status}</p>
          </div>
          
        </div>
    </div>
  );
};

export default FeaturedGardeners;