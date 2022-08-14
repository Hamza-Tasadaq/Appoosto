import { useNavigate } from "react-router-dom";
import SocialIcons from "../data/SocialIcons.json";
import useScroll from "../hooks/useScroll";
import Container from "./Container";

const Header = () => {
  const navigate = useNavigate();
  const [currentPosition] = useScroll();

  const handleBookNow = () => {
    if (currentPosition > 100 && window.innerWidth < 768) {
      navigate("/booktable");
    } else if (window.innerWidth > 768) {
      window.location.replace("/#booktable");
    }
  };

  const handleOrderNow = () => {
    if (currentPosition > 100 && window.innerWidth < 768) {
      window.location.replace("/#services");
    } else {
      navigate("/dashboard");
    }
  };
  return (
    <header className="bg-[#1C2D23] sticky top-0 left-0 z-50">
      <div className=" bg-black rounded-b-md md:rounded-none ">
        <Container
          classes={`flex ${
            currentPosition <= 100 ? " justify-center" : " justify-between"
          }  md:justify-between items-center py-5 px-2 duration-500 md:px-4 lg:px-10 `}
        >
          <img
            className={`${
              currentPosition > 100 && "w-28 md:w-auto"
            } cursor-pointer`}
            src="./assets/headers-logo-gray.png"
            alt="headers-logo-gray"
          />
          <div className=" md:flex items-center space-x-5 lg:space-x-10 text-White">
            <div className="hidden lg:flex items-center space-x-5">
              {SocialIcons.map(({ iconName }, index) => (
                <img
                  src={`./assets/${iconName}.svg`}
                  key={index}
                  alt={iconName}
                />
              ))}
            </div>
            <div className="hidden md:block bg-White h-6 w-px bg-opacity-40	" />

            <div className="hidden md:block space-y-3">
              <div className="flex items-center">
                <img src="./assets/clock.svg" alt="clock" />
                <span className="ml-3 text-xs font-medium">
                  Open everyday till 2:00 am
                </span>
              </div>
              <div className="flex items-center">
                <img src="./assets/location.svg" alt="location" />
                <span className="ml-3 text-xs font-medium">
                  62-A Clements Road, West Midlands
                </span>
              </div>
            </div>

            <div className="hidden md:block bg-White h-6 w-px bg-opacity-40	" />

            <div
              className={`${
                currentPosition <= 100 ? " hidden md:flex" : " flex"
              }  items-center space-x-2 md:space-x-5`}
            >
              <button
                onClick={handleBookNow}
                className="rounded-md text-xs	font-semibold px-4 py-2 md:px-6 md:py-3 bg-Vivid-Red-Tangelo duration-300 border border-transparent hover:bg-transparent hover:border-Vivid-Red-Tangelo"
              >
                Book Now
              </button>
              <button
                onClick={handleOrderNow}
                className="rounded-md text-xs	font-semibold px-4 py-2 md:px-6 md:py-3 bg-Medium-Electric-Blue  duration-300 border border-transparent hover:bg-transparent hover:border-Medium-Electric-Blue "
              >
                Order Now
              </button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
