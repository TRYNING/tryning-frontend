import {AuthContext} from '../context/AuthContextProvider'
import { useContext } from "react";

export function useAuthContext (){
    return useContext(AuthContext)
}