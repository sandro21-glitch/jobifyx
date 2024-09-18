import PostingAdForm from "./PostingAdForm";
import logo from "/logo/logo-no-background.svg";

const PostingAdModal = () => {
  return (
    <div className="flex flex-col items-center w-[70rem] max-w-[95vw] mx-auto">
      <img src={logo} alt="logo" className="max-w-[15rem] h-auto my-5" />
      <div className="bg-gray-200 w-full p-5 rounded-md relative">
        <div
          className="border-b-8 border-primary absolute
         bottom-0 left-0 right-0 rounded-br-lg rounded-bl-lg "
        ></div>
        <h1 className="text-[1.5rem] font-medium text-center">
          განცხადების განთავსება
        </h1>
        <hr />
        <PostingAdForm />
      </div>
    </div>
  );
};

export default PostingAdModal;
