import ReactMarkdown from "react-markdown";

type VacancyDescriptionTypes = {
  jobDescription: string;
};

const VacancyDescription = ({ jobDescription }: VacancyDescriptionTypes) => {
  return (
    <div>
      <ReactMarkdown className="text-[14px] font-medium text-gray-500">
        {jobDescription}
      </ReactMarkdown>
    </div>
  );
};

export default VacancyDescription;
