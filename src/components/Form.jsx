import { Input } from "./UI/Input";
import { Button } from "./UI/Button";

export function Form({ handleSubmit, inputs, buttons, error }) {
  return (
    <form
      className="flex flex-col justify-between gap-20 "
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="relative top-6 text-[var(--color-error)]">
        {error && <p>{error}</p>}
      </div>
      <div className="flex flex-wrap justify-between gap-2">
        {inputs.map((input, index) => (
          <Input key={index} {...input.props} />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {buttons.map((button, index) => (
          <Button key={index} {...button.props}>
            {button.props.children}
          </Button>
        ))}
      </div>
    </form>
  );
}
