import { auth } from "../services/firebase.config";
import { createContext, useEffect, useState } from "react";
import { INITIAL_USER } from "../common/constants/components";
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
} from "@common/utils/errors.utils";
import { fetchCreateUser } from "../services/user.servises";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(INITIAL_USER);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const googleSignUp = async ({ userRol }) => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      console.log(user);
      const userData = {
        id: user.reloadUserInfo.localId,
        name: user.reloadUserInfo.displayName,
        email: user.reloadUserInfo.email,
        image: user.reloadUserInfo.photoUrl,
        rol: userRol ? "user" : "trainer",
      };
      await fetchCreateUser({ userData });
    } catch (err) {
      const errorMessage = err.code;
      setError(errorMessage);
      setLoading(false);
    }
  };

  const registerWithEmail = async (email, password) => {
    if (!email || !password) {
      setError("Ingrese todos los datos");
      return;
    }

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
    if (!email || !password) {
      setError("Ingrese todos los datos");
      return;
    }

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
      setUser(user);
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
        setErrorAuth: setError,
        loadingAuth: loading,
        errorAuth: error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
