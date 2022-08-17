import { useState } from "react";
import { Link } from "react-router-dom";

// const Total=()=

const OrderStatus = () => {
  const [selectedTab, setSelectedTab] = useState({
    total: true,
    delivered: false,
    notDelivered: false,
  });

  const tabClickHandler = (tab) => {
    setSelectedTab({
      total: false,
      delivered: false,
      notDelivered: false,
      [tab]: true,
    });
  };

  return (
    <>
      <div className="bg-White md:bg-Flash-White sticky z-50 md:static left-0 right-0 top-0 shadow-xl md:shadow-none rounded-b-2xl md:bg-transparent md:rounded-none">
        <div className="flex p-5 md:p-0 md:m-0 md:mb-5 items-center md:justify-center">
          <Link to={"/menu"}>
            <img
              className="block md:hidden"
              src="./assets/arrowback-black.svg"
              alt="arrowback"
            />
          </Link>
          <h1 className="font-semibold ml-5">Order Status</h1>
        </div>
        <div className="flex  overflow-x-auto items-center noScrollBar space-x-4  px-5 py-3">
          <h1
            onClick={() => {
              tabClickHandler("total");
            }}
            className={` px-5 rounded-md text-sm duration-300 font-medium py-2 w-auto flex items-center justify-center  text-center ${
              selectedTab.total
                ? "text-White bg-Vivid-Red-Tangelo"
                : " bg-transparent text-black "
            } `}
          >
            Total
          </h1>
          <h1
            onClick={() => {
              tabClickHandler("notDelivered");
            }}
            className={` px-2 rounded-md min-w-[120px] text-sm duration-300 font-medium py-2 w-36 flex items-center justify-center ${
              selectedTab.notDelivered
                ? "text-White bg-Vivid-Red-Tangelo"
                : " bg-transparent text-black "
            } `}
          >
            Not Delivered
          </h1>
          <h1
            onClick={() => {
              tabClickHandler("delivered");
            }}
            className={` px-5 rounded-md text-sm duration-300 font-medium py-2 w-auto flex items-center justify-center ${
              selectedTab.delivered
                ? "text-White bg-Vivid-Red-Tangelo"
                : " bg-transparent text-black "
            } `}
          >
            Delivered
          </h1>
        </div>
      </div>
      <div className="mx-2 my-5 space-y-4">
        {selectedTab.total && (
          <>
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
                      Lorem ipsum dolor sit amet, consectet adipiscing elit.
                      Phasellus leo sapien de aries…
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

                <div className="text-sm flex items-center text-Spanish-Gray pb-2 font-semibold justify-between">
                  <div className="flex items-center  ">
                    <img src="./assets/clock-filled.svg" alt="clock-filled" />
                    <p className="ml-3">Ordered at 12:24</p>
                  </div>
                  <div>
                    <p>
                      Status: <span className="text-Lust ">Prepration</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                      Lorem ipsum dolor sit amet, consectet adipiscing elit.
                      Phasellus leo sapien de aries…
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

                <div className="text-sm flex items-center text-Spanish-Gray pb-2 font-semibold justify-between">
                  <div className="flex items-center  ">
                    <img src="./assets/clock-filled.svg" alt="clock-filled" />
                    <p className="ml-3">Ordered at 12:24</p>
                  </div>
                  <div>
                    <p>
                      Status:{" "}
                      <span className="text-Alien-Armpit">Delivered</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {selectedTab.delivered && (
          <>
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
                      Lorem ipsum dolor sit amet, consectet adipiscing elit.
                      Phasellus leo sapien de aries…
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

                <div className="text-sm flex items-center text-Spanish-Gray pb-2 font-semibold justify-between">
                  <div className="flex items-center  ">
                    <img src="./assets/clock-filled.svg" alt="clock-filled" />
                    <p className="ml-3">Ordered at 12:24</p>
                  </div>
                  <div>
                    <p>
                      Status:{" "}
                      <span className="text-Alien-Armpit">Delivered</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {selectedTab.notDelivered && (
          <>
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
                      Lorem ipsum dolor sit amet, consectet adipiscing elit.
                      Phasellus leo sapien de aries…
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

                <div className="text-sm flex items-center text-Spanish-Gray pb-2 font-semibold justify-between">
                  <div className="flex items-center  ">
                    <img src="./assets/clock-filled.svg" alt="clock-filled" />
                    <p className="ml-3">Ordered at 12:24</p>
                  </div>
                  <div>
                    <p>
                      Status: <span className="text-Lust ">Prepration</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default OrderStatus;
