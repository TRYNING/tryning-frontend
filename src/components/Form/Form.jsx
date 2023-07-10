import { Input } from "../Inputs/Input";
import { Button } from "../Button/Button";

export function Form({ handleSubmit, inputs, buttons, error }) {
  return (
    <form className="Form-container" onSubmit={(e) => handleSubmit(e)}>
      <div className="error-container">{error && <p>{error}</p>}</div>
      <div className="inputs-container">
        {inputs.map((input, index) => (
          <Input key={index} {...input.props} />
        ))}
      </div>
      <div className="buttons-container">
        {buttons.map((button, index) => (
          <Button key={index} {...button.props}>
            {button.props.children}
          </Button>
        ))}
      </div>
    </form>
  );
}
