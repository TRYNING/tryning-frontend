import { Circle } from "./Circle";

export function BarSteps({ step }) {
  if (step === 1)
    return (
      <div className="BarSteps-container">
        <Circle step={1} state={true} />
        <Circle step={2} state={true} />
        <Circle step={3} state={true} />
        <div className="bar"></div>
      </div>
    );
  if (step === 2)
    return (
      <div className="BarSteps-container">
        <div className="circle">1</div>
        <div className="circle">2</div>
        <div className="circle">2</div>
        <div className="bar"></div>
      </div>
    );

  if (step === 3)
    return (
      <div className="BarSteps-container">
        <div className="circle">1</div>
        <div className="circle">2</div>
        <div className="circle">2</div>
        <div className="bar"></div>
      </div>
    );
}
