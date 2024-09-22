import { useAppDispatch } from "../../../hooks";
import { setPostingAd } from "../../../slices/modalsSlice/modalsSlice";

const ServicesMainHeading = () => {
  const dispatch = useAppDispatch();

  // const handelOpenAdModal = () => {
  //   console.log("work");
  // };

  return (
    <div className="mb-8">
      <h1 className="text-heading-lg mb-5">გამოაქვეყნე</h1>
      <div className="text-main-p text-gray-500">
        სამუშაოს გამოსაქვეყნებლად დააჭირეთ ღილაკს:{" "}
        <p
          onClick={() => dispatch(setPostingAd(true))}
          className="text-primary font-bold underline inline-block cursor-pointer"
        >
          სამუშაოს დამატება
        </p>
        <br />
        ვაკანსიები, რომლებშიც არ არის მითითებული განაცხადის ბოლო ვადა,
        ავტომატურად გამოქვეყნდება 30 დღის განმავლობაში.
      </div>
    </div>
  );
};

export default ServicesMainHeading;
