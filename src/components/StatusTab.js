import { useState } from "react";
import { useSelector } from "react-redux";
import OrderStatusCard from "./OrderStatusCard";
import OrderStatusTab from "./OrderStatusTab";

const StatusTab = () => {
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
    <div>
      <OrderStatusTab
        tabClickHandler={tabClickHandler}
        selectedTab={selectedTab}
      />

      <div className="my-5 space-y-4">
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
  );
};

export default StatusTab;
