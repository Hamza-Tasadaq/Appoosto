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
    <div>
      <div className="mx-4  p-4 md:p-0 md-p-0 md:mx-0 mb-24 md:mb-4 md:my-4 bg-White md:bg-transparent rounded-lg shadow-lg md:shadow-none">
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

        <div className="space-y-2 md:my-4">
          <input
            className="w-full py-3 px-4 rounded-lg outline-none bg-Flash-White text-xs md:bg-White"
            placeholder="Name on card"
          />

          <div className="w-full py-3 px-4 rounded-lg outline-none bg-Flash-White md:bg-White flex flex-row md:flex-col lg:flex-row items-center">
            <img src="./assets/credit-card.svg" alt="credit-card" />
            <div className="flex flex-row md:flex-col lg:flex-row items-center text-xs justify-between flex-1">
              <input
                className="bg-transparent outline-none w-20 md:w-28 ml-2 md:my-1 lg:my-0 md:ml-0 lg:ml-2"
                placeholder="Card number"
              />
              <div>
                <input
                  className="bg-transparent outline-none max-w-[70px] mr-2 md:my-1 lg:my-0  border-r md:border-none lg:border-r border-Spanish-Gray"
                  placeholder="MM/AA"
                />
                <input
                  className="bg-transparent outline-none max-w-[40px] ml-2 md:my-1 md:ml-0 lg:ml-0 lg:my-0"
                  placeholder="CVC"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block bg-Spanish-Gray h-px max-w-[242px] mx-auto opacity-20 my-4" />
      </div>

      <div className="fixed bottom-0 left-0 right-0 md:static  p-4 md:p-0 md-p-0 md:mx-0 z-50 md:mb-4 md:my-4 bg-White md:bg-transparent rounded-lg shadow-lg justify-between md:shadow-none flex flex-row md:flex-col">
        <div className="font-semibold text-xs flex md:flex-row flex-col md:items-center md:my-4 justify-between">
          <h2>TOTAL</h2>
          <h1 className="font-bold text-lg mt-2 md:mt-0">23.00€</h1>
        </div>
        <p className="hidden md:block bg-Pastel-Violet text-Pastel-Violet font-semibold p-4 text-xs bg-opacity-20 rounded-lg">
          Your booking will be sent to restaurant name with whatsapp and you
          will receive status notifications in chat.
        </p>
        <button className="bg-Vivid-Red-Tangelo rounded-lg text-White font-semibold px-8 md:hidden text-sm">
          Order Now
        </button>
      </div>
      <div className="hidden md:block">
        <WhatsAppBtn text="Order Now" />
      </div>
    </div>
  );
};

export default Payment;
