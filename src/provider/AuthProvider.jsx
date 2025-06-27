import React, { createContext, useEffect, useState } from 'react';
import app from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';



export const AuthContex = createContext();
 const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser] =useState(null);
  const [loading, setLoading] = useState(true);

  const createUser= (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  };

   const signIn= (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  };

  const logOut =() =>{
    return signOut(auth);
  };

   const googleSignIn = () =>{
    return signInWithPopup(auth,googleProvider)
  }

  const updateUser = (updateData)=>{
    return updateProfile(auth.currentUser, updateData);
  }

  const forgetPassword = (email) =>{
    return sendPasswordResetEmail(auth,email);
  }

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
      setLoading(false);


      
        
      
    });
    return() =>{
      unsubscribe();
    };
  },[]);
 
  const authData ={
    user,
    setUser,
    createUser,
    signIn,
    logOut,
    googleSignIn,
    updateUser,
    forgetPassword,
    loading,
    setLoading,
    
    
  }
  
  return (
    <AuthContex value={authData}>
      {children}
    </AuthContex>
  );
};

export default AuthProvider;

