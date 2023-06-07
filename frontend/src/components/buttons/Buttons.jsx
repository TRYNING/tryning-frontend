import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

import "./Buttons.scss";

export function LinkButton({ to, label }) {
  return (
    <div className="button">
      <Link to={to}>{label}</Link>
    </div>
  );
}

export function SearchButton({ label }) {
  return <div className="button">{label}</div>;
}

export function SignOutButton({ label }) {
  const { SignOut } = useAuthContext();

  return <div className="button" onClick={SignOut}>{label}</div>;
}

export function SignUpButton({ label }) {
  const { googleSignUp } = useAuthContext();

  return <div className="button" onClick={googleSignUp}>{label}</div>;
}
