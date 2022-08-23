import { useState } from "react";
import Filters from "./Filters";
import ModalWrapper from "./ModalWrapper";

const Languages = [
  {
    flagSrc: "italian",
    text: "Italian",
  },
  {
    flagSrc: "french",
    text: "French",
  },
  {
    flagSrc: "spanish",
    text: "Spanish",
  },
  {
    flagSrc: "german",
    text: "German",
  },
  {
    flagSrc: "greek",
    text: "Greek",
  },
  {
    flagSrc: "swedish",
    text: "Sweidsh",
  },
];

function DashboardHeaderDesktop() {
  const [showFiltersModal, setShowFiltersModal] = useState(false);

  const [showLanguageModal, setShowLanguageModal] = useState(false);

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

      {showLanguageModal && (
        <ModalWrapper>
          <div className="bg-White border border-Medium-Electric-Blue rounded-lg max-w-[360px] py-4 px-4">
            <h1 className="text-Vivid-Red-Tangelo font-bold text-lg text-center">
              Select your language
            </h1>

            <div className="grid grid-cols-3 mt-2">
              {Languages.map(({ flagSrc, text }) => (
                <div
                  key={text}
                  onClick={() => {
                    setSelectedLanguage({
                      flagSrc,
                      text,
                    });
                    setShowLanguageModal(false);
                  }}
                  className="flex flex-col m-5 items-center justify-center cursor-pointer relative"
                >
                  <img src={`./assets/${flagSrc}.png`} alt={flagSrc} />
                  <div className="flex items-center">
                    <t2 className="font-semibold text-sm mt-1">{text}</t2>
                    <div
                      className={`${
                        selectedLanguage.text === text ? "block " : " hidden "
                      } bg-[green] w-3 h-3 rounded-full mt-1.5 ml-2`}
                    >
                      {" "}
                    </div>
                  </div>
                </div>
              ))}
              <div></div>
            </div>
          </div>
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
