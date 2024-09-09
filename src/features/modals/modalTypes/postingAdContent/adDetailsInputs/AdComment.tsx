const AdComment = () => {
  return (
    <div>
      <textarea
        placeholder="კომენტარი"
        className="px-2 py-3 w-full outline-none border 
      text-black
      border-gray-400 bg-gray-300 rounded-md
      focus:border-primary focus:bg-white transition-all ease-in duration-150"
      />
    </div>
  );
};

export default AdComment;
