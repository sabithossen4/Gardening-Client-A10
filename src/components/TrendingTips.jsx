import React, { useEffect, useState } from 'react';

const TrendingTips = () => {
  const [trending, setTrending] = useState([]);
  
  // console.log(trending)

  useEffect(() =>{
    fetch("http://localhost:3000/trending")
    .then(res => res.json())
    .then(data => setTrending(data))
  },[] );
  return (
    <div>     
      
         <div className="px-4 py-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">
        🌟 Top Trending Tips
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {trending.map((tips) => (
          <div
            key={tips._id}
            className="bg-gray-200 rounded-2xl shadow p-4 hover:shadow-lg transition border-"
          >
            <h3 className="text-xl font-semibold text-green-800">{tips.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{tips.description}</p>
            <div className="mt-4 text-sm text-green-600">
              <span className="font-medium"></span> {tips.author}
              <span className="ml-4 font-medium">Category:</span> {tips.category}
            </div>
            <div className="flex justify-between mt-2 text-sm text-blue-600 font-medium items-center">
               <span>Total Likes: {tips.totalLiked || 0}</span>
                 <span>❤️</span>
            </div>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  );
};

export default TrendingTips;