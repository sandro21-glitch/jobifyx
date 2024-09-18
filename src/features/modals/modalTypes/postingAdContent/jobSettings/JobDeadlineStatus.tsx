import { useState } from "react";

const JobDeadlineStatus = () => {
  const [duration, setDuration] = useState<string>("1 თვე"); // Default to "1 month"

  const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDuration(e.target.value);
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
        value={duration}
        onChange={handleDurationChange}
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring outline-none focus:ring-primary focus:border-primary"
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
          არჩეული ხანგრძლივობა: <strong>{duration}</strong>
        </p>
      </div>
    </div>
  );
};

export default JobDeadlineStatus;
