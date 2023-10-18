import debounce from "just-debounce-it";
import { useSearchTrainerContext } from "@hooks/useSearchTrainer";
import { useCallback } from "react";
import { SvgSearch, SvgDelete } from "@assets/icons/svgIcons";

export function FormSearch() {
  const { search, setSearch, searchTrainers, inputRef, setInputActive } =
    useSearchTrainerContext();

  const debounceSearch = useCallback(
    debounce((search) => {
      searchTrainers({ search });
    }, 300),
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    let newSearch = e.target.value;
    setSearch(newSearch);
    debounceSearch(newSearch);
    setInputActive(false);
  };

  const handleChange = (e) => {
    let newSearch = { name: e.target.value, certificate: "", location: "" };
    setSearch(newSearch);
    debounceSearch(newSearch);
  };

  const handleClear = () => {
    setSearch("");
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="mt-8 mb-8 flex items-center shadow-sm bg-white border rounded-xl w-full pl-2 overflow-hidden"
    >
      <SvgSearch className="w-6 h-6 " />
      <input
        onChange={(e) => handleChange(e)}
        onClick={() =>
          setInputActive(inputRef.current === document.activeElement)
        }
        className=" py-3 px-3 bg-white  text-sm focus:border-gray-400 w-full outline-none"
        value={search.name}
        type="text"
        placeholder="Busca el nombre de tu entrenador"
        required
        ref={inputRef}
      />
      <div onClick={() => handleClear()}>
        <SvgDelete className="h-6 w-6" />
      </div>
    </form>
  );
}
