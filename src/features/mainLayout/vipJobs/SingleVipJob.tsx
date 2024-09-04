import VipJobCompany from "./singleVipJobActions/VipJobCompany";
import VipJobDeadline from "./singleVipJobActions/VipJobDeadline";
import VipJobLink from "./singleVipJobActions/VipJobLink";
import VipJobPublishDate from "./singleVipJobActions/VipJobPublishDate";

const SingleVipJob = () => {
  return (
    <ul
      className="grid grid-cols-7 text-[12px] font-semibold text-primary
  py-2 px-5 hover:bg-gray-100 transition-all ease-in duration-150 border-b"
    >
      <VipJobLink />
      <VipJobCompany />
      <VipJobPublishDate />
      <VipJobDeadline />
    </ul>
  );
};

export default SingleVipJob;
