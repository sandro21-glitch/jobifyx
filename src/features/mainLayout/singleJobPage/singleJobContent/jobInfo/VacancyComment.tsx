import ReactMarkdown from "react-markdown";

type VacancyCommentProps = {
  jobComment: string;
};

const VacancyComment = ({ jobComment }: VacancyCommentProps) => {
  return (
    <ReactMarkdown className="text-[14px] font-medium text-gray-500">
      {jobComment}
    </ReactMarkdown>
  );
};

export default VacancyComment;
