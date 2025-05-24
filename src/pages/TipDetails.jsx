import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContex } from '../provider/AuthProvider';
import { AiFillLike } from "react-icons/ai";

const TipDetails = () => {
  const {user} = use(AuthContex);
  // console.log(user)
  const data = useLoaderData();
  console.log(data);
  const {_id,imageUrl,title,plantType,category,difficulty,availability,description,totalLiked = 0} =data;
  const [likes, setLikes] = useState(totalLiked);
  const [isLiked, setIsLiked] = useState(false);

   const handleLike = async () => {
    if (isLiked) return; // prevent multiple likes from same session (optional)

    const updatedLikes = likes + 1;

    try {
      const res = await fetch(`http://localhost:3000/gardens/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ totalLiked: updatedLikes }),
      });

      if (res.ok) {
        setLikes(updatedLikes);
        setIsLiked(true);
      }
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  return (
    <div>
      <h1>Tip Details</h1>
      <h1 className='text-green-500 font-bold text-2xl text-right pr-28'>Total Like: {likes} </h1>
      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-md">
      <img
        src={imageUrl}
        alt='Not image'
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h2 className="text-3xl font-bold text-green-700 mb-2">{title}</h2>
      <p className=" mb-2"> <strong>Plant Type:</strong> {plantType}</p>
      <p className=" mb-2"> <strong>Category:</strong> {category}</p>
      <p className="mb-2"> <strong>Difficulty:</strong> {difficulty}</p>
      <p className=" mb-2"> <strong>Visibility:</strong> {availability}</p>
      <p className=" mb-2"> <strong>Posted by:</strong> {user && user.displayName} </p>
      <p className="mt-4">{description}</p>

      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={handleLike}
          className="  px-4 py-2 rounded hover:bg-green-700"
          disabled={isLiked}
        >
          <AiFillLike color='blue' />
          {isLiked ? 'Liked' : 'Like'}
        </button>
      </div>
    </div>
    </div>
  );
};

export default TipDetails;