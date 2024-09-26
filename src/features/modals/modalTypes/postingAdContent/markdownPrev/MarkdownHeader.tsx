import { calculateDeadline } from "../../../../../utils/calcDeadline";
import { georgianMonths } from "../../../../../utils/geoMonthNames";

type MarkDownHeaderTypes = {
  jobTitle: string;
  jobCompanyName: string;
  jobPublishDate: string;
  jobDeadline: string;
};

const formatDate = (publishDate: string): string => {
  const date = new Date(publishDate);
  const day = date.getDate();
  const month = georgianMonths[date.getMonth()];
  return `${day} ${month}`;
};

const MarkdownHeader = ({
  jobCompanyName,
  jobTitle,
  jobDeadline,
  jobPublishDate,
}: MarkDownHeaderTypes) => {
  const formattedPublishDate = formatDate(jobPublishDate);
  const formattedDeadline = calculateDeadline(jobPublishDate, jobDeadline);

  return (
    <header>
      <ul>
        <li className="text-[14px]">
          დასახელება:
          <span className="text-gray-800 font-bold ml-1">{jobTitle}</span>
        </li>
        <li className="text-[14px]">
          მომწოდებელი:
          <span className="text-primary font-semibold ml-1">{jobCompanyName}</span>
        </li>
        <li className="text-[14px]">
          გამოქვეყნდა:
          <span className="text-gray-800 font-bold ml-1">
            {formattedPublishDate} / ბოლო ვადა: {formattedDeadline}
          </span>
        </li>
      </ul>
    </header>
  );
};

export default MarkdownHeader;
