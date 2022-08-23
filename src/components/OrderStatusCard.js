import React from "react";

const OrderStatusCard = ({ status }) => {
  return (
    <div className="bg-White my-2 cursor-pointer relative shadow-md rounded-lg py-2 px-3 flex">
      <div>
        <div className="pb-5 mb-5 flex border-opacity-20 border-b border-Spanish-Gray">
          <img
            className="rounded-lg object-cover w-[76px] h-[76px]"
            src={`./assets/steak.png`}
            alt="mashroom"
          />
          <div className="ml-3">
            <div className="font-bold flex items-center justify-between text-sm md:text-base">
              <h2>Mushroom Pasta</h2>
              <h2 className="text-Vivid-Red-Tangelo">€12</h2>
            </div>
            <p className="font-medium text-xs mt-2">
              Lorem ipsum dolor sit amet, consectet adipiscing elit. Phasellus
              leo sapien de aries…
            </p>
          </div>
        </div>
        <div className="border-opacity-20 border-b pb-2 mb-5 border-Spanish-Gray">
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

        <div className="text-sm flex items-center text-Spanish-Gray pb-2 font-semibold justify-between">
          <div className="flex items-center  ">
            <img src="./assets/clock-filled.svg" alt="clock-filled" />
            <p className="ml-3">Ordered at 12:24</p>
          </div>
          <div>
            <p>
              Status:{" "}
              <span
                className={`${status === "Prepration" && "text-Lust"}  ${
                  status === "Delivered" && "text-Alien-Armpit"
                }`}
              >
                {status}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusCard;
