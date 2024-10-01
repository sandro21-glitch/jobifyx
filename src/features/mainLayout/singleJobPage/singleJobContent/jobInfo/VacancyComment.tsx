
type VacancyCommentProps = {
  jobComment: string;
};

const VacancyComment = ({ jobComment }: VacancyCommentProps) => {
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;

  const parts = jobComment.split(emailRegex);

  return (
    <div className="text-[14px] font-medium text-gray-500 mt-10">
      {parts.map((part, index) =>
        emailRegex.test(part) ? (
          <span key={index} className="font-bold text-blue-500">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </div>
  );
};

export default VacancyComment;
