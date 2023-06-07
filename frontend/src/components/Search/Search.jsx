import "./Search.scss";
import { SearchButton } from "../buttons/Buttons";
import "../buttons/Buttons.scss";

export function Search({ placeholder }) {
  return (
    <>
      <div className="search-container">
        <input type="text" placeholder={placeholder} />
        <SearchButton label="Buscar"/>
      </div>
    </>
  );
}
