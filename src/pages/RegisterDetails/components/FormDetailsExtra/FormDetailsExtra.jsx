// import { useAuthContext } from "../../../../hooks/useAuthContext";
// import { useState } from "react";

export function FormDetailsExtra() {
  // const { registerWithEmail, errorAuth, setErrorAuth, googleSignUp } =
  //   useAuthContext();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setErrorAuth(null);
  //   registerWithEmail(email, password);
  // };
  return (
    <form className="FormRegister-container">
      <label>Fecha de nacimiento</label>
      <input
        type="date"
      />
      <label>Peso corporal en kg</label>
      <input
        type="number"
        
      />
      <label>Estatura en cm</label>
      <input
        type="number"
        
      />
      <button>Siguiente</button>
      {/* <div className="error-container">
        <p>{errorAuth && errorAuth}</p>
      </div> */}
    </form>
  );
}
