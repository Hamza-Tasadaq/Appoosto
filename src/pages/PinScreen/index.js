import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function PinScreen() {
  const navigate = useNavigate();
  // Otp input text
  const [otp, setOtp] = useState("");
  // Number of entered text for otp
  const [eneteredOtp, setEnteredOtp] = useState(0);

  // Click handler to set Otp Text and to set Number of entered Otp
  const handleClick = (num) => {
    if (eneteredOtp < 4) {
      setOtp(`${otp}${num}`);
      setEnteredOtp(eneteredOtp + 1);
    }
  };

  const [isValidOtp, setIsValidOtp] = useState(false);

  const checkIsValidOtp = () => {
    if (otp === "0000") {
      setIsValidOtp(true);
      setTimeout(() => {
        navigate("/menu");
      }, [1000]);
    } else {
      setIsValidOtp(false);
    }
  };

  const handleClickBack = () => {
    if (eneteredOtp >= 1 && otp.length >= 1) {
      setOtp(otp.slice(0, -1));
      setEnteredOtp(eneteredOtp - 1);
    }
  };

  const handleValidation = () => {
    if (eneteredOtp === 4) {
      setEnteredOtp(eneteredOtp + 1);
      checkIsValidOtp();
    }
  };

  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50 bg-White rounded-b-lg shadow-lg p-4 flex items-center justify-between">
        <Link to={"/"} className=" flex items-center ">
          <img src="./assets/booktable-logo.png" alt="booktable-logo" />
          <h3 className="font-semibold text-sm ml-3">Pan Asian Restaurant</h3>
        </Link>
        <img src="./assets/flag.png" alt="flag" />
      </div>

      <div className="flex flex-col items-center mt-5">
        <img src="./assets/lock.svg" alt="lock" />
        <p className="font-semibold text-sm my-6">Insert your PIN</p>

        <div className="flex">
          {new Array(4).fill("").map((_, index) => (
            <div
              className="bg-Bright-Gray rounded-lg mx-2 w-14 h-14 flex items-center justify-center"
              key={index}
            >
              {/* Display Staric after each keyboard press */}
              {index < eneteredOtp && (
                <img src="./assets/staric.svg" alt="staric" />
              )}
            </div>
          ))}
        </div>
        {/* Display when Otp is correct */}
        {isValidOtp ? (
          <div className="flex items-center justify-center my-4">
            <img src="./assets/tick-success.svg" alt="tick-success" />
            <p className="font-medium text-xs text-Black ml-2">
              Your entered pin is correct.
            </p>
          </div>
        ) : (
          <>
            {eneteredOtp === 5 && (
              <div className="my-4 text-Rlovers-Red">
                <p>Your entered pin is wrong.</p>
              </div>
            )}
          </>
        )}
      </div>

      <div className="w-full rounded-t-lg z-50 fixed bottom-0 left-0  bg-Vivid-Red-Tangelo py-3 flex items-center mt-5 justify-center">
        <div className="flex justify-center items-center flex-wrap text-White max-w-sm	">
          {Array.from({ length: 9 }, (_, i) => (
            <h1
              key={i}
              onClick={() => handleClick(i + 1)}
              className="font-semibold text-3xl py-2 w-[100px] my-3 px-10 rounded-lg hover:bg-White hover:text-Vivid-Red-Tangelo"
            >
              {i + 1}
            </h1>
          ))}
          <div
            onClick={handleClickBack}
            className="w-[100px] flex items-center justify-center my-3"
          >
            <div className="bg-White h-12 w-12 rounded-full flex items-center justify-center shadow-2xl	">
              <img src="./assets/arrow-backward.svg" alt="arrow-backward" />
            </div>
          </div>
          <h1
            onClick={() => handleClick(0)}
            className="font-semibold text-3xl py-2 w-[100px] my-3 px-10 rounded-lg hover:bg-White hover:text-Vivid-Red-Tangelo"
          >
            0
          </h1>

          <div
            onClick={handleValidation}
            className="w-[100px] flex items-center justify-center my-3"
          >
            <div className="bg-White h-12 w-12 rounded-full flex items-center justify-center shadow-2xl	">
              <img
                className=""
                src="./assets/arrow-forward.svg"
                alt="arrow-forward"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PinScreen;
