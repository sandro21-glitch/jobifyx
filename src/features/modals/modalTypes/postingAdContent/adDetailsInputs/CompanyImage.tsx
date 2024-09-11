import { useRef } from "react";

const CompanyImage = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); 
    }
  };
  return (
    <div>
      <label
        className="px-2 py-3 w-full outline-none border 
      border-gray-400 bg-gray-300 rounded-md
        flex flex-col items-start text-gray-500"
      >
        კომპანიის ლოგო
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          placeholder="კომპანიის ლოგო"
          className="hidden"
        />
        <button
          onClick={handleFileClick}
          className="p-1 border-gray-500 hover:bg-gray-400 border rounded-md mt-1 tex-black"
        >
          + ფაილის არჩევა
        </button>
      </label>
    </div>
  );
};

export default CompanyImage;
