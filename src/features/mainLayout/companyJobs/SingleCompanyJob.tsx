import { Link } from "react-router-dom";

type SingleCompanyJobTypes = {
  company: {
    companyLogo: string;
  };
};

const SingleCompanyJob = ({
  company: { companyLogo },
}: SingleCompanyJobTypes) => {
  return (
    <li className="w-40 h-40 border flex gap-2 flex-col p-5 justify-center group cursor-pointer">
      <img
        src={companyLogo}
        alt="company logo"
        className="w-[120px] h-auto"
        loading="lazy"
      />
      <p className="text-[10px] text-center text-primary font-bold group-hover:text-gray-500">
        <Link to="/">ყველა ვაკანსია ერთ გვერდზე</Link>
      </p>
    </li>
  );
};

export default SingleCompanyJob;
