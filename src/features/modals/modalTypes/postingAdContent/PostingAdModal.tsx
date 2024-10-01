import PostingAdForm from "./PostingAdForm";
import logo from "/logo/logo-no-background.svg";
import { useAppDispatch } from "../../../../hooks";
import { setPostingAd } from "../../../../slices/modalsSlice/modalsSlice";
import MarkdownHelper from "../../../../ui/MarkdownHelper";

const PostingAdModal = () => {
  const dispatch = useAppDispatch();
  const handleCloseModal = () => {
    dispatch(setPostingAd(false));
  };

  return (
    <div className="flex flex-col items-center w-[70rem] max-w-[95vw] mx-auto group">
      <img src={logo} alt="logo" className="max-w-[15rem] h-auto my-5" />
      <div className="bg-gray-200 w-full p-5 rounded-md relative">
        <div
          className="border-b-8 border-primary absolute
         bottom-0 left-0 right-0 rounded-br-lg rounded-bl-lg "
        ></div>
        <div className="flex items-center justify-between">
          <span>&nbsp;</span>
          <h1 className="text-[1.5rem] font-medium text-center">
            განცხადების განთავსება
          </h1>
          <div
            onClick={handleCloseModal}
            className="cursor-pointer group/button relative w-5 h-5"
          >
            <div className="absolute w-1 h-5 inset-0 bg-black -rotate-45 transition-all ease-in duration-150 group-hover/button:-rotate-90"></div>
            <div className="absolute w-1 h-5 inset-0 bg-black rotate-45 transition-all ease-in duration-150 group-hover/button:rotate-90"></div>
          </div>
        </div>
        <hr />
        <PostingAdForm />
      </div>
      <MarkdownHelper />
    </div>
  );
};

export default PostingAdModal;
