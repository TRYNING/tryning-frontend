import { createContext, useState } from "react";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [user, setUSer] = useState();

  const googleSingUp = async () => {
    console.log("pito");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, googleSingUp }}>
      {children}
    </AuthContext.Provider>
  );
}
