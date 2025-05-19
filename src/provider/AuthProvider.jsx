import React, { createContext, useEffect, useState } from 'react';
import app from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';



export const AuthContex = createContext();
 const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser] =useState(null);

  const createUser= (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password);
  };

   const signIn= (email,password) =>{
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
    
  }
  
  return (
    <AuthContex value={authData}>
      {children}
    </AuthContex>
  );
};

export default AuthProvider;

