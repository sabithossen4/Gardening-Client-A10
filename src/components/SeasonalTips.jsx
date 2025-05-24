import React, { useEffect, useState } from 'react';


const SeasonalTips = () => {
  const [users,setUsers] =useState([]);
    console.log(users)
  
    useEffect(() =>{
      fetch('http://localhost:3000/seasonal-tips')
      .then(res => res.json())
      .then(data => setUsers(data))
    },[])
  return (
   <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">🌤️ Seasonal Gardening Tips</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {users.map((tip) => (
          <div
            key={tip._id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={tip.image}
              alt={tip.season}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-xl  font-bold text-cyan-950 mb-2 ">{tip.season}</h3>
              <p className="text-fuchsia-900 text-sm">{tip.tips}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeasonalTips;