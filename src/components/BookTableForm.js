import Input from "./Input";

const BookTableForm = () => {
  return (
    <div className="px-10 py-14 flex-1">
      <Input placeholder="Name" />
      <div className="flex space-x-3">
        <div className="w-full p-5 my-2 flex items-center flex-1 justify-between  bg-Platinum outline-none rounded-lg">
          <input
            className="bg-transparent w-full outline-none "
            placeholder="Date/Time"
          />
          <img src="./assets/calendar.svg" alt="calendar" />
        </div>
        <Input placeholder="Persons" />
      </div>
      <textarea
        className="w-full p-5 my-2 bg-Platinum outline-none rounded-lg"
        rows={8}
        placeholder="note"
      />
      <p className="text-xs text-Pastel-Violet md:text-Black font-semibold bg-Pastel-Violet bg-opacity-20 p-3 rounded-lg md:bg-transparent md:text-sm md:p-0 md:font-medium">
        Your booking will be sent to(restaurant name) with WhatsApp and you will
        receive status notifications in chat.
      </p>
      <button className="flex items-center justify-center bg-Yale-Blue md:bg-Apple w-full py-3 md:py-4 rounded-lg text-White font-medium text-xs md:text-base my-5 md:my-7 duration-500 hover:scale-x-100">
        <img className="mr-3" src="./assets/whatsapp.svg" alt="whatsapp" />
        Send Booking with Whatsapp
      </button>
    </div>
  );
};

export default BookTableForm;
