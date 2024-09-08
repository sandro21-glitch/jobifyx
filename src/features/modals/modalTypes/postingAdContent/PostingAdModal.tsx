import AdDetailsInputs from "./adDetailsInputs/AdDetailsInputs";
import CompanyInfo from "./companyInfoInputs/CompanyInfo";
import logo from "/logo/logo-no-background.svg";

const PostingAdModal = () => {
  return (
    <div className="flex flex-col items-center min-h-full  max-w-[40rem] mx-auto my-20">
      <img src={logo} alt="logo" className="max-w-[20rem] h-auto mb-5" />
      <div className="bg-gray-200 w-full p-5 rounded-md">
        <h1 className="text-[1.5rem] font-medium text-center">
          განცხადების განთავსება
        </h1>
        <hr />
        <form>
          <CompanyInfo />
          <AdDetailsInputs />
        </form>
      </div>
    </div>
  );
};

export default PostingAdModal;
