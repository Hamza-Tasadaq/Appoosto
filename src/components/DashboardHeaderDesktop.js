import { useState } from "react";
import { useSelector } from "react-redux";
import BackModal from "./BackModal";
import Filters from "./Filters";
import LanguageModal from "./LanguageModal";
import ModalWrapper from "./ModalWrapper";
import NotificationModal from "./NotificationModal";

function DashboardHeaderDesktop() {
  const { selectedLanguage } = useSelector((state) => state.language);

  const [showFiltersModal, setShowFiltersModal] = useState(false);

  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const [showBackModal, setShowBackModal] = useState(false);

  const closeHandler = () => {
    setShowFiltersModal(!showFiltersModal);
  };

  return (
    <div>
      <div className="shadow-lg bg-White py-3 px-16 flex items-center justify-between">
        <div
          onClick={() => {
            setShowBackModal(true);
          }}
          className="flex items-center cursor-pointer"
        >
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
          <div
            onClick={() => {
              setShowNotificationModal(true);
            }}
            className="bg-Vivid-Red-Tangelo cursor-pointer rounded-full  w-10 h-10 flex items-center justify-center"
          >
            <img src="./assets/bell.svg" alt="bell" />
          </div>
          <div
            onClick={() => {
              setShowLanguageModal(true);
            }}
            className="cursor-pointer"
          >
            <img
              className="w-10 h-10"
              src={`./assets/${selectedLanguage.flagSrc}.png`}
              alt="flag"
            />
          </div>
        </div>
      </div>

      {showNotificationModal && (
        <NotificationModal
          setShowNotificationModal={setShowNotificationModal}
        />
      )}

      {showBackModal && <BackModal setShowBackModal={setShowBackModal} />}

      {showLanguageModal && (
        <ModalWrapper>
          <LanguageModal
            setShowLanguageModal={setShowLanguageModal}
            selectedLanguage={selectedLanguage}
          />
        </ModalWrapper>
      )}
      {showFiltersModal && (
        <ModalWrapper>
          <Filters closeHandler={closeHandler} />
        </ModalWrapper>
      )}
    </div>
  );
}

export default DashboardHeaderDesktop;
