import SocialIcons from "../data/SocialIcons.json";
import Container from "./Container";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 bg-black rounded-b-md md:rounded-none">
      <Container
        classes={
          "flex justify-center md:justify-between items-center py-5 md:px-4 lg:px-10 "
        }
      >
        <img src="./assets/headers-logo-gray.png" alt="headers-logo-gray" />
        <div className="hidden md:flex items-center space-x-5 lg:space-x-10 text-White">
          <div className="hidden lg:flex items-center space-x-5">
            {SocialIcons.map(({ iconName }, index) => (
              <img
                src={`./assets/${iconName}.svg`}
                key={index}
                alt={iconName}
              />
            ))}
          </div>
          <div className="bg-White h-6 w-px bg-opacity-40	" />

          <div className="space-y-3">
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

          <div className="bg-White h-6 w-px bg-opacity-40	" />

          <div className="space-x-5">
            <button className="rounded-md text-xs	font-semibold px-6 py-3 bg-Vivid-Red-Tangelo duration-300 border border-transparent hover:bg-transparent hover:border-Vivid-Red-Tangelo">
              Book Now
            </button>
            <button className="rounded-md text-xs	font-semibold px-6 py-3 bg-Medium-Electric-Blue  duration-300 border border-transparent hover:border-Medium-Electric-Blue ">
              Order Now
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
