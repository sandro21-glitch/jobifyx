import { useState } from "react";

const VacancyLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState("");

  const vacancyLocations = [
    "ყველა ვაკანსია",
    "ვაკანსიები",
    "სტიპენდიები",
    "სხვა",
    "ტენდერები",
    "ტრენინგები",
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div>
      <select
        id="selectedLocation"
        value={selectedLocation}
        onChange={handleChange}
        className="text-[.6rem] border p-[1px] bg-background outline-none h-[20px] rounded-sm"
      >
        {vacancyLocations.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default VacancyLocation;
