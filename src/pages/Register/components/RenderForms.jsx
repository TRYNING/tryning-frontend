import { useState } from "react";
import { FormRegister } from "./FormRegister/FormRegister";
import { FormDetailsExtra } from "./FormDetailsExtra/FormDetailsExtra";
import { FormDetails } from "./FormDetails/FormDetails";

export function RenderForms() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((step) => step + 1);
  };

  const prevStep = () => {
    setStep((step) => step - 1);
  };

  let content;
  switch (step) {
    case 1:
      content = <FormRegister nextStep={nextStep} />;
      break;
    case 2:
      content = <FormDetails nextStep={nextStep} prevStep={prevStep} />;
      break;
    case 3:
      content = <FormDetailsExtra prevStep={prevStep} />;
      break;
  }
  return <div>{content}</div>;
}
