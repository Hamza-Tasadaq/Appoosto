import Container from "./Container";
import SocialIcons from "../data/SocialIcons.json";

const Footer = () => {
  return (
    <div className="bg-White md:bg-transparent py-3 px-8 md:py-20 md:px-24 bg-cover bg-center bg-no-repeat	footerbg">
      <Container classes="text-White gap-10 md:grid md:grid-cols-2 lg:grid-cols-4">
        <div className="flex justify-between items-center md:block">
          <img
            className="mb-8 hidden md:block"
            src="./assets/footers-logo.png"
            alt="footers-logo"
          />

          <div className="md:hidden flex items-center">
            <img src="./assets/footers-logo-black.png" alt="footers-logo" />
            <div className="md:hidden ml-3 bg-Spanish-Gray w-px h-4" />
          </div>
          <p className="text-xs md:text-base text-Black md:text-White font-medium opacity-80">
            © 2022 Appoosto.
            <br className="hidden md:block" />
            All Right Reserved
          </p>
        </div>

        <div className="hidden md:block">
          <h3 className="font-bold text-sm mb-10">CONTACTS</h3>
          <p className="text-base font-medium opacity-80">
            204 S Blanche St <br /> Mounds, IL 62964-1104 <br /> 202-555-0108
          </p>
        </div>

        <div className="hidden md:block">
          <h3 className="font-bold text-sm mb-10	">FOLLOW US </h3>
          <div className="flex items-center space-x-5">
            {SocialIcons.map(({ iconName }, index) => (
              <img
                src={`./assets/${iconName}.svg`}
                key={index}
                alt={iconName}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <h3 className="font-bold text-sm mb-10	">ABOUT US </h3>
          <p className="text-base	font-medium opacity-80 max-w-xs		">
            Lorem ipsum dolor sit amet, <br /> consectet elevaina adipiscing{" "}
            <br /> elit. Phasellus leo sapien...
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
