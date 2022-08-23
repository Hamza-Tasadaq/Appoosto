import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../app/Slices/Cart";
import Filters from "./Filters";
import LanguageModal from "./LanguageModal";
import ModalWrapper from "./ModalWrapper";

function DashboardHeaderDesktop() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showFiltersModal, setShowFiltersModal] = useState(false);

  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const [showBackModal, setShowBackModal] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState({
    flagSrc: "italian",
    text: "Italian",
  });

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
          <div className="bg-Vivid-Red-Tangelo rounded-full  w-10 h-10 flex items-center justify-center">
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

      {showBackModal && (
        <ModalWrapper>
          <div className="bg-White border border-Medium-Electric-Blue rounded-lg p-5 relative">
            <div
              onClick={() => {
                setShowBackModal(false);
              }}
              className="bg-Vivid-Red-Tangelo p-2 rounded-lg inline-block absolute top-4 right-4 cursor-pointer"
            >
              <img src="./assets/close-white.svg" alt="close-white" />
            </div>
            <div className="text-center my-8">
              <h1 className="text-Vivid-Red-Tangelo font-bold text-lg">
                Are you sure?
              </h1>
              <p className="font-light text-sm mt-2">
                If you go back your cart will be reset!
              </p>
            </div>

            <div className="flex items-center space-x-3 mt-5">
              <button
                onClick={() => {
                  navigate("/");
                  dispatch(emptyCart());
                }}
                className="rounded-lg border border-Vivid-Red-Tangelo px-6 py-3 font-bold"
              >
                Yes, go back
              </button>
              <button
                onClick={() => {
                  setShowBackModal(false);
                }}
                className="rounded-lg bg-Vivid-Red-Tangelo text-White border border-Vivid-Red-Tangelo px-6 py-3 font-bold"
              >
                No, stay here
              </button>
            </div>
          </div>
        </ModalWrapper>
      )}

      {showLanguageModal && (
        <ModalWrapper>
          <LanguageModal
            setShowLanguageModal={setShowLanguageModal}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
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
