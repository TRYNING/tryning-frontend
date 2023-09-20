import { FormLogin } from "./components/FormLogin/FormLogin";

export default function PageLogin() {
  return (
    <div className="relative bg-[var(--color-gray)] text-black min-h-screen flex justify-center flex-col items-center">
      <FormLogin />
    </div>
  );
}
