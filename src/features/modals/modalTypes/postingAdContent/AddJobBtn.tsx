type AddJobBtnTypes = {
  uploading: boolean;
};

const AddJobBtn = ({ uploading }: AddJobBtnTypes) => {
  return (
    <button
      type="submit"
      disabled={uploading}
      className={`w-full  ${uploading ? "cursor-not-allowed" : "cursor-pointer"}
       bg-primary border border-transparent p-4 
       text-white font-semibold rounded-md tracking-wider mt-5
       hover:bg-white hover:text-primary hover:border-primary`}
    >
      გაგზავნა
    </button>
  );
};

export default AddJobBtn;
