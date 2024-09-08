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
      className="px-2 py-4 w-full outline-none border-gray-500 rounded-md"
    />
  );
};

export default Input;
