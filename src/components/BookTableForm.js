import { useState } from "react";
import DatePicker from "react-datepicker";
import Input from "./Input";
import WhatsAppBtn from "./WhatsAppBtn";

import "react-datepicker/dist/react-datepicker.css";

const BookTableForm = () => {
  const [formData, setFormData] = useState({
    name: undefined,
    date: undefined,
    guests: undefined,
    time: undefined,
    note: undefined,
  });

  const [whatsAppMsg, setWhatsAppMsg] = useState(undefined);
  const [isTimeDropDownOpen, setIsTimeDropDownOpen] = useState(false);

  const [showError, setShowError] = useState(false);

  const handleTimeDropDownOpen = (time = "") => {
    setFormData({
      ...formData,
      time,
    });
    setIsTimeDropDownOpen(!isTimeDropDownOpen);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (showError) {
      setShowError(!showError);
    }

    setWhatsAppMsg(
      `I am mr ${
        formData.name
      } and would like to book a table on ${formData?.date?.toLocaleDateString()} at ${
        formData.time
      }. We will be ${formData.guests} persons. ${formData.note}`
    );
  };

  const validateMessage = () => {
    if (formData.name && formData.date && formData.guests && formData.time) {
      console.log("theek ha");
      window.location.href = `https://wa.me/+393887951165?text=${whatsAppMsg}`;
    } else {
      setShowError(!showError);
    }
  };

  return (
    <div className="px-3 md:px-10 md:py-14 flex-1">
      <h1 className="text-center my-3 text-sm font-bold md:hidden">
        Book a Table
      </h1>
      <Input
        changeHandler={(e) => {
          changeHandler(e);
        }}
        name={"name"}
        value={formData.name}
        placeholder="Name"
      />
      <div className="flex space-x-3">
        <div className="w-full p-3 md:p-5 z-40  my-1 md:my-2 flex items-center flex-1 justify-between  bg-Platinum outline-none rounded-lg">
          <DatePicker
            wrapperClassName="datePicker"
            selected={formData.date}
            onChange={(date) => setFormData({ ...formData, date })}
            placeholderText="Date"
            dateFormat="dd/MM/yyyy"
            onFocus={(e) => e.target.blur()}
          />

          <img src="./assets/calendar.svg" alt="calendar" />
        </div>
        <Input
          changeHandler={(e) => {
            changeHandler(e);
          }}
          name={"guests"}
          value={formData.guests}
          type="number"
          placeholder="Guests"
        />
      </div>
      <div className="relative">
        <div
          onClick={() => {
            handleTimeDropDownOpen(null);
          }}
          className="w-full p-3 md:p-5  my-1 md:my-2 flex items-center flex-1 justify-between  bg-Platinum outline-none rounded-lg"
        >
          <p className="text-Black opacity-50">
            {formData.time ? formData.time : "Time"}
          </p>
          <img src="./assets/arrow-down.svg" alt="arrow-down" />
        </div>
        <div
          className={`px-5 py-4 shadow-lg	 bg-Platinum space-y-2 transition-all overflow-hidden rounded-lg absolute top-16	left-0 right-0 z-40 duration-500 ${
            isTimeDropDownOpen ? " block	" : " hidden"
          } `}
        >
          <h3
            onClick={() => handleTimeDropDownOpen("11:00 - 12:30")}
            className="p-2 cursor-pointer opacity-50 rounded-lg hover:bg-White"
          >
            11:00 - 12:30
          </h3>
          <h3
            onClick={() => handleTimeDropDownOpen("12:0 - 14:00")}
            className="p-2 cursor-pointer opacity-50 rounded-lg hover:bg-White"
          >
            12:0 - 14:00
          </h3>
        </div>
      </div>
      <textarea
        value={formData.note}
        onChange={(e) => {
          changeHandler(e);
        }}
        name="note"
        className="w-full p-5 my-1 md:my-2 h-40 md:h-[232px] bg-Platinum outline-none rounded-lg"
        rows={5}
        placeholder="note"
      />
      <p className="text-xs text-Pastel-Violet font-semibold bg-Pastel-Violet bg-opacity-20 p-3 rounded-lg md:text-sm md:font-medium">
        Your booking will be sent to(restaurant name) with WhatsApp and you will
        receive status notifications in chat.
      </p>
      {showError && (
        <p className="rounded-lg mt-6 duration-300 text-[#D8000C] bg-[#FFBABA] bg-opacity-50 p-2">
          Please Fill All The Fields
        </p>
      )}
      <WhatsAppBtn
        validateMessage={validateMessage}
        type="submit"
        text="Send Booking with Whatsapp"
      />
    </div>
  );
};

export default BookTableForm;
