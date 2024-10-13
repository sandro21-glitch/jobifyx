type JobHeaderTypes = {
  isVip: boolean;
  isFav: boolean;
};
const JobHeader = ({ isVip, isFav }: JobHeaderTypes) => {
  return (
    <header
      className="grid grid-cols-2 lg:grid-cols-7 text-[14px] font-semibold
     p-2 hover:bg-gray-100 transition-all ease-in duration-150 text-center lg:text-start"
    >
      <p className="lg:col-span-3 text-start md:text-center">
        {isFav
          ? "რჩეულები"
          : isVip
          ? "VIP განცხადებები"
          : "სტანდარტული განცხადებები"}
      </p>
      <p className="lg:col-span-2 text-end md:text-center">მომწოდებელი</p>
      <p className="hidden lg:block">გამოქვეყნდა</p>
      <p className="hidden lg:block">ბოლო ვადა</p>
    </header>
  );
};

export default JobHeader;
