import { getAuth, signInWithPopup, GoogleAuthProvider,signOut ,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase=()=>{
  
    const [user,setUser]=useState({})
   
    const [isLoading,setIsLoading]=useState(true)
    const auth=getAuth()
    const googleProvider=new GoogleAuthProvider();
    const signInUsingGoogle=()=>{
      setIsLoading(true)
       return signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log(result.user)
        })
        .finally(()=> setIsLoading(false));
    }
    const logOut=()=>{
      setIsLoading(true)
        signOut(auth)
         .then(()=>{setUser({})
             setIsLoading(false)
         },[])
    }
   
   
 useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
            setIsLoading(false)
          });
          
    },[])

   
    
    
    return{
        user,signInUsingGoogle,
        logOut,
        isLoading,
       
    }
    }
    export default useFirebase;