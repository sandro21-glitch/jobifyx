
type VacancyCommentProps = {
  jobComment: string;
};

const VacancyComment = ({ jobComment }: VacancyCommentProps) => {
  return (
    <div className="text-[14px] font-medium text-gray-500">
      {jobComment}
    </div>
  );
};

export default VacancyComment;
