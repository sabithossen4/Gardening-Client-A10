import React from 'react';
import { Link, useLoaderData } from 'react-router';

const BrowserTips = () => {
  const users = useLoaderData();
  // console.log(users)
  return (
      <div className="p-6">
      <h2 className="text-2xl font-bold mb-4"> Browse Garden Tips</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto ">
          <thead>
            <tr className="bg-green-100 text-left">
              <th className="p-3 ">Image</th>
              <th className="p-3 ">Title</th>
              <th className="p-3 ">Category</th>
              <th className="p-3 ">Difficulty</th>
              <th className="p-3 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((tips) => (
              <tr key={tips._id} className=" hover:bg-green-50">
                <td className="p-3 ">
                  <img
                    src={tips.imageUrl}
                    alt={tips.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-3 ">{tips.title}</td>
                <td className="p-3 ">{tips.category}</td>
                <td className="p-3 ">{tips.difficulty}</td>
                <td className="p-3 ">
                  <Link to={`/browsertips/${tips._id}`}>
                  <button
                    
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded btn"
                  >
                    👁 See More
                  </button>
                  </Link>
                </td>
              </tr>
            ))}
           
            {users.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-5 text-gray-500">
                  No public tips available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowserTips;