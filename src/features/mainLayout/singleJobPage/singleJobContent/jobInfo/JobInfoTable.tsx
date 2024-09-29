import { calculateDeadline } from "../../../../../utils/calcDeadline";
import { georgianMonths } from "../../../../../utils/geoMonthNames";

type JobInfoTableTypes = {
  jobTitle: string;
  jobPublishDate: string;
  jobDeadline: string;
  jobCompanyName: string;
};

const JobInfoTable = ({
  jobCompanyName,
  jobDeadline,
  jobPublishDate,
  jobTitle,
}: JobInfoTableTypes) => {
  const publishDate = new Date(jobPublishDate);

  if (isNaN(publishDate.getTime())) {
    console.error("Invalid Publish Date:", jobPublishDate);
    return null;
  }

  const formattedDeadlineDate = calculateDeadline(jobPublishDate, jobDeadline);

  return (
    <div className="mb-5">
      <ul className="text-[12px]">
        <li className="p-1 border shadow-sm bg-gray-100 text-gray-500">
          დასახელება:{" "}
          <span className="font-bold text-gray-500">{jobTitle}</span>
        </li>
        <li className="p-1 border shadow-sm bg-gray-100 text-gray-500">
          მომწოდებელი:{" "}
          <span className="text-primary font-bold underline">
            {jobCompanyName}
          </span>
        </li>
        <li className="p-1 border shadow-sm bg-gray-100 text-gray-500 flex items-center gap-1">
          <p>
            გამოქვეყნდა:{" "}
            <span className="text-gray-500 font-bold ml-1">{`${publishDate.getDate()} ${
              georgianMonths[publishDate.getMonth()]
            }`}</span>
          </p>
          /{" "}
          <p>
            ბოლო ვადა:
            <span className="text-gray-500 font-bold ml-1">
              {formattedDeadlineDate}
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default JobInfoTable;
