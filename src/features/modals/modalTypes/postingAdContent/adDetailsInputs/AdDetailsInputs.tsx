import AdComment from "./AdComment";
import AdName from "./AdName";
import JobDescription from "./JobDescription";

const AdDetailsInputs = () => {
  return (
    <div className="mt-7 flex flex-col gap-5">
      <h4 className="text-[1.2rem] font-medium text-left">
        განცხადების ტიპის დასახელება
      </h4>
      <AdName />
      <AdComment />
      <JobDescription />
    </div>
  );
};

export default AdDetailsInputs;
