import { BiSearch } from "react-icons/bi";

const InputFilter = () => {
  return (
    <div className="relative">
      <label htmlFor="search"></label>
      <input
        type="text"
        id="search"
        className="border outline-none px-[2px] text-[.9rem] h-fit"
      />
       <button className="absolute right-1 top-1/2 transform -translate-y-1/2">
        <BiSearch className="size-5" />
      </button>
    </div>
  );
};

export default InputFilter;
