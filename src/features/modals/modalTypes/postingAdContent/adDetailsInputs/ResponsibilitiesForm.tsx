import { useState } from "react";

type ResponsibilitiesFormTypes = {
  responsibilities: string[];
  setResponsibilities: (val: string[]) => void;
};
const ResponsibilitiesForm = ({
  responsibilities,
  setResponsibilities,
}: ResponsibilitiesFormTypes) => {
  const [singleResponsibility, setSingleResponsibility] = useState<string>("");

  const handleAddResponsibility = () => {
    if (singleResponsibility === "") return;
    setResponsibilities([...responsibilities, singleResponsibility]);
    setSingleResponsibility("");
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="ახალი მოვალეობის დამატება"
          value={singleResponsibility}
          onChange={(e) => setSingleResponsibility(e.target.value)}
          className="w-full border border-gray-300 rounded-l-md px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition duration-150 ease-in text-sm"
        />
        <button
          type="button"
          onClick={handleAddResponsibility}
          className="bg-primary text-white font-medium px-4 py-2 rounded-r-md hover:bg-primary-dark transition-colors duration-200 ease-in-out text-sm"
        >
          დამატება
        </button>
      </div>

      <div>
        <p className="text-sm text-gray-700 font-semibold mb-2">
          ფუნქცია-მოვალეობები:
        </p>
        <ul className="list-disc pl-5">
          {responsibilities.length === 0 ? (
            <p className="text-sm text-gray-500 italic">
              არ არის დამატებული მოვალეობები
            </p>
          ) : (
            responsibilities.map((resp, index) => (
              <li key={index} className="text-sm text-gray-600 mb-1">
                {resp}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default ResponsibilitiesForm;
