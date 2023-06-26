import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  errorMessageLogin,
  errorMessageRegister,
} from "../utilities/getAuthErrorMessage";
import { auth } from "../services/firebase.config";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [user, setUSer] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [registerDetail, setRegisterDetail] = useState(false);

  const googleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const registerWithEmail = async (email, password) => {
    try {
      setLoading(true);
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoading(false);
      console.log(response);
    } catch (err) {
      const errorMessage = errorMessageRegister(err.code);
      setError(errorMessage);
      setLoading(false);
    }
  };

  const signWithEmail = async (email, password) => {
    try {
      setLoading(true);
      const response = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      console.log(response);
    } catch (err) {
      const errorMessage = errorMessageLogin(err.code);
      setError(errorMessage);
      setLoading(false);
    }
  };

  const SignOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      setUSer(user);
    });
    return () => {
      unsuscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        googleSignUp,
        SignOut,
        registerWithEmail,
        signWithEmail,
        setRegisterDetail,
        registerDetail,
        setErrorAuth: setError,
        loadingAuth: loading,
        errorAuth: error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
