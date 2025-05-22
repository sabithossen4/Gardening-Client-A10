import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContex } from '../provider/AuthProvider';

const TipDetails = () => {
  const {user} = use(AuthContex);
  // console.log(user)
  const data = useLoaderData();
  console.log(data);
  const {imageUrl,title,plantType,category,difficulty,availability,description} =data;
  return (
    <div>
      <h1>Tip Details</h1>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h2 className="text-3xl font-bold text-green-700 mb-2">{title}</h2>
      <p className="text-gray-600 mb-2"> <strong>Plant Type:</strong> {plantType}</p>
      <p className="text-gray-600 mb-2"> <strong>Category:</strong> {category}</p>
      <p className="text-gray-600 mb-2"> <strong>Difficulty:</strong> {difficulty}</p>
      <p className="text-gray-600 mb-2"> <strong>Visibility:</strong> {availability}</p>
      <p className="text-gray-600 mb-2"> <strong>Posted by:</strong> {user && user.displayName} </p>
      <p className="mt-4 text-gray-700">{description}</p>

      <div className="mt-6 flex items-center gap-3">
        <button
          
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Like
        </button>
      </div>
    </div>
    </div>
  );
};

export default TipDetails;