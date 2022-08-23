import { useDispatch } from "react-redux";
import { changeLanguage } from "../app/Slices/SelectedLanguage";

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

const LanguageModal = ({
  selectedLanguage = "",
  setShowLanguageModal = () => {},
}) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        setShowLanguageModal(false);
      }}
      className="bg-White border border-Medium-Electric-Blue rounded-lg max-w-[360px] py-4 px-4"
    >
      <h1 className="text-Vivid-Red-Tangelo font-bold text-lg text-center">
        Select your language
      </h1>

      <div className="grid grid-cols-3 mt-2">
        {Languages.map(({ flagSrc, text }) => (
          <div
            key={text}
            onClick={() => {
              dispatch(
                changeLanguage({
                  flagSrc,
                  text,
                })
              );
              setShowLanguageModal(false);
            }}
            className="flex flex-col m-5 items-center justify-center cursor-pointer relative"
          >
            <img src={`./assets/${flagSrc}.png`} alt={flagSrc} />
            <div className="flex items-center">
              <h2 className="font-semibold text-sm mt-1">{text}</h2>
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
  );
};

export default LanguageModal;
