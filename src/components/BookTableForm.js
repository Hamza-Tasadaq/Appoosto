import { useState } from "react";
import Input from "./Input";
import WhatsAppBtn from "./WhatsAppBtn";

const BookTableForm = () => {
  const [isTimeDropDownOpen, setIsTimeDropDownOpen] = useState(true);

  const handleTimeDropDownOpen = () => {
    setIsTimeDropDownOpen(!isTimeDropDownOpen);
  };
  return (
    <div className="px-3 md:px-10 md:py-14 flex-1">
      <h1 className="text-center my-3 text-sm font-bold md:hidden">
        Book a Table
      </h1>
      <Input placeholder="Name" />
      <div className="flex space-x-3">
        <div className="w-full p-3 md:p-5  my-1 md:my-2 flex items-center flex-1 justify-between  bg-Platinum outline-none rounded-lg">
          <input
            className="bg-transparent w-full outline-none "
            placeholder="Date"
          />
          <img src="./assets/calendar.svg" alt="calendar" />
        </div>
        <Input placeholder="Guests" />
      </div>
      <div className="relative">
        <div
          onClick={handleTimeDropDownOpen}
          className="w-full p-5  my-1 md:my-2 flex items-center flex-1 justify-between  bg-Platinum outline-none rounded-lg"
        >
          <p className="text-Black opacity-50">Time</p>
          <img src="./assets/arrow-down.svg" alt="arrow-down" />
        </div>
        <div
          className={`px-5 py-4 shadow-lg	 bg-Platinum space-y-2 transition-all overflow-hidden rounded-lg absolute top-16	left-0 right-0 z-50 duration-500 ${
            isTimeDropDownOpen ? " block	" : " hidden"
          } `}
        >
          <h3
            onClick={handleTimeDropDownOpen}
            className="p-2 cursor-pointer opacity-50 rounded-lg hover:bg-White"
          >
            11:00 - 12:30
          </h3>
          <h3
            onClick={handleTimeDropDownOpen}
            className="p-2 cursor-pointer opacity-50 rounded-lg hover:bg-White"
          >
            12:0 - 14:00
          </h3>
        </div>
      </div>
      <textarea
        className="w-full p-5 my-1 md:my-2 h-40 md:h-[232px] bg-Platinum outline-none rounded-lg"
        rows={5}
        placeholder="note"
      />
      <p className="text-xs text-Pastel-Violet font-semibold bg-Pastel-Violet bg-opacity-20 p-3 rounded-lg md:text-sm md:font-medium">
        Your booking will be sent to(restaurant name) with WhatsApp and you will
        receive status notifications in chat.
      </p>
      <WhatsAppBtn text="Send Booking with Whatsapp" />
    </div>
  );
};

export default BookTableForm;
