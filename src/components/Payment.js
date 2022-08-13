import { useState } from "react";
import WhatsAppBtn from "./WhatsAppBtn";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState({
    cash: true,
    card: false,
  });

  const handlePaymentSelect = (method) => {
    setSelectedMethod({
      cash: false,
      card: false,
      [method]: true,
    });
  };
  return (
    <div className="mx-4 p-4 md:p-0 md-p-0 md:mx-0 mb-4 md:my-4 bg-White md:bg-transparent rounded-lg shadow-lg md:shadow-none">
      <div className="md:hidden">
        <h2 className="opacity-30 py-2 border-b border-Spanish-Gray">
          Payment
        </h2>
      </div>

      <div className="pt-4 md:py-0 space-y-1 ">
        <div
          onClick={() => {
            handlePaymentSelect("cash");
          }}
          className="flex items-center cursor-pointer"
        >
          <div
            className={`${
              selectedMethod.cash
                ? "  border-Medium-Electric-Blue md:border-Vivid-Red-Tangelo "
                : " border-Spanish-Gray"
            } rounded-full border-2 w-5 h-5 flex items-center justify-center`}
          >
            <div
              className={`${
                selectedMethod.cash
                  ? " w-3 h-3 bg-Medium-Electric-Blue md:bg-Vivid-Red-Tangelo "
                  : " bg-transparent"
              } rounded-full`}
            />
          </div>
          <h3 className="font-semibold ml-3">Cash/Card to terminal</h3>
        </div>
        <div
          onClick={() => {
            handlePaymentSelect("card");
          }}
          className="flex items-center cursor-pointer"
        >
          <div
            className={`${
              selectedMethod.card
                ? "  border-Medium-Electric-Blue md:border-Vivid-Red-Tangelo "
                : " border-Spanish-Gray"
            } rounded-full border-2 w-5 h-5 flex items-center justify-center`}
          >
            <div
              className={`${
                selectedMethod.card
                  ? " w-3 h-3 bg-Medium-Electric-Blue md:bg-Vivid-Red-Tangelo "
                  : " bg-transparent"
              } rounded-full`}
            />
          </div>
          <h3 className="font-semibold ml-3">Pay now with card</h3>
        </div>
      </div>

      
      <div className="md:hidden bg-Spanish-Gray h-px max-w-[242px] mx-auto opacity-20 my-4" />

      <div className="space-y-2 my-4">
        <input
          className="w-full py-3 px-4 rounded-lg outline-none bg-Flash-White text-xs md:bg-White"
          placeholder="Name on card"
        />

        <div className="w-full py-3 px-4 rounded-lg outline-none bg-Flash-White md:bg-White flex items-center">
          <img src="./assets/credit-card.svg" alt="credit-card" />
          <div className="flex items-center text-xs justify-between flex-1">
            <input
              className="bg-transparent outline-none w-28 ml-2"
              placeholder="Card number"
            />
            <div>
              <input
                className="bg-transparent outline-none max-w-[70px] mr-2 border-r border-Spanish-Gray"
                placeholder="MM/AA"
              />
              <input
                className="bg-transparent outline-none max-w-[40px] ml-2"
                placeholder="CVC"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-Spanish-Gray h-px max-w-[242px] mx-auto opacity-20 my-4" />

      <WhatsAppBtn text="Order Now" />
    </div>
  );
};

export default Payment;
