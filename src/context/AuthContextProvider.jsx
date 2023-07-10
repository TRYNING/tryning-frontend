import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
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
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const googleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const registerWithEmail = async (email, password, nextStep) => {
    try {
      setLoading(true);
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoading(false);
      nextStep();
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
        userData,
        setUserData,
        googleSignUp,
        SignOut,
        registerWithEmail,
        signWithEmail,
        setErrorAuth: setError,
        loadingAuth: loading,
        errorAuth: error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
