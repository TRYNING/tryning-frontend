
import { FormDetails } from "./components/FormDetails/FormDetails";
import { FormDetailsExtra } from "./components/FormDetailsExtra/FormDetailsExtra"
import { useState } from "react"

export default function RegisterDetails() {
  const [extra, setExtra] = useState(false);

  return (
    <div className="Register-details-container">
      <a href="/">volver</a>
      <h1>Tus datos</h1>
      { extra ? <FormDetailsExtra /> : <FormDetails setExtra={setExtra} /> }
    </div>
  );
}
