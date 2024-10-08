import { useState } from "react";

const VacancyCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const vacancyCategories = [
    "ყველა ვაკანსია",
    "ვაკანსიები",
    "სტიპენდიები",
    "სხვა",
    "ტენდერები",
    "ტრენინგები",
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <select
        id="selectedCategory"
        value={selectedCategory}
        onChange={handleChange}
        className="text-[.9rem] border p-[1px] bg-background outline-none h-fit rounded-sm"
      >
        {vacancyCategories.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default VacancyCategory;
