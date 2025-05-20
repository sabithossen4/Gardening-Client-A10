import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContex } from '../provider/AuthProvider';
import { toast } from 'react-toastify';



const Navbar = () => {
const {user,logOut} = use(AuthContex);
// console.log(user)
    const handleLogOut =() =>{
    logOut().then(() => {
      toast.error('LogOut Succesfully')
    }).catch((error) => {
      toast.error(error);
    });
  }  
  
 
  return (
    <div className='border border-white'>
  <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          
        <li><a>Home</a></li>      
      <li><a>Explore Gardeners</a></li>
      <li><a>Share a Garden Tip</a></li>
      <li><a>My Tips</a></li> 
      </ul>
    </div>
    <div className='w-[50px]'><img className='w-full rounded-' src="/logo.webp" alt="" /></div>
    <a className="btn btn-ghost text-xl">Gardening</a>
  </div>
  <div className="navbar-center  lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to={"/"}>Home</NavLink></li>          
      <li><NavLink to={"/exploregardeners"}>Explore Gardeners</NavLink></li>
      {
        user ?
        <li><NavLink to={"/gardentip"}>Share a Garden Tip</NavLink></li>:'' }
        {user ?
      <li><NavLink to={"/mytips"}>My Tips</NavLink></li>:''
      }      
    </ul>
  </div>
  <div className="navbar-end  gap-4">   
    {
      user ? 

      <div className="dropdown">
      <div tabIndex={0} role="button" className=" cursor-pointer">
      
      

      <img className='rounded-full max-w-[50px] ' src={`${user.photoURL? user.photoURL : '/user.png'
      }`}/>

      </div>
      <ul
        tabIndex={0}
        className="text-amber-100  dropdown-content  rounded-box   mt-3     right-0  shadow  ">
                   
        <button onClick={handleLogOut}><Link to={'/'} className="cursor-pointer hover:bg-gray-500 btn">LogOut</Link></button>  
           
      </ul>
    </div>

       : <div><Link to={'/signup'} className="btn btn-primary">SignUp</Link>
      <Link to={'/login'} className="btn btn-primary">Login</Link></div>
    }
  </div>
</div>
</div>
  );
};

export default Navbar;