import { useState } from "react";
import { BiCheck } from "react-icons/bi";
const initialValueTicketCircle = [
  {
    id: 1,
    className:
      "w-6 h-6 rounded-full border-2 cursor-pointer border-white bg-blue-400",
  },
  {
    id: 2,
    className:
      "w-6 h-6 rounded-full border-2 cursor-pointer border-white bg-green-400 -mr-1.5",
  },
  {
    id: 3,
    className:
      "w-6 h-6 rounded-full border-2 cursor-pointer border-white bg-red-400 -mr-1.5",
  },
];
const Product = () => {
  const [isTickCircleShow, setIsTickCircleShow] = useState(1);
  const handlClick = (id) => {
    setIsTickCircleShow(id);
  };
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 ">
      <div className="bg-stone-50 rounded-xl shadow-md p-2">
        <div className="mb-3 bg-slate-200 rounded-xl p-2">
          <img
            className=""
            src=".././../public/img/apple-seri-6.png"
            alt="apple-whatch-serie-6"
          />
        </div>
        {/* product description */}
        <div className="flex items-center justify-between w-full mb-4">
          <span className="text-slate-200 text-sm md:text-base">اپل</span>
          <div className="flex items-center">
            {/* <BiCheck className="h-5 w-5 fill-stone-300" /> */}
            {initialValueTicketCircle.map((item) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div
                  onClick={() => handlClick(item.id)}
                  key={item.id}
                  className={item.className}
                >
                  <BiCheck
                    className={
                      isTickCircleShow === item.id
                        ? "h-5 w-5 fill-stone-300 ring-2 ring-stone-200 rounded-full"
                        : "hidden"
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* product title */}
        <div className="text-slate-800 text-xs font-bold mb-2 md:text-base">
          ساعت هوشمند اپل سری 6
        </div>
        <div className="text-orange-600 font-medium text-center text-sm mb-3">
          12،500،000 تومان
        </div>
        <hr />
        <button className="w-full font-bold text-orange-600 py-1 md:text-lg">
          مشاهده و سفارش
        </button>
      </div>
      <div className="bg-blue-100">2</div>
      <div className="bg-blue-100">3</div>
      <div className="bg-blue-100">4</div>
      <div className="bg-blue-100">5</div>
      <div className="bg-blue-100">6</div>
      <div className="bg-blue-100">7</div>
      <div className="bg-blue-100">8</div>
      <div className="bg-blue-100">9</div>
      <div className="bg-blue-100">10</div>
    </div>
  );
};

export default Product;
