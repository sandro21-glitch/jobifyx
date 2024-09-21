type ProgressBarTypes = {
  width: number;
};
const ProgressBar = ({ width }: ProgressBarTypes) => {
  return (
    <div className="mt-2 bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none transition-all ease-in duration-150
         rounded-full"
        style={{ width: `${width}%` }}
      >
        {width}%
      </div>
    </div>
  );
};

export default ProgressBar;
