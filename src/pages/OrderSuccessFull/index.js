import React from "react";
import { Link } from "react-router-dom";

const OrderSuccessFull = () => {
  return (
    <div className="bg-Black min-h-screen p-10 flex flex-col items-center justify-between">
      <div>
        <img src="./assets/order-success.png" alt="order-success" />
        <div className="text-White font-medium text-lg max-w-[255px] mx-auto text-center">
          <h2>Your order is started!</h2>
          <h2 className="mt-1">Rememeber your PIN: <span className="font-bold">1234</span> to check your order status</h2>
        </div>
      </div>

      <Link
        className="text-White bg-Vivid-Red-Tangelo rounded-xl py-4 px-10"
        to="/orderstatus"
      >
        visit order status page
      </Link>
    </div>
  );
};

export default OrderSuccessFull;
