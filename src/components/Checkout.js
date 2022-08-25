import { useState } from "react";
import { useSelector } from "react-redux";
import Payment from "./Payment";

const Checkout = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const { selectedOption } = useSelector((state) => state.grid);

  const dropDownClickHandle = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <div className="bg-White min-h-full rounded-lg p-2">
      <h1 className="text-center font-bold text-lg">Checkout</h1>

      {selectedOption === "Delivery" || selectedOption === "Take Away" ? (
        <div className="my-4">
          <div className="my-2">
            <h3 className="font-semibold text-xs">Name</h3>
            <input className="bg-Light-Silver bg-opacity-50 my-1 rounded-lg w-full p-2 outline-none" />
          </div>
          <div className="my-2">
            <h3 className="font-semibold text-xs">Delivery address</h3>
            <input className="bg-Light-Silver bg-opacity-50 my-1 rounded-lg w-full p-2 outline-none" />
          </div>
        </div>
      ) : (
        <div className="hidden md:block bg-Spanish-Gray h-px max-w-[242px] mx-auto opacity-20 my-4" />
      )}
      {selectedOption && <Payment />}
    </div>
  );
};

export default Checkout;

// <h2 className="opacity-50 font-semibold text-xs">Pickup time</h2>
// <div>
//   <div
//     onClick={dropDownClickHandle}
//     className="bg-Light-Silver bg-opacity-50 px-5 mt-3 mb-1 py-4 rounded-lg flex items-center justify-between cursor-pointer"
//   >
//     <h3 className="font-semibold text-xs">Time</h3>
//     <img src="./assets/arrow-down.svg" alt="arrow-down" />
//   </div>
//   <div
//     className={`px-5 py-4 shadow-lg	 bg-Light-Silver bg-opacity-50 space-y-2 transition-all	 duration-500 ${
//       showDropDown ? " block	" : " hidden"
//     } `}
//   >
//     <h3
//       onClick={dropDownClickHandle}
//       className="p-2 cursor-pointer opacity-50 rounded-lg hover:bg-Chinese-Silver"
//     >
//       11:00 - 12:30
//     </h3>
//     <h3
//       onClick={dropDownClickHandle}
//       className="p-2 cursor-pointer opacity-50 rounded-lg hover:bg-Chinese-Silver"
//     >
//       12:0 - 14:00
//     </h3>
//   </div>
// </div>
