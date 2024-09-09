type InputTypes = {
  inputFieldType: string;
  placeholder: string;
  inputValue?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  inputFieldType,
  placeholder,
  inputValue,
  onChange,
}: InputTypes) => {
  return (
    <input
      type={inputFieldType}
      placeholder={placeholder}
      value={inputValue}
      onChange={onChange}
      className="px-2 py-3 w-full outline-none border 
      text-black
      border-gray-400 bg-gray-300 rounded-md
      focus:border-primary focus:bg-white transition-all ease-in duration-150"
    />
  );
};

export default Input;
