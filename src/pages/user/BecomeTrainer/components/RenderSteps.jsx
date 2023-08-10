import { FormTrainer } from "./FormTrainer/FormTrainer";
import { Sent } from "./Sent/Sent";


export function RenderSteps({ step, setStep }) {
  const nextStep = () => {
    setStep((step) => step + 1);
  };

  const prevStep = () => {
    setStep((step) => step - 1);
  };

  let content;
  switch (step) {
    case 1:
      content = <FormTrainer nextStep={nextStep} />;
      break;
    case 2:
      content = <Sent nextStep={nextStep} prevStep={prevStep} />;
      break;
    
  }
  return <>{content}</>;
}
