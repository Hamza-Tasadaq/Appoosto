import { useState } from "react";

const MenuCard = ({
  imgSrc = "",
  title = "",
  price = "",
  desc = "",
  tagImgSrc = "",
  productClickHandler = () => {},
}) => {
  const [showToolTip, setShowToolTip] = useState({
    frozen: false,
    allergen: false,
  });
  return (
    <div className="bg-White my-2 cursor-pointer relative shadow-md rounded-lg py-2 px-3 flex">
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
              <h2 onClick={productClickHandler}>{title}</h2>
              <h2 className="text-Vivid-Red-Tangelo">{price}</h2>
            </div>
            <p className="font-medium text-xs mt-2">{desc}</p>
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
            <div
              className="flex items-center space-x-1 "
              onClick={() => {
                setShowToolTip({
                  frozen: false,
                  allergen: !showToolTip.allergen,
                });
              }}
            >
              <div className="bg-Vivid-Red-Tangelo bg-opacity-20 rounded-lg w-6 h-6 flex items-center justify-center">
                <img src="./assets/pine-cone.svg" alt="pine-cone" />
              </div>
              <div className="bg-Vivid-Red-Tangelo bg-opacity-20 rounded-lg w-6 h-6 flex items-center justify-center">
                <img src="./assets/sulphite.svg" alt="sulphite" />
              </div>
              <div className="bg-Vivid-Red-Tangelo bg-opacity-20 rounded-lg w-6 h-6 flex items-center justify-center">
                <img src="./assets/fish.svg" alt="fish" />
              </div>
              <div className="bg-Vivid-Red-Tangelo bg-opacity-20 rounded-lg w-6 h-6 flex items-center justify-center">
                <img src="./assets/peanut.svg" alt="peanut" />
              </div>
              {showToolTip.allergen && (
                <div className="flex items-center relative ">
                  <div
                    style={{
                      clipPath: `polygon(0 50%, 100% 100%, 100% 0)`,
                    }}
                    className="bg-Light-Silver h-3 w-3 ml-2 absolute top-1.5 -translate-1/2 -left-2 z-50 "
                  />
                  <div className="bg-Light-Silver ml-2.5 py-1 text-xs font-medium text-Vivid-Red-Tangelo px-5 rounded-full">
                    crustaceans
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center">
              {showToolTip.frozen && (
                <div className="flex items-center relative ">
                  <div className="bg-Light-Silver mr-2.5 py-1 text-[10px] font-medium text-Very-Light-Azure px-5 rounded-full">
                    Frozen food
                  </div>
                  <div
                    style={{
                      clipPath: `polygon(0 0, 0 100%, 100% 50%)`,
                    }}
                    className="bg-Light-Silver h-3 w-3 mr-2 absolute top-1.5 -translate-1/2 -right-2 z-50 "
                  />
                </div>
              )}
              <img
                onClick={() => {
                  setShowToolTip({
                    allergen: false,
                    frozen: !showToolTip.frozen,
                  });
                }}
                className="w-6 h-6"
                src="./assets/snowflakes.svg"
                alt="snowflakes"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
