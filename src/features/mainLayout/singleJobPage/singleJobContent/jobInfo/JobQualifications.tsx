type QualificationsTypes = {
  qualifications: string[];
};
const JobQualifications = ({ qualifications }: QualificationsTypes) => {
  return (
    <div className="mt-10">
      <p className="text-[14px] font-semibold text-gray-500 mb-2">
        საკვალიფიკაციო მოთხოვნები და უნარები:
      </p>
      <ul className="list-decimal list-inside flex flex-col gap-1">
        {qualifications.map((qualification, index) => {
          return (
            <li key={index} className="text-[14px] font-medium text-gray-500">
              {qualification}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default JobQualifications;
