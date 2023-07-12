import { Header } from "../../components/Header/Header";
import { Nav } from "../../components/Nav/Nav";
import { RenderSteps } from "./components/RenderSteps";
import { useState } from "react";

export default function BecomeTrainer() {
  const [step, setStep] = useState(1);

  return (
    <div className="BecomeTrainer-container">
      <Header />
      <Nav />
      <main>
      <RenderSteps step={step} setStep={setStep} />
      </main>
    </div>
  );
}
