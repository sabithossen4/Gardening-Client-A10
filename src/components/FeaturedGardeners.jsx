import React from 'react';

const FeaturedGardeners = ({user}) => {
  const {profilePic,name,specialty,location} =user;
  // console.log(user)
  return (
    <div >
      <div className="border rounded-xl p-4 shadow-md  bg-gray-50 border-0 pb-6">
          <img src={profilePic} alt={name} className="w-96  rounded-xl mx-auto h-[250px]" />
          <h3 className=" text-center text-emerald-950 text-2xl font-bold pt-4">{name}</h3>
          <div className='flex justify-around pt-2'>
            
          <p className="text-center text-xs font-bold text-gray-900 btn rounded-2xl">{location}</p>
          <p className="text-center textarea-sm text-green-900 font-bold btn rounded-2xl">{specialty}</p>
          </div>
        </div>
    </div>
  );
};

export default FeaturedGardeners;