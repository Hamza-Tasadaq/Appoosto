import Input from "./Input";
import WhatsAppBtn from "./WhatsAppBtn";

const BookTableForm = () => { 
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
      <div className="w-full p-5  my-1 md:my-2 flex items-center flex-1 justify-between  bg-Platinum outline-none rounded-lg">
        <input
          className="bg-transparent w-full outline-none "
          placeholder="Time"
        />
        <img src="./assets/arrow-down.svg" alt="arrow-down" />
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
