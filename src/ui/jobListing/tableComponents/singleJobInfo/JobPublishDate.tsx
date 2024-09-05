type JobPublishDateTypes = {
  publishDate: string;
};
const JobPublishDate = ({ publishDate }: JobPublishDateTypes) => {
  return <li>{publishDate}</li>;
};

export default JobPublishDate;
