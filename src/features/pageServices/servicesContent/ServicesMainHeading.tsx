import { Link } from "react-router-dom";

const ServicesMainHeading = () => {
  return (
    <div className="mb-8">
      <h1 className="text-heading-lg mb-5">გამოაქვეყნე</h1>
      <p className="text-main-p text-gray-500">
        სამუშაოს გამოსაქვეყნებლად დააჭირეთ ღილაკს:{" "}
        <Link to={"/services"} className="text-primary font-bold underline">
          სამუშაოს დამატება
        </Link>
        <br />
        ვაკანსიები, რომლებშიც არ არის მითითებული განაცხადის ბოლო ვადა,
        ავტომატურად გამოქვეყნდება 30 დღის განმავლობაში.
      </p>
    </div>
  );
};

export default ServicesMainHeading;
