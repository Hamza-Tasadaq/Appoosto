import { useState } from "react";
import Filters from "./Filters";
import ModalWrapper from "./ModalWrapper";

function DashboardHeaderDesktop() {
  const [activeButton, setActiveButton] = useState({
    takeaway: true,
    delivery: false,
  });

  const [showFiltersModal, setShowFiltersModal] = useState(false);

  const closeHandler = () => {
    setShowFiltersModal(!showFiltersModal);
  };
  return (
    <div>
      <div className="shadow-lg bg-White py-3 px-16 flex items-center justify-between">
        <div className="flex items-center">
          <img src="./assets/pan.png" alt="pan" />
          <h2 className="ml-2 text-Vivid-Red-Tangelo font-semibold text-sm">
            Pan Asian Restaurant
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <div
            onClick={() => {
              setActiveButton({
                takeaway: true,
                delivery: false,
              });
            }}
            className="flex items-center bg-Pastel-Violet font-semibold text-sm px-4 py-3 rounded-lg space-x-2 text-White cursor-pointer"
          >
            <div
              className={`border-2 flex items-center justify-center ${
                activeButton.takeaway ? " border-White" : " border-Bright-Gray"
              }  rounded-full w-5 h-5`}
            >
              <div
                className={`${
                  activeButton.takeaway ? " bg-White" : " bg-transparent"
                } w-3 h-3 rounded-full`}
              ></div>
            </div>
            <img src="./assets/takeaway-white.svg" alt="takeaway-white" />
            <span>Take Away</span>
          </div>

          <div
            onClick={() => {
              setActiveButton({
                takeaway: false,
                delivery: true,
              });
            }}
            className="flex items-center bg-Pastel-Violet font-semibold text-sm px-4 py-3 rounded-lg space-x-2 text-White cursor-pointer"
          >
            <div
              className={`border-2 flex items-center justify-center ${
                activeButton.delivery ? " border-White" : " border-Bright-Gray"
              }  rounded-full w-5 h-5`}
            >
              <div
                className={`${
                  activeButton.delivery ? " bg-White" : " bg-transparent"
                } w-3 h-3 rounded-full`}
              ></div>
            </div>

            <img src="./assets/motorbike-white.svg" alt="motorbike-white" />
            <span>Delivery</span>
          </div>
          <div className="bg-Spanish-Gray w-px h-6 opacity-25" />

          <div
            onClick={() => {
              setShowFiltersModal(!showFiltersModal);
            }}
            className="flex items-center text-sm py-3 px-4 font-semibold bg-Electric-Brown rounded-lg space-x-2 text-White cursor-pointer"
          >
            <img src="./assets/chilli-pepper.svg" alt="chilli-pepper" />
            <span>Filters</span>
          </div>
        </div>
        <img src="./assets/flag.png" alt="flag" />
      </div>
      {showFiltersModal && (
        <ModalWrapper>
          <Filters closeHandler={closeHandler} />
        </ModalWrapper>
      )}
    </div>
  );
}

export default DashboardHeaderDesktop;
