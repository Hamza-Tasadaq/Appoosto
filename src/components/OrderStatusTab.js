import React from "react";

const OrderStatusTab = ({ tabClickHandler = () => {}, selectedTab = "" }) => {
  return (
    <div className="flex  overflow-x-auto items-center noScrollBar space-x-4  px-5 py-3 md:p-0">
      <h1
        onClick={() => {
          tabClickHandler("total");
        }}
        className={` px-5 rounded-md text-sm duration-300 font-medium py-2 w-auto flex items-center justify-center  text-center ${
          selectedTab.total
            ? "text-White bg-Vivid-Red-Tangelo md:bg-Medium-Electric-Blue"
            : " bg-transparent md:bg-Medium-Electric-Blue md:bg-opacity-40  md:text-Medium-Electric-Blue text-black "
        }`}
      >
        Total
      </h1>
      <h1
        onClick={() => {
          tabClickHandler("notDelivered");
        }}
        className={` px-2 rounded-md min-w-[120px] text-sm duration-300 font-medium py-2 w-36 flex items-center justify-center ${
          selectedTab.notDelivered
            ? "text-White bg-Vivid-Red-Tangelo md:bg-Medium-Electric-Blue"
            : " bg-transparent md:bg-Medium-Electric-Blue md:bg-opacity-40  md:text-Medium-Electric-Blue text-black "
        }`}
      >
        Not Delivered
      </h1>
      <h1
        onClick={() => {
          tabClickHandler("delivered");
        }}
        className={` px-5 rounded-md text-sm duration-300 font-medium py-2 w-auto flex items-center justify-center ${
          selectedTab.delivered
            ? "text-White bg-Vivid-Red-Tangelo md:bg-Medium-Electric-Blue"
            : " bg-transparent md:bg-Medium-Electric-Blue md:bg-opacity-40  md:text-Medium-Electric-Blue text-black "
        }`}
      >
        Delivered
      </h1>
    </div>
  );
};

export default OrderStatusTab;
