import React, { use, useEffect, useState } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyTips = () => {
  const { user } = use(AuthContex);
  // console.log(user.email)
  const [tips, setTips] = useState([]);
  console.log(tips);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/mygardens/${user.email}`)
        .then((res) => res.json())
        .then((data) => setTips(data));
    }
  }, [user]);

  const handleDelete = (id) => {  

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/gardens/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
            if (data.deletedCount) {
              const remainingUsers = tips.filter((tip) => tip._id !== id);
              setTips(remainingUsers);

              // TODO Delete user from firebase

              Swal.fire({
                title: "Deleted!",
                text: "Your user has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="p-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4"> My Garden Tips</h2>
        <table className="w-full table-auto">
          <thead className="bg-green-100">
            <tr>
              <th className="p-2">Title</th>
              <th className="p-2">Category</th>
              <th className="p-2">Availability</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip) => (
              <tr key={tip._id} className="text-center">
                <td className="p-2 ">{tip.title}</td>
                <td className="p-2 ">{tip.category}</td>
                <td className="p-2 ">{tip.availability}</td>
                <td className="p-2 space-x-2">
                  
                  <Link to={`/update/${tip._id}`}  className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded">
                    
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(tip._id)}
                    className="btn bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTips;
