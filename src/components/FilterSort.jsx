import { HiOutlineFilter } from "react-icons/hi";
import { BsSortDownAlt } from "react-icons/bs";

const FilterSort = () => {
  return (
    <div className="flex justify-between items-center mx-4 gap-3 text-center">
      <div className="flex justify-between bg-stone-50 rounded-md p-2 w-44 h-11 font-medium text-slate-800">
        <BsSortDownAlt className="w-6 h-6 fill-orange-600" />{" "}
        <span className="text-sm ">محبوب ترین محصول</span>
      </div>
      <div className="flex items-center justify-center gap-4  bg-stone-50 rounded-md p-2<HiOutlineFilter /> w-44 h-11 font-medium text-slate-800">
        <HiOutlineFilter className="w-6 h-6 stroke-gray-300" />
        <span>فیلتر: برند اپل</span>
      </div>
    </div>
  );
};

export default FilterSort;
