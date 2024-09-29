import { IoArrowUndoSharp } from "react-icons/io5"


const AllVacancyBtn = () => {
  return (
    <div className="flex items-center gap-1 cursor-pointer mb-5">
        <IoArrowUndoSharp className="text-primary text-[12px]" />
        <p className="text-primary text-[12px] font-semibold italic">
          ყველა ვაკანსია
        </p>
      </div>
  )
}

export default AllVacancyBtn