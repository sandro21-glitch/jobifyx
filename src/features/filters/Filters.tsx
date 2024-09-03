import InputFilter from "./filterTypes/InputFilter";
import VacancyCategory from "./filterTypes/VacancyCategory";
import VacancyLocation from "./filterTypes/VacancyLocation";
import VacancyType from "./filterTypes/VacancyType";

const Filters = () => {
  return (
    <div
      style={{ marginTop: "15px" }}
      className="section-center flex justify-end"
    >
      <div className="flex items-center gap-5 text-gray-500">
        <VacancyType />
        <VacancyLocation />
        <VacancyCategory />
        <InputFilter />
      </div>
    </div>
  );
};

export default Filters;
