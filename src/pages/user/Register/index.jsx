import { RenderSteps } from "./components/RenderSteps";
import { BarSteps } from "./components/BarSteps/BarSteps";
import logo from "@assets/images/logo.png";
import { useState } from "react";

export function PageRegister() {
  const [step, setStep] = useState(1);
  return (
    <div className="Register-container">
      <div className="logo-container">
        <img src={logo} alt="logo de tryning" />
        <BarSteps step={step} />
      </div>
      <RenderSteps step={step} setStep={setStep} />
    </div>
  );
}
