import { useState } from "react";
import {
  Cart,
  Category,
  Checkout,
  DashboardHeaderDesktop,
  Menu,
  ProductDetails,
} from "../../components";
import ModalWrapper from "../../components/ModalWrapper";

const Dashboard = () => {
  return (
    <div className="relative bg-Flash-White h-screen ">
      <DashboardHeaderDesktop />
      <div className="mt-3 px-2 flex max-h-dashboard">
        <div className="w-4/12 lg:w-1/4 h-full overflow-auto  noScrollBar mx-2">
          <Cart />
        </div>
        <div className="w-[46.50%] lg:w-1/2 mx-2 bg-White rounded-t-lg p-4">
          <div className="h-2/5">
            <Category />
          </div>
          <div className="h-3/5 overflow-auto noScrollBar">
            <Menu />
          </div>
        </div>
        <div className="w-1/5	 lg:w-1/4 mx-2">
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
