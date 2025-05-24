import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const GardenTools = () => {
  const [users,setUsers] =useState([]);
      console.log(users)
    
      useEffect(() =>{
        fetch('https://assignment-10-server-tau-peach.vercel.app/garden-tools')
        .then(res => res.json())
        .then(data => setUsers(data))
      },[])
  return (
      <section className="py-12 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10">
         Garden Tools Recommendation
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {users.map((tool) => (
            <div
              key={tool._id}
              className="bg-white p-5 rounded-2xl shadow-[8px_8px_20px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:rotate-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-28 h-28 object-contain mx-auto mb-4 transform hover:scale-110 transition-transform"
                />
                <h3 className="text-xl font-semibold text-green-800 text-center mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-600 text-sm text-center mb-4">{tool.desc}</p>
              </div>

              {/* Button + Icon row */}
              <div className="flex justify-between items-center mt-2 px-2">
                <button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                  Details
                </button>
                <FaArrowRight className="text-green-700 text-xl hover:text-green-900 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GardenTools;