import { georgianMonths } from "../../../../constants/geoMonthNames";

type JobPublishDateTypes = {
  publishDate: string;
  isVip: boolean;
};

const JobPublishDate = ({ publishDate, isVip }: JobPublishDateTypes) => {
  const date = new Date(publishDate);

  // Validate the date
  if (isNaN(date.getTime())) {
    return (
      <li
        className={`${
          isVip ? "text-primary" : "text-gray-500"
        } font-medium hidden lg:block`}
      >
        Invalid Date
      </li>
    );
  }

  // Get the day and month in Georgian
  const day = date.getDate();
  const month = georgianMonths[date.getMonth()]; // Get month in Georgian

  // Construct the formatted date string
  const formattedDate = `${day} ${month}`;

  return (
    <li
      className={`${
        isVip ? "text-primary" : "text-gray-500"
      } font-medium hidden lg:block`}
    >
      {formattedDate}
    </li>
  );
};

export default JobPublishDate;
