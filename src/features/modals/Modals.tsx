import { useAppSelector } from "../../hooks";
import PostingAdModal from "./modalTypes/postingAdContent/PostingAdModal";

const Modals = () => {
  const { postingAd } = useAppSelector((store) => store.modals);
  const isAnyModalOpen = postingAd;
  if (!isAnyModalOpen) return null;
  return (
    <div className="fixed inset-0 overflow-scroll z-[999999999]">
      <div
        className={`fixed inset-0 ${
          postingAd ? "bg-white opacity-100" : "bg-black opacity-60"
        } z-[-1]`}
      ></div>
      {postingAd && <PostingAdModal />}
    </div>
  );
};

export default Modals;
