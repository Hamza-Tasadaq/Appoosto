import { Container, SectionHeading } from "../../components";
import BestSellerData from "../../data/BestSeller.json";

const ChefSelection = () => {
  return (
    <div>
      <SectionHeading text="CHEF SELECTION" />
      <Container classes="flex items-center overflow-x-auto noScrollBar">
        {BestSellerData.map(({ imgSrc, title, price, desc }, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 max-w-[345px] my-6 mx-4 rounded-lg shadow-md	p-3"
          >
            <img
              className="absolute top-0 left-0 w-14 md:w-auto md:h-auto"
              src="./assets/chef-tag.svg"
              alt="best-selling"
            />
            <div className="pb-5 mb-5 flex  md:flex-col border-opacity-20	 border-b border-Spanish-Gray">
              <img
                className="rounded-lg object-cover w-[76px] h-[76px] md:h-auto md:w-full"
                src={`./assets/${imgSrc}.png`}
                alt="mashroom"
              />
              <div className="ml-3 md:ml-0">
                <div className="md:mt-4 flex justify-between font-bold text-sm md:text-base">
                  <h2>{title}</h2>
                  <h3 className="text-Vivid-Red-Tangelo">€${price}</h3>
                </div>
                <p className="font-medium text-xs mt-2 md:mt-3 md:text-sm">
                  {desc}
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src="./assets/coca-leaves.svg" alt="coca-leaves" />
                  <span className="ml-2 font-semibold text-xs">
                    Vegetarian, Vegan
                  </span>
                </div>
                <div className="flex space-x-2">
                  <img src="./assets/chilli-pepper.svg" alt="chilli-pepper" />
                  <img src="./assets/chilli-pepper.svg" alt="chilli-pepper" />
                  <img src="./assets/chilli-pepper.svg" alt="chilli-pepper" />
                </div>
              </div>

              <div className="flex items-center justify-between my-3">
                <div className="flex items-center space-x-1">
                  <img src="./assets/peanut.svg" alt="peanut" />
                  <div className="bg-Spanish-Gray opacity-20 w-px h-2" />
                  <img src="./assets/grains.svg" alt="grains" />
                </div>
                <img src="./assets/snowflakes.svg" alt="snowflakes" />
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ChefSelection;
