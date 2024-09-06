type JobPublishDateTypes = {
  publishDate: string;
  isVip: boolean;
};
const JobPublishDate = ({ publishDate, isVip }: JobPublishDateTypes) => {
  return (
    <li className={`${isVip ? "text-primary" : "text-gray-500"} font-medium`}>
      {publishDate}
    </li>
  );
};

export default JobPublishDate;
