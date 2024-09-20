

type JobDeadlineStatusTypes = {
  jobDeadline: string;
  setJobDeadline: (val: string) => void;
};

const JobDeadlineStatus = ({
  jobDeadline,
  setJobDeadline,
}: JobDeadlineStatusTypes) => {
  const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setJobDeadline(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor="job-duration"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        რამდენ ხანს უნდა დარჩეს ეს სამუშაო აქტიური?
      </label>
      <select
        id="job-duration"
        value={jobDeadline}
        onChange={handleDurationChange}
        className="block w-full text-xs px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring outline-none focus:ring-primary focus:border-primary"
      >
        <option value="1 კვირა">1 კვირა</option>
        <option value="2 კვირა">2 კვირა</option>
        <option value="1 თვე">1 თვე</option>
        <option value="3 თვე">3 თვე</option>
        <option value="6 თვე">6 თვე</option>
        <option value="1 წელიწადი">1 წელიწადი</option>
      </select>

      <div className="mt-4">
        <p>
          არჩეული ხანგრძლივობა: <strong>{jobDeadline}</strong>
        </p>
      </div>
    </div>
  );
};

export default JobDeadlineStatus;
