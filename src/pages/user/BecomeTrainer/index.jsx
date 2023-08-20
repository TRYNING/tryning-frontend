import { RenderSteps } from "./components/RenderSteps";
import { useState } from "react";

export default function PageBecomeTrainer() {
  const [step, setStep] = useState(1);

  return (
    <div className="BecomeTrainer-container">
      <main>
        <RenderSteps step={step} setStep={setStep} />
      </main>
    </div>
  );
}
