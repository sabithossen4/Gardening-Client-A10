import React, { use} from 'react';
import { AuthContex } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';


const PrivateRoute = ({children}) => {
  const {user,loading} = use(AuthContex);  
  // console.log(user)
  const location =useLocation();
  
  if(loading){
    return <Loading></Loading>
  }
  if(user && user?.email){
    return children;
  }
  return <Navigate state={location.pathname} to={'/login'}></Navigate>;
  
    
};

export default PrivateRoute;