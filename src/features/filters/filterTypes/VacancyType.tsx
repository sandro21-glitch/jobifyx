import React, { useState } from "react";

const VacancyType = () => {
  const [selectedType, setSelectedType] = useState("");

  const vacancyTypes = [
    "ყველა ვაკანსია",
    "ვაკანსიები",
    "სტიპენდიები",
    "სხვა",
    "ტენდერები",
    "ტრენინგები",
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  return (
    <div>
      <select
        id="vacancyType"
        value={selectedType}
        onChange={handleChange}
        className="text-[.9rem] border p-[1px] bg-background outline-none h-fit rounded-sm"
      >
        {vacancyTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default VacancyType;
