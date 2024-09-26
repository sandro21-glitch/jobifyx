import { georgianMonths } from "./geoMonthNames";

export const calculateDeadline = (
  publishDate: string,
  duration: string
): string => {
  const date = new Date(publishDate);

  const match = duration.match(/(\d+)\s*(კვირა|თვე|წელიწადი)/);
  if (match) {
    const value = parseInt(match[1], 10);
    const unit = match[2];

    switch (unit) {
      case "კვირა": // weeks
        date.setDate(date.getDate() + value * 7);
        break;
      case "თვე":
        date.setMonth(date.getMonth() + value);
        break;
      case "წელიწადი": // years
        date.setFullYear(date.getFullYear() + value);
        break;
      default:
        break;
    }
  }

  const day = date.getDate();
  const month = georgianMonths[date.getMonth()];
  return `${day} ${month}`;
};
