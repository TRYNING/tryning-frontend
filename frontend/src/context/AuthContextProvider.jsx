
import {GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut} from 'firebase/auth'
import {auth} from '../services/firebase.config'
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({})

export function AuthContextProvider({children}) {
    const [user,setUSer] = useState()

    const googleSignUp = async () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth,provider)
    }

    const outSign = () => {
        signOut(auth)
    }

    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            setUSer(user)
        })
        return ()=> {
            unsuscribe()
        }
    },[])
    
    return <AuthContext.Provider value={{user, googleSignUp ,outSign}}>
        {children}
    </AuthContext.Provider>
}