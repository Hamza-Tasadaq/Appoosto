import { useState } from "react";
import OrderStatusCard from "./OrderStatusCard";
import OrderStatusTab from "./OrderStatusTab";

const StatusTab = () => {
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
    </div>
  );
};

export default StatusTab;
