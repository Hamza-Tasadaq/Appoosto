import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { OrderStatusCard, OrderStatusTab } from "../../components";

const OrderStatus = () => {
  const { orderStatus } = useSelector((state) => state.orderStatus);

  const NotDelivered = orderStatus.filter(
    ({ status }) => status === "Prepration"
  );
  const Delivered = orderStatus.filter(({ status }) => status === "Delivered");

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
      {orderStatus.length > 0 ? (
        <div>
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
                {orderStatus.map(
                  ({ id, imgSrc, title, desc, price, status, time }) => (
                    <OrderStatusCard
                      key={id}
                      imgSrc={imgSrc}
                      title={title}
                      desc={desc}
                      price={price}
                      status={status}
                      time={time}
                    />
                  )
                )}
              </div>
            )}

            {selectedTab.delivered && (
              <div className="space-y-4">
                {Delivered.map(
                  ({ id, imgSrc, title, desc, price, status, time }) => (
                    <OrderStatusCard
                      key={id}
                      imgSrc={imgSrc}
                      title={title}
                      desc={desc}
                      price={price}
                      status={status}
                      time={time}
                    />
                  )
                )}
              </div>
            )}
            {selectedTab.notDelivered && (
              <div className="space-y-4">
                {NotDelivered.map(
                  ({ id, imgSrc, title, desc, price, status, time }) => (
                    <OrderStatusCard
                      key={id}
                      imgSrc={imgSrc}
                      title={title}
                      desc={desc}
                      price={price}
                      status={status}
                      time={time}
                    />
                  )
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen max-h-full bg-black p-10 flex flex-col justify-between items-center">
          <div className="text-White text-center space-y-4">
            <img src="./assets/empty.png" alt="empty" />
            <h1 className="font-bold text-base">Your order status is empty!</h1>

            <p className="max-w-[255px] font-medium">
              Make an order and see how it will be processed
            </p>
          </div>

          <Link
            className="text-White bg-Vivid-Red-Tangelo rounded-xl py-4 px-10"
            to="/menu"
          >
            visit order page
          </Link>
        </div>
      )}
    </>
  );
};

export default OrderStatus;
