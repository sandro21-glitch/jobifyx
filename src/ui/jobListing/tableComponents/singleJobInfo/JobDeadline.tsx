import { georgianMonths } from "../../../../constants/geoMonthNames";

type JobDeadlineTypes = {
  jobDeadline: string; // e.g., "1 კვირა", "2 კვირა", etc.
  jobPublishDate: string; // e.g., "2024-09-25T18:40:33Z"
  isVip: boolean;
};

const calculateDeadline = (publishDate: string, duration: string): string => {
  const date = new Date(publishDate);

  // Match duration pattern (e.g., "1 კვირა", "2 თვე")
  const match = duration.match(/(\d+)\s*(კვირა|თვე|წელიწადი)/);
  if (match) {
    const value = parseInt(match[1], 10);
    const unit = match[2];

    switch (unit) {
      case "კვირა": // weeks
        date.setDate(date.getDate() + value * 7); // Add weeks
        break;
      case "თვე": // months
        date.setMonth(date.getMonth() + value); // Add months
        break;
      case "წელიწადი": // years
        date.setFullYear(date.getFullYear() + value); // Add years
        break;
      default:
        break;
    }
  }

  const day = date.getDate();
  const month = georgianMonths[date.getMonth()];
  return `${day} ${month}`;
};

const JobDeadline = ({
  jobDeadline,
  isVip,
  jobPublishDate,
}: JobDeadlineTypes) => {
  const formattedDeadline = calculateDeadline(jobPublishDate, jobDeadline); // Calculate the deadline

  return (
    <li
      className={`${
        isVip ? "text-primary" : "text-gray-500"
      } font-medium hidden lg:block`}
    >
      {formattedDeadline} {/* Display the calculated deadline */}
    </li>
  );
};

export default JobDeadline;
