const VipJobsHeader = () => {
  return (
    <div className="grid grid-cols-7 text-[14px] font-semibold
     p-2 hover:bg-gray-100 transition-all ease-in duration-150">
      <p className="col-span-3">VIP განცხადებები</p>
      <p className="col-span-2">მომწოდებელი</p>
      <p>გამოქვეყნდა</p>
      <p>ბოლო ვადა</p>
    </div>
  );
};

export default VipJobsHeader;
