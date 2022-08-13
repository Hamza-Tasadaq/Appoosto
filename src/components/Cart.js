const Cart = () => {
  return (
    <div>
      <div className="bg-White md:bg-Flash-White sticky z-50 md:static left-0 right-0 top-0 shadow-xl md:shadow-none rounded-b-2xl md:bg-transparent md:rounded-none">
        <div className="flex p-5 md:p-0 md:m-0 md:mb-5 items-center md:justify-center">
          <img
            className="block md:hidden"
            src="./assets/arrowback-black.svg"
            alt="arrowback"
          />
          <h1 className="font-semibold ml-5">Cart</h1>
        </div>

        <div className="bg-White flex flex-col-reverse md:flex-col font-semibold text-xs rounded-lg py-4 px-6">
          <div className="flex font-semibold my-1 justify-between items-center">
            <p className="opacity-50">Your menu is:</p>
            <h3 className=" ">ComboBox</h3>
          </div>

          <div className="flex font-semibold justify-between items-center">
            <p>Pax: 6</p>
            <h3>PIN: 1234</h3>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-0 my-4">
        <div className="bg-White my-2 shadow-xl rounded-lg py-2 px-3 flex">
          <div className="flex-1 mr-4">
            <div className="pb-5 mb-5 flex  border-opacity-20	 border-b border-Spanish-Gray">
              <img
                className="rounded-lg object-cover w-[76px] h-[76px]"
                src={`./assets/steak.png`}
                alt="mashroom"
              />
              <div className="ml-3">
                <div className="font-bold text-sm md:text-base">
                  <h2>Organic Steak</h2>
                </div>
                <p className="font-medium text-xs mt-2">
                  Lorem ipsum dolor sit amet, consectet adipiscing elit.
                  Phasellus leo sapien…
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

            <div className="text-Black font-semibold text-xs space-y-2">
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
              €12
            </h2>
            <div className="bg-Flash-White border border-Chinese-Silver rounded-lg w-10 h-10 flex items-center justify-center">
              <img src="./assets/bin.svg" alt="bin" />
            </div>

            <div className="bg-Vivid-Red-Tangelo flex flex-col text-White w-10 items-center text-base rounded-lg py-3 h-24 justify-between">
              <img
                className="cursor-pointer"
                src="./assets/plus.svg"
                alt="plus"
              />
              <span>2</span>

              <img
                className="cursor-pointer"
                src="./assets/minus.svg"
                alt="minus"
              />
            </div>
          </div>
        </div>

        <div className="bg-White my-2 shadow-xl rounded-lg py-2 px-3 flex">
          <div className="flex-1 mr-4">
            <div className="pb-5 mb-5 flex  border-opacity-20	 border-b border-Spanish-Gray">
              <img
                className="rounded-lg object-cover w-[76px] h-[76px]"
                src={`./assets/steak.png`}
                alt="mashroom"
              />
              <div className="ml-3">
                <div className="font-bold text-sm md:text-base">
                  <h2>Organic Steak</h2>
                </div>
                <p className="font-medium text-xs mt-2">
                  Lorem ipsum dolor sit amet, consectet adipiscing elit.
                  Phasellus leo sapien…
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

            <div className="text-Black font-semibold text-xs space-y-2">
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
              €12
            </h2>
            <div className="bg-Flash-White border border-Chinese-Silver rounded-lg w-10 h-10 flex items-center justify-center">
              <img src="./assets/bin.svg" alt="bin" />
            </div>

            <div className="bg-Vivid-Red-Tangelo flex flex-col text-White w-10 items-center text-base rounded-lg py-3 h-24 justify-between">
              <img
                className="cursor-pointer"
                src="./assets/plus.svg"
                alt="plus"
              />
              <span>2</span>

              <img
                className="cursor-pointer"
                src="./assets/minus.svg"
                alt="minus"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
