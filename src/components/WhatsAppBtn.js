import React from "react";

const WhatsAppBtn = ({ text = "", type = "", whatsAppMsg = "" }) => {
  return (
    <a
      href={`https://wa.me/+393887951165?text=${whatsAppMsg}`}
      target="blank"
      type={type}
      className="flex items-center justify-center bg-Yale-Blue w-full py-3 md:py-4 rounded-lg text-White font-medium text-xs md:text-base my-5 md:my-7 duration-500 hover:scale-x-100"
    >
      <img className="mr-3" src="./assets/whatsapp.svg" alt="whatsapp" />
      {text}
    </a>
  );
};

export default WhatsAppBtn;
