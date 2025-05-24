import React, { use, useEffect} from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContex } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { GiBurningTree } from "react-icons/gi";
import { themeChange } from 'theme-change';



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
  
  useEffect(() => {
  themeChange(false); // false so it doesn't log
}, []);
 
  return (
    <div className=''>
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
    
    <div className='mr-2'>
      <GiBurningTree size={50} color='green' />
    </div>
    <div className=" text-3xl font-bold flex justify-center items-center">
      <span >Garden</span>
           
      </div>
  </div>
  <div className="navbar-center  lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold">
      <li><NavLink to={"/"}>Home</NavLink></li>          
      <li><NavLink to={"/exploregardeners"}> Explore Gardeners</NavLink></li>
      
      {
        user ?
        <li><NavLink to={"/gardentip"}> Share a Garden Tip</NavLink></li>:'' }
        <li><NavLink to={"/browsertips"}> BrowserTips</NavLink></li>
        {user ?
      <li><NavLink to={"/mytips"}>My Tips</NavLink></li>:''
      }      
      
    </ul>
  </div>
  <div className="navbar-end  gap-4">   
    {
      user ? 

      <div className="dropdown ">
      <div tabIndex={0} role="button" className=" cursor-pointer tooltip tooltip-bottom"
      data-tip={user.displayName}
      >
      
      

      <img className='rounded-full max-w-[50px] ' src={`${user.photoURL? user.photoURL : '/user.png'
      }`}
      title={user.displayName || "No Name"} // Tooltip fallback
      />

      </div>
      <ul
        tabIndex={0}
        className="text-amber-100  dropdown-content  rounded-box   mt-3     right-0  shadow  ">
                   
        <button onClick={handleLogOut}><Link to={'/'} className="cursor-pointer hover:bg-gray-500 btn">LogOut</Link></button>  
           
      </ul>
    </div>

       : <div><Link to={'/signup'} className="mx-2 font-bold ">SignUp</Link>
      <Link to={'/login'} className="mx-2 font-bold ">Login</Link></div>
    }




    <div >
      <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="synthwave" />

  {/* sun icon */}

<svg
  data-set-theme="light"
    data-act-class="ACTIVECLASS"
    className="swap-on h-8 w-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>

  <svg
   data-set-theme="dark"
    data-act-class="ACTIVECLASS"   
    className="swap-off h-8 w-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  
</label>
    </div>
    


   {/* <div className="flex items-center gap-2">
  <button
    data-set-theme="light"
    data-act-class="ACTIVECLASS"
    className="btn btn-sm bg-white text-black"
  >
    ☀️
  </button>

  <button
    data-set-theme="dark"
    data-act-class="ACTIVECLASS"
    className="btn btn-sm bg-black text-white"
  >
    🌙
  </button>
</div> */}




  </div>
</div>
</div>
  );
};

export default Navbar;