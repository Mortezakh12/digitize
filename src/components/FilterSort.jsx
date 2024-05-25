import { HiOutlineFilter } from "react-icons/hi";
import { BsSortDownAlt } from "react-icons/bs";

const FilterSort = () => {
  return (
    <div className="flex md:hidden justify-between items-center mx-4 gap-3 text-center mb-9 ">
      <div className="flex item-start  bg-stone-50 rounded-md p-2  h-11 font-medium text-slate-800 w-full">
        <BsSortDownAlt className="w-6 h-6 fill-orange-600" />{" "}
        <span className="text-sm  ">محبوب ترین محصول</span>
      </div>
      <div className="flex items-center justify-start gap-4  bg-stone-50 rounded-md p-2<HiOutlineFilter /> w-full h-11 font-medium text-slate-800">
        <HiOutlineFilter className="w-6 h-6 stroke-gray-300" />
        <span>فیلتر: برند اپل</span>
      </div>
    </div>
  );
};

export default FilterSort;
