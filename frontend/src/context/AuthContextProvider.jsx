
import { createContext, useState } from "react";

export const AuthContext = createContext({})

export function AuthContextProvider({children}) {
    const [user,setUSer] = useState()

    const googleSingUp = async () => {
        console.log("pito")
    }
    
    return <AuthContext.Provider value={{user, googleSingUp}}>
        {children}
    </AuthContext.Provider>
}