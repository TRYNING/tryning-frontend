import { useAuthContext } from "../../hooks/useAuthContext";

export function Header() {
  const { SignOut } = useAuthContext();
  return (
    <header className="Header-container">
      <button onClick={() => SignOut()}>logout</button>
    </header>
  );
}
