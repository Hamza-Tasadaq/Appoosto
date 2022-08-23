import { useState } from "react";
import { Link } from "react-router-dom";
import { OrderStatusCard, OrderStatusTab } from "../../components";

const OrderStatus = () => {
  const [selectedTab, setSelectedTab] = useState({
    total: true,
    delivered: false,
    notDelivered: false,
  });

  const tabClickHandler = (tab) => {
    setSelectedTab({
      total: false,
      delivered: false,
      notDelivered: false,
      [tab]: true,
    });
  };

  return (
    <>
      <div className="bg-White md:bg-Flash-White sticky z-50 md:static left-0 right-0 top-0 shadow-xl md:shadow-none rounded-b-2xl md:bg-transparent md:rounded-none">
        <div className="flex p-5 md:p-0 md:m-0 md:mb-5 items-center md:justify-center">
          <Link to={"/menu"}>
            <img
              className="block md:hidden"
              src="./assets/arrowback-black.svg"
              alt="arrowback"
            />
          </Link>
          <h1 className="font-semibold ml-5">Order Status</h1>
        </div>
        <OrderStatusTab
          tabClickHandler={tabClickHandler}
          selectedTab={selectedTab}
        />
      </div>
      <div className="mx-2 my-5 space-y-4">
        {selectedTab.total && (
          <div className="space-y-4">
            <OrderStatusCard status={"Prepration"} />
            <OrderStatusCard status={"Delivered"} />
          </div>
        )}

        {selectedTab.delivered && (
          <div className="space-y-4">
            <OrderStatusCard status={"Delivered"} />
          </div>
        )}
        {selectedTab.notDelivered && (
          <div className="space-y-4">
            <OrderStatusCard status={"Prepration"} />
          </div>
        )}
      </div>
    </>
  );
};

export default OrderStatus;
