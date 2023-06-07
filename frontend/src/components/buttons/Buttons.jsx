import { Link } from "react-router-dom";
import "./Buttons.scss";

export function ButtonLink({to, label}) {
  return (
    <>
      <button>
        <Link to={to}>{label}</Link>
      </button>
    </>
  );
}
