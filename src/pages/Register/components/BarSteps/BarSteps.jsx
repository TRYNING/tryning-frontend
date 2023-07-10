import { Circle } from "./Circle";

export function BarSteps({ step }) {
  return (
    <div className="BarSteps-container">
      <div className="circle-container">
        <Circle step={1} state={true} />
        <Circle step={2} state={step === 2 || step === 3 ? true : false} />
        <Circle step={3} state={step === 3 ? true : false} />
      </div>
      <div className="bar"></div>
      <div
        className="bar-step"
        style={{
          left: step === 2 ? "-50%" : step === 3 ? "0" : "",
        }}
      ></div>
    </div>
  );
}
