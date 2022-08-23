import { useEffect, useRef, useState } from "react";
import ServicesData from "../data/Services.json";

let currentOtpIndex = 0;
const PinModal = ({ setShowPinModal = () => {} }) => {
  const [showGrid, setShowGrids] = useState(true);

  // Number of entered text for otp
  const [eneteredOtp, setEnteredOtp] = useState(0);

  const inputRef = useRef(null);
  const [otpInput, setOtpInput] = useState(new Array(4).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);

  const [isValidOtp, setIsValidOtp] = useState(false);
  const [isWrongOtp, setIsWrongOtp] = useState(false);

  const checkIsValidOtp = () => {
    if (otpInput.join("") === "0000" && eneteredOtp >= 4) {
      setIsValidOtp(true);
      setTimeout(() => {
        setShowPinModal(false);
      }, [1000]);
    } else {
      setIsValidOtp(false);
      setIsWrongOtp(true);
      setOtpInput(new Array(4).fill(""));
      setEnteredOtp(0);
    }
  };
  const handleValidation = () => {
    if (eneteredOtp === 4) {
      setEnteredOtp(eneteredOtp + 1);
      checkIsValidOtp();
    }
  };

  const changeHandler = (e) => {
    const { value } = e.target;
    const newOtp = [...otpInput];
    newOtp[currentOtpIndex] = value.substring(value.length - 1);

    if (!value) {
      setActiveOtpIndex(currentOtpIndex - 1);
      setEnteredOtp(eneteredOtp - 1);
    } else {
      setActiveOtpIndex(currentOtpIndex + 1);
      setEnteredOtp(eneteredOtp + 1);
    }
    setOtpInput(newOtp);
  };

  const handleOnKeyDown = (e, index) => {
    currentOtpIndex = index;
    if (e.key === "Backspace") {
      setActiveOtpIndex(currentOtpIndex - 1);
      setEnteredOtp(eneteredOtp - 1);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);
  return (
    <div className="max-w-[902px] w-full">
      <div className="bg-Vivid-Red-Tangelo w-full h-12"></div>
      <div
        className="bg-Medium-Electric-Blue min-h-[480px] flex items-center justify-center"
        style={{
          backgroundImage: "url('./assets/features-bg.png')",
        }}
      >
        {showGrid ? (
          <div>
            <h1 className="text-center text-White font-normal text-2xl mb-10">
              Make a choice
            </h1>
            <div className="grid grid-cols-2 gap-3">
              {ServicesData.map(({ title, imgSrc, href = "" }, index) => (
                <div
                  to={href}
                  key={index}
                  onClick={() => {
                    href ? setShowGrids(!showGrid) : setShowPinModal(false);
                  }}
                  className="bg-White rounded-lg cursor-pointer w-36 sm:w-40 h-24 duration-300 border-transparent flex items-center justify-center hover:scale-105 flex-col"
                >
                  <img src={`./assets/${imgSrc}.png`} alt={imgSrc} />
                  <h3 className="font-bold text-sm mt-3">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col items-center">
              <img src="./assets/lock.svg" alt="lock" />
              <p className="font-semibold text-White text-base my-6">
                Insert your PIN
              </p>
              <div className="flex relative items-center space-x-4">
                {otpInput.map((_, index) => {
                  return (
                    <input
                      key={index}
                      onChange={(e) => {
                        changeHandler(e);
                      }}
                      onKeyDown={(e) => {
                        handleOnKeyDown(e, index);
                      }}
                      ref={index === activeOtpIndex ? inputRef : null}
                      value={otpInput[index] !== "" ? "*" : otpInput[index]}
                      type={otpInput[index] !== "" ? "" : "number"}
                      className="  text-center font-bold text-xl w-14 h-14 rounded-lg outline-none bg-Bright-Gray"
                    />
                  );
                })}

                <div
                  onClick={handleValidation}
                  className="bg-Vivid-Red-Tangelo absolute ml-10 cursor-pointer -right-44 rounded-full  w-14 h-14 flex items-center justify-center"
                >
                  <img
                    src="./assets/arrow-forward-white.svg"
                    alt="arrow-forward-white"
                  />
                </div>
              </div>
              {/* Display when Otp is correct */}
              {isValidOtp ? (
                <div className="flex items-center justify-center my-4">
                  <img src="./assets/tick-success.svg" alt="tick-success" />
                  <p className="font-medium text-sm text-White ml-2">
                    Your entered pin is correct.
                  </p>
                </div>
              ) : (
                <>
                  {isWrongOtp && (
                    <div className="my-4 text-Rlovers-Red">
                      <p>Your entered pin is wrong.</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PinModal;
