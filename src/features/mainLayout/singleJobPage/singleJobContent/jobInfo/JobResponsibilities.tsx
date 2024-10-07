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
      <ul className="list-decimal list-inside flex flex-col gap-1">
        {responsibilities.map((qualification, index) => {
          return (
            <li
              key={index}
              className="text-[14px] font-medium text-gray-500"
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
