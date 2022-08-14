import { useNavigate } from "react-router-dom";
import useScroll from "../../hooks/useScroll";

const Card = ({ imgSrc, rating, name, desc, classes }) => {
  return (
    <div
      className={`rounded-lg  shadow-lg w-[235px] inline-block border-2 border-[#EEEDED80] bg-gradient-to-b from-[#FFFFFF66] to-[#FFFFFF00] py-4 px-3 backdrop-blur-2xl ${classes}`}
    >
      <div className="flex items-center">
        <img
          className="border-2 border-Saffron rounded-full"
          src={`./assets/${imgSrc}.png`}
          alt={imgSrc}
        />
        <div className="ml-3">
          <h3 className="font-medium text-xs">{name}</h3>
          <div className="flex items-center">
            <div className="flex items-center">
              <img src="./assets/star.svg" alt="star" />
              <img src="./assets/star.svg" alt="star" />
              <img src="./assets/star.svg" alt="star" />
              <img src="./assets/star.svg" alt="star" />
              <img src="./assets/star.svg" alt="star" />
            </div>
            <p className="text-Saffron font-medium text-[10px] ml-2">
              {rating}
            </p>
          </div>
        </div>
      </div>
      <h4 className="mt-3 font-medium text-xs">{desc}</h4>
    </div>
  );
};

const Banner = () => {
  const navigate = useNavigate();
  const [currentPosition] = useScroll();

  const handleBookNow = () => {
    navigate("/booktable");
  };
  const handleOrderNow = () => {
    window.location.replace("/#services");
  };
  return (
    <div className="bg-Vivid-Red-Tangelo bg-small">
      <div className="sm:bg-Black-Leather-Jacket relative bannerbg bg-no-repeat h-[296px] bg-cover sm:bg-cover lg:bg-contain bg-top lg:h-[770px] text-White ">
        {/* Images for desktop screen*/}
        <div className="hidden lg:block">
          <img
            className="absolute -top-10 left-5"
            src="./assets/leaf.png"
            alt="leaf"
          />
          <img
            className="absolute top-16 right-36"
            src="./assets/dots.png"
            alt="dots"
          />
          <img
            className="absolute top-60 left-80 rotate-[30deg]"
            src="./assets/dots.png"
            alt="dots"
          />
          <img
            className="absolute top-72 right-[30%] "
            src="./assets/sticks.png"
            alt="sticks"
          />
          <img
            className="absolute top-60 right-16 "
            src="./assets/beans.png"
            alt="beans"
          />
          <img
            className="absolute bottom-52 right-16 "
            src="./assets/hurbs.png"
            alt="hurbs"
          />

          <div className="absolute bottom-80 left-14">
            <div className="relative inline-block">
              <img src="./assets/vegmet-large.png" alt="vegmet-large" />
              <Card
                classes="absolute -bottom-20 left-2/4		"
                imgSrc={"vegmet-small"}
                name={"Vegemeat"}
                rating={"4.7"}
                desc={
                  "Bread, Avocado, Salted Egg, Jam, Dry Chilies, almond, garlic."
                }
              />
            </div>
          </div>

          <div className="absolute bottom-24 left-1/2 -translate-x-1/2">
            <div className="relative inline-block">
              <img src="./assets/eggs-large.png" alt="eggs-large" />
              <Card
                classes="absolute -bottom-20 left-2/4		"
                imgSrc={"eggs-small"}
                name={"Scrambled Eggs"}
                rating={"4.7"}
                desc={"Grapes, egg, slice beef, pomegranad, cheese, almonds."}
              />
            </div>
          </div>

          <div className="absolute top-52 right-16 -translate-x-1/2">
            <div className="relative inline-block">
              <img src="./assets/soup-large.png" alt="soup-large" />
              <Card
                classes="absolute -bottom-20 right-20		"
                imgSrc={"soup-small"}
                name={"Orange Soup"}
                rating={"4.7"}
                desc={"Grapes, egg, slice beef, pomegranad, cheese"}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="font-medium text-lg md:text-5xl mt-10 md:mt-16">
            Restaurant Name
          </h1>
          <p className="hidden md:block opacity-50 mt-8 mb-14">
            Restaurant Pay Off
          </p>
          <button className="hidden mb-10 md:block bg-Vivid-Red-Tangelo border border-Vivid-Red-Tangelo rounded-full py-3 px-14 font-medium text-sm duration-300 hover:bg-transparent">
            Explore Menu
          </button>
        </div>
        {/* Buttons for mobile screen */}
        <div className="md:hidden pb-16 flex flex-col items-center justify-center">
          <div
            className={`${currentPosition > 100 && " hidden"} space-x-5 my-10`}
          >
            <button
              onClick={handleBookNow}
              className="rounded-md text-xs	font-semibold px-6 py-3 bg-Vivid-Red-Tangelo duration-300 border border-transparent hover:bg-transparent hover:border-Vivid-Red-Tangelo"
            >
              Book Now
            </button>
            <button
              onClick={handleOrderNow}
              className="rounded-md text-xs	font-semibold px-6 py-3 bg-Medium-Electric-Blue  duration-300 border border-transparent hover:bg-transparent hover:border-Medium-Electric-Blue "
            >
              Order Now
            </button>
          </div>
          <div className="space-y-3 text-White font-medium text-xs">
            <div className="flex justify-center items-center">
              <img src="./assets/clock.svg" alt="clock" />
              <span className="ml-3 text-xs font-medium">
                Open everyday till 2:00 am
              </span>
            </div>
            <div className="flex justify-center items-center">
              <img src="./assets/location.svg" alt="location" />
              <span className="ml-3 text-xs font-medium">
                62-A Clements Road, West Midlands
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
