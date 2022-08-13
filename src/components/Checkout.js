import { useState } from "react";
import Payment from "./Payment";

const Checkout = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const dropDownClickHandle = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <div>
      <h1 className="text-center font-bold text-lg">Checkout</h1>
      <div className="bg-Spanish-Gray h-px max-w-[242px] mx-auto opacity-20 my-2" />

      <h2 className="opacity-50 font-semibold text-xs">Pickup time</h2>
      <div>
        <div
          onClick={dropDownClickHandle}
          className="bg-White px-5 mt-3 mb-1 py-4 rounded-lg flex items-center justify-between cursor-pointer"
        >
          <h3 className="font-semibold text-xs">Time</h3>
          <img src="./assets/arrow-down.svg" alt="arrow-down" />
        </div>
        <div
          className={`px-5 py-4 shadow-lg	 bg-white space-y-2 transition-all	 duration-500 ${
            showDropDown ? " block	" : " hidden"
          } `}
        >
          <h3
            onClick={dropDownClickHandle}
            className="p-2 cursor-pointer opacity-50 rounded-lg hover:bg-Chinese-Silver"
          >
            1
          </h3>
          <h3
            onClick={dropDownClickHandle}
            className="p-2 cursor-pointer opacity-50 rounded-lg hover:bg-Chinese-Silver"
          >
            2
          </h3>
        </div>
      </div>

      <div className="bg-Spanish-Gray h-px max-w-[242px] mx-auto opacity-20 my-4" />

      <Payment />
    </div>
  );
};

export default Checkout;
