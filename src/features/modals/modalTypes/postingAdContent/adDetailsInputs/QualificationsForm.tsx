import { useState } from "react";

type QualificationsFormTypes = {
  qualifications: string[];
  setQualifications: (val: string[]) => void;
};

const QualificationsForm = ({
  qualifications,
  setQualifications,
}: QualificationsFormTypes) => {
  const [singleQualification, setSingleQualification] = useState<string>("");

  const handleAddQualification = () => {
    if (singleQualification.trim()) {
      setQualifications([...qualifications, singleQualification]);
      setSingleQualification("");
    }
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      {/* Input field and button for adding qualifications */}
      <div className="mb-4 flex">
        <input
          type="text"
          value={singleQualification}
          onChange={(e) => setSingleQualification(e.target.value)}
          placeholder="ახალი საკვალიფიკაციო მოთხოვნის დამატება"
          className="w-full border border-gray-300 rounded-l-md px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition duration-150 ease-in text-sm"
        />
        <button
          type="button"
          onClick={handleAddQualification}
          className="bg-primary text-white font-medium px-4 py-2 rounded-r-md hover:bg-primary-dark transition-colors duration-200 ease-in-out text-sm"
        >
          დამატება
        </button>
      </div>

      {/* List of qualifications */}
      <div>
        <p className="text-sm text-gray-700 font-semibold mb-2">
          საკვალიფიკაციო მოთხოვნები და უნარები:
        </p>
        <ul className="list-disc pl-5">
          {qualifications.length === 0 ? (
            <p className="text-sm text-gray-500 italic">
              არ არის დამატებული საკვალიფიკაციო მოთხოვნები
            </p>
          ) : (
            qualifications.map((qual, index) => (
              <li key={index} className="text-sm text-gray-600 mb-1">
                {qual}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default QualificationsForm;
