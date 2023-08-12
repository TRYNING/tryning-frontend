import { Nav } from "@components/Nav/Nav";
import { RenderSteps } from "./components/RenderSteps";
import { useState } from "react";

export function PageBecomeTrainer() {
  const [step, setStep] = useState(1);

  return (
    <div className="BecomeTrainer-container">
      <Nav />
      <main>
        <RenderSteps step={step} setStep={setStep} />
      </main>
    </div>
  );
}
