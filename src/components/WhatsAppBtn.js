import React from "react";

const WhatsAppBtn = ({
  text = "",
  type = "",
  validateMessage = () => {},
}) => {
  return (
    <button
      onClick={validateMessage}
      type={type}
      className="flex items-center justify-center bg-Yale-Blue w-full py-3 md:py-4 rounded-lg text-White font-medium text-xs md:text-base my-5 duration-500 hover:scale-x-100"
    >
      <img className="mr-3" src="./assets/whatsapp.svg" alt="whatsapp" />
      {text}
    </button>
  );
};

export default WhatsAppBtn;
