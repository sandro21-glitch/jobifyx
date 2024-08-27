import VacancyCategory from "./filterTypes/VacancyCategory";
import VacancyLocation from "./filterTypes/VacancyLocation";
import VacancyType from "./filterTypes/VacancyType";

const Filters = () => {
  return (
    <div className="section-center flex justify-end gap-5">
      <VacancyType />
      <VacancyLocation />
      <VacancyCategory />
    </div>
  );
};

export default Filters;
