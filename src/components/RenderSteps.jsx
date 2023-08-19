import { Step1 } from "./Step1/Step1";
import { Step2 } from "./Step2/Step2";
import { Step3 } from "./Step3/Step3";

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
      content = <Step1 nextStep={nextStep} />;
      break;
    case 2:
      content = <Step2 nextStep={nextStep} prevStep={prevStep} />;
      break;
    case 3:
      content = <Step3 prevStep={prevStep} />;
      break;
  }
  return <>{content}</>;
}
