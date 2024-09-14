type JobPublishDateTypes = {
  publishDate: string;
  isVip: boolean;
};
const JobPublishDate = ({ publishDate, isVip }: JobPublishDateTypes) => {
  return (
    <li className={`${isVip ? "text-primary" : "text-gray-500"} font-medium hidden lg:block`}>
      {publishDate}
    </li>
  );
};

export default JobPublishDate;
