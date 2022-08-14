import { useState } from "react";
import MenuData from "../data/Menu.json";
import DashboardHeaderPhone from "./DashboardHeaderPhone";
import ModalWrapper from "./ModalWrapper";
import ProductDetails from "./ProductDetails";

const Menu = () => {
  const [showProductDetails, setShowProductDetails] = useState(false);

  const modalHandler = () => {
    setShowProductDetails(!showProductDetails);
  };
  return (
    <div>
      <div className="hidden md:block">
        {showProductDetails && (
          <ModalWrapper>
            <ProductDetails closeHandler={modalHandler} />
          </ModalWrapper>
        )}
      </div>
      <div className="md:hidden">
        <DashboardHeaderPhone prevHref="/" heading={"Pan Asian Resturant"} />
      </div>
      <div>
        {Object.entries(MenuData).map(([key, value]) => (
          <div key={key}>
            <h1 className="font-bold ml-1 bg-White z-40 sticky top-0 left-0">
              {key}
            </h1>
            <div className="mx-2 grid grid-cols-1 lg:grid-cols-2 gap-5">
              {value.map(
                (
                  {
                    imgSrc = "",
                    title = "",
                    price = "",
                    desc = "",
                    tagImgSrc = "",
                  },
                  index
                ) => (
                  <div
                    onClick={modalHandler}
                    key={index}
                    className="bg-White my-2 cursor-pointer relative shadow-md rounded-lg py-2 px-3 flex"
                  >
                    <img
                      className="absolute top-0 left-0 w-10"
                      src={`./assets/${tagImgSrc}.svg`}
                      alt={tagImgSrc}
                    />
                    <div>
                      <div className="pb-5 mb-5 flex border-opacity-20 border-b border-Spanish-Gray">
                        <img
                          className="rounded-lg object-cover w-[76px] h-[76px]"
                          src={`./assets/${imgSrc}.png`}
                          alt="mashroom"
                        />
                        <div className="ml-3">
                          <div className="font-bold flex items-center justify-between text-sm md:text-base">
                            <h2>{title}</h2>
                            <h2 className="text-Vivid-Red-Tangelo">{price}</h2>
                          </div>
                          <p className="font-medium text-xs mt-2">{desc}</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <img
                              src="./assets/coca-leaves.svg"
                              alt="coca-leaves"
                            />
                            <span className="ml-2 font-semibold text-xs">
                              Vegetarian, Vegan
                            </span>
                          </div>
                          <div className="flex space-x-2">
                            <img
                              src="./assets/chilli-pepper.svg"
                              alt="chilli-pepper"
                            />
                            <img
                              src="./assets/chilli-pepper.svg"
                              alt="chilli-pepper"
                            />
                            <img
                              src="./assets/chilli-pepper.svg"
                              alt="chilli-pepper"
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-between my-3">
                          <div className="flex items-center space-x-1">
                            <img src="./assets/peanut.svg" alt="peanut" />
                            <div className="bg-Spanish-Gray opacity-70 w-px h-2" />
                            <img src="./assets/grains.svg" alt="grains" />
                            <div className="bg-Spanish-Gray opacity-70 w-px h-2" />
                            <img src="./assets/mollusc.svg" alt="mollusc" />
                            <div className="bg-Spanish-Gray opacity-70 w-px h-2" />
                            <img src="./assets/pine-cone.svg" alt="pine-cone" />
                          </div>
                          <img src="./assets/snowflakes.svg" alt="snowflakes" />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
