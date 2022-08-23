import { Link } from "react-router-dom";

const DashboardHeaderPhone = ({
  prevHref = "",
  heading = "",
  selectedType = "",
  isSamll = false,
}) => {
  return (
    <div className="bg-White md:bg-Flash-White sticky z-50 md:static left-0 right-0 top-0 shadow-xl md:shadow-none rounded-b-2xl md:bg-transparent md:rounded-none">
      <div
        className={`flex p-5 md:p-0 md:m-0 md:mb-5 items-center md:justify-center ${
          heading === "Cart" && "md:hidden"
        }`}
      >
        <Link to={prevHref}>
          <img
            className="block md:hidden"
            src="./assets/arrowback-black.svg"
            alt="arrowback"
          />
        </Link>
        <h1 className="font-semibold ml-5">{heading}</h1>
      </div>
      {!isSamll && (
        <div className="bg-White flex flex-col-reverse md:flex-col font-semibold text-xs rounded-lg py-4 px-6">
          <div className="flex font-semibold my-1 justify-between items-center">
            <p className="">
              <span className="opacity-50">Your menu is:</span><span className="opacity-100">ComboBox </span>
            </p>
            <h3 className=" ">{selectedType}</h3>
          </div>

          <div className="flex font-semibold justify-between items-center">
            <p>Pax: 6</p>
            <h3>PIN: 1234</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHeaderPhone;
