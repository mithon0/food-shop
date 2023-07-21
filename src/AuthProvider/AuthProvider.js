import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { useEffect } from "react";
export const AuthContext =createContext(null);
const auth =getAuth(app);



const AuthProvider = ({children}) => {
   const [user,setUser]=useState([]);

   const googleSingnup =(googleProvider)=>{
    return signInWithPopup(auth,googleProvider)
   }
   const gitHubSingnup =(gitProvider)=>{
    return signInWithPopup(auth,gitProvider)
   }
   const registers =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
   }
   const updateUser=(name,photo)=>{
  return  updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
   }

   const logins=(email, password)=>{
  return  signInWithEmailAndPassword(auth, email, password);
   }
   const logOut =()=>{
        return   signOut(auth);
   }

   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,userInfo=>{  
     setUser(userInfo);
     });
     return ()=> {
        unSubscribe();
     }
   },[])
    const authInfo ={
        user,
        googleSingnup,
        gitHubSingnup,
        registers,
        updateUser,
        logOut,
        logins

    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
    
};

export default AuthProvider;