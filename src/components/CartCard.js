import { useState } from "react";

const CartCard = ({
  id = "",
  imgSrc = "",
  title = "",
  desc = "",
  price = "",
  count = "",
  updateCounter = () => {},
  removeHandler = () => {},
}) => {
  const [showToolTip, setShowToolTip] = useState({
    frozen: false,
    allergen: false,
  });
  return (
    <div className="bg-White my-2 shadow-xl rounded-lg py-2 px-3 flex">
      <div className="flex-1 mr-4">
        <div className="pb-5 mb-5 flex flex-row md:flex-col lg:flex-row  border-opacity-20	 border-b border-Spanish-Gray">
          <img
            className="rounded-lg object-cover w-[76px] h-[76px]"
            src={`./assets/${imgSrc}.png`}
            alt="mashroom"
          />
          <div className="ml-3 md:ml-0 lg:ml-3">
            <div className="font-bold text-sm md:text-base">
              <h2>{title}</h2>
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
              onMouseEnter={() => {
                setShowToolTip({
                  frozen: false,
                  allergen: true,
                });
              }}
              onMouseLeave={() => {
                setShowToolTip({
                  frozen: false,
                  allergen: false,
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
                    contain frozen food
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
                onMouseEnter={() => {
                  setShowToolTip({
                    allergen: false,
                    frozen: true,
                  });
                }}
                onMouseLeave={() => {
                  setShowToolTip({
                    allergen: false,
                    frozen: false,
                  });
                }}
                className="w-6 h-6"
                src="./assets/snowflakes.svg"
                alt="snowflakes"
              />
            </div>
          </div>
        </div>

        <div className="text-Vivid-Red-Tangelo font-semibold text-xs space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="opacity-30">Without:</h3>
            <h3>Tomato</h3>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="opacity-30">Extra:</h3>
            <h3>Extra mozzarella</h3>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="opacity-30">Variant:</h3>
            <h3>Small</h3>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="opacity-30">Notes:</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2 items-center">
        <h2 className="text-Vivid-Red-Tangelo font-semibold text-base">
          €{price}
        </h2>
        <div
          onClick={() => removeHandler(id)}
          className="bg-Flash-White border border-Chinese-Silver rounded-lg w-10 h-10 flex items-center justify-center"
        >
          <img src="./assets/bin.svg" alt="bin" />
        </div>

        <div className="bg-Vivid-Red-Tangelo flex flex-col text-White w-10 items-center text-base rounded-lg py-3 h-24 justify-between">
          <img
            onClick={() => {
              updateCounter("+", id, count, price);
            }}
            className="cursor-pointer"
            src="./assets/plus.svg"
            alt="plus"
          />
          <span>{count}</span>
          <img
            onClick={() => {
              updateCounter("-", id, count, price);
            }}
            className="cursor-pointer"
            src="./assets/minus.svg"
            alt="minus"
          />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
