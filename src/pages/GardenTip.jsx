import React, { use } from 'react';
import { AuthContex } from './../provider/AuthProvider';
import { toast } from 'react-toastify';

const GardenTip = () => {
  const {user} = use(AuthContex)

  const handelAddGardenTip= e =>{
    e.preventDefault();
    const form = e.target;
        const formData = new FormData(form);
        const newGardenTip = Object.fromEntries(formData.entries())
        console.log(newGardenTip);


        fetch('http://localhost:3000/gardens',{
          method: 'POST',
          headers: {
            'content-type' : 'application/json'},
            body: JSON.stringify(newGardenTip)
          })
        
        .then(res => res.json())
        .then(data =>{
          if(data.insertedId){
            console.log('Added  Successfully',data)
            toast.success("Added Successfully");
          }
        })
      }

  return (
    <div className='w-10/12 mx-auto'>
      <h1 className='font-bold text-4xl text-center py-10'>Share a Garden Tip</h1>
      <form onSubmit={handelAddGardenTip} >

        <div className='grid grid-cols-2  justify-center  gap-6 items-center'>
          <div>
          <label className="label font-bold">Title</label><br />
         <input
          type="text"
          name="title"
          placeholder="Title (e.g., How I Grow Tomatoes Indoors)"          
          className="input input-secondary"
          required
        />
        </div>

        <div>
          <label className="label">PlantType</label><br />
         <input
          type="text"
          name="plantType"
          placeholder="Plant Type / Topic"
          className=" input input-secondary"
          required
        />
        </div>

        <div>
          <label className="label">Difficulty</label><br />
        <select
          name="difficulty"          
          className=" input input-secondary"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        </div>

        <div>
          <label className="label">Description</label><br />
        <textarea
          name="description"
          placeholder="Description"
          
          className=" input input-secondary"
          rows={4}
          required
        ></textarea>
        </div>

        <div>
          <label className="label">Image</label><br />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"          
          className=" input input-secondary"
        />
        </div>

        <div>
          <label className="label">Category</label><br />
         <select
          name="category"
          
          className=" input input-secondary"
        >
          <option>Composting</option>
          <option>Plant Care</option>
          <option>Vertical Gardening</option>
          <option>Hydroponics</option>
          <option>Balcony Gardening</option>
        </select>
        </div>

       
        </div><br />
        <div>
         <label className="label">Availability</label><br />
         <select
          name="availability"
          
          className="input input-secondary"
        >
          <option>Public</option>
          <option>Hidden</option>
        </select>
       </div><br />

         
          <div className="grid grid-cols-2  justify-center  gap-10 items-center">
             <div>
          <label className="label font-bold">Name</label><br />
         <input
          type="text"
          name="name"
          value={ user && user?.displayName}
          placeholder="Title (e.g., How I Grow Tomatoes Indoors)"          
          className="input input-secondary"
          required
        />
        </div>
           <div>
          <label className="label font-bold">Email</label><br />
         <input
          type="text"
          name="email"
          value={ user && user?.email}
          placeholder="Title (e.g., How I Grow Tomatoes Indoors)"          
          className="input input-secondary"
          required
        />
        </div>
          </div>
        <br />

         <button
          type="submit"
          className="bg-green-600 w-full mb-2 text-white px-4 py-2 rounded hover:bg-green-700 mb-10"
        >
          Share Tip
        </button>
      </form>
    </div>
  );
};

export default GardenTip;