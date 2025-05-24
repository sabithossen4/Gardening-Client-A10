import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const BrowserTips = () => {
    const [tips, setTips] = useState([]);
  const [difficulty, setDifficulty] = useState("");

  useEffect(() => {
    let url = 'https://assignment-10-server-tau-peach.vercel.app/gardens'; // Change to your server URL
    if (difficulty) {
      url += `?difficulty=${difficulty}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => setTips(data));
  }, [difficulty]);
  return (
       <div className="p-6">
      <h2 className="text-2xl font-bold mb-4"> Browse Garden Tips</h2>

      {/* Filter Dropdown */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Filter by Difficulty:</label>
        <select
          className="border px-2 py-1 rounded text-white bg-blue-950"
          onChange={(e) => setDifficulty(e.target.value)}
          value={difficulty}
        >
          <option value="">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* Tips Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left border-2 text-blue-700">
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">Difficulty</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip) => (
              <tr key={tip._id} className="border-2">
                <td className="p-3">
                  <img
                    src={tip.imageUrl}
                    alt=""
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-3">{tip.title}</td>
                <td className="p-3">{tip.category}</td>
                <td className="p-3">{tip.difficulty}</td>
                <td className="p-3">
                  <Link to={`/browsertips/${tip._id}`}>
                    <button className="hover:bg-green-700 px-4 py-1 rounded btn">
                      👁 See More
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
            {tips.length === 0 && (
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