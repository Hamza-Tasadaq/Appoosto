import { useState } from "react";
import Filters from "./Filters";
import ModalWrapper from "./ModalWrapper";

function DashboardHeaderDesktop() {
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
              setShowFiltersModal(!showFiltersModal);
            }}
            className="flex items-center text-sm py-3 px-4 font-semibold bg-Electric-Brown rounded-lg space-x-2 text-White cursor-pointer"
          >
            <img src="./assets/chilli-pepper.svg" alt="chilli-pepper" />
            <span>Filters</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-Vivid-Red-Tangelo rounded-full  w-10 h-10 flex items-center justify-center">
            <img src="./assets/bell.svg" alt="bell" />
          </div>
          <div >
            <img className="w-10 h-10" src="./assets/flag.png" alt="flag" />
          </div>
        </div>
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
