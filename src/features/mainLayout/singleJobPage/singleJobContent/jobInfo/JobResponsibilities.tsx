type JobResponsibilitiesTypes = {
  responsibilities: string[];
};
const JobResponsibilities = ({
  responsibilities,
}: JobResponsibilitiesTypes) => {
  return (
    <div className="mt-10">
      <p className="text-[14px] font-semibold text-gray-500 mb-2">
        ფუნქცია-მოვალეობები:
      </p>
      <ul>
        {responsibilities.map((qualification, index) => {
          return (
            <li
              key={index}
              className="text-[14px] font-medium text-gray-500 list-disc"
            >
              {qualification}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default JobResponsibilities;
