import { Circle } from "./Circle";

export function BarSteps({ step }) {
  let children;
  switch (step) {
    case 1:
      children = (
        <>
          <Circle step={1} state={true} />
          <Circle step={2} />
          <Circle step={3} />
          <div className="bar"></div>
        </>
      );
      break;
    case 2:
      children = (
        <>
          <Circle step={1} state={true} />
          <Circle step={2} state={true} />
          <Circle step={3} />
          <div className="bar"></div>
        </>
      );
      break;
    case 3:
      children = (
        <>
          <Circle step={1} state={true} />
          <Circle step={2} state={true} />
          <Circle step={3} state={true} />
          <div className="bar bar-step"></div>
        </>
      );
      break;
  }

  return <div className="BarSteps-container">{children}</div>;
}
