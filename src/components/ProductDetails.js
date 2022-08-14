import { useState } from "react";

const CartButtons = () => {
  return (
    <div className="flex justify-between space-x-2 mt-4">
      <div className="bg-Platinum flex items-center rounded-lg px-3 space-x-3 py-2 font-semibold text-lg w-auto">
        <div className="opacity-50">-</div>
        <h2>2</h2>
        <div className="opacity-50">+</div>
      </div>
      <div className="bg-Vivid-Red-Tangelo bg-opacity-20 font-semibold hidden rounded-lg md:flex items-center p-2 text-Vivid-Red-Tangelo">
        €12
      </div>
      <div className="bg-Vivid-Red-Tangelo text-White font-semibold rounded-lg items-center flex flex-1 justify-center">
        Add to cart
        <span className="md:hidden ml-2 pl-2 border-l border-White border-opacity-30">
          €12
        </span>
      </div>
    </div>
  );
};

const ProductDetails = ({ closeHandler = () => {} }) => {
  const [ingredients, setIngredients] = useState({
    tomato: true,
    mozzarella: false,
  });

  const handleIngredientsSelect = (method) => {
    setIngredients({
      tomato: false,
      mozzarella: false,
      [method]: true,
    });
  };
  const [selectedExtras, setSelectedExtras] = useState({
    doubletomato: true,
    doublemozzarella: false,
  });

  const handleExtraSelect = (method) => {
    setSelectedExtras({
      doubletomato: false,
      doublemozzarella: false,
      [method]: true,
    });
  };

  const [selectedVarient, setSelectedVarient] = useState({
    small: true,
    medium: false,
  });

  const handleVariantSelect = (method) => {
    setSelectedVarient({
      small: false,
      medium: false,
      [method]: true,
    });
  };
  return (
    <div className="bg-White w-full md:max-w-[902px] mx-5 rounded-lg overflow-hidden">
      <div className="hidden md:flex items-center justify-between bg-Vivid-Red-Tangelo p-2  bg-opacity-20">
        <div></div>
        <h1 className="text-Vivid-Red-Tangelo font-bold text-base">
          Food Details
        </h1>

        <img onClick={closeHandler} className="cursor-pointer" src="./assets/close.svg" alt="close" />
      </div>

      <div className="md:px-8 md:py-4 flex">
        <div className="flex-1 mx-1">
          <img
            className="mb-2"
            src="./assets/steak-full.png"
            alt="steak-full"
          />

          <div className="rounded-lg shadow-md md:px-5 md:py-[30px]">
            <div className="font-semibold mb-2 text-lg flex items-center justify-between pb-3 border-opacity-20 border-b border-Spanish-Gray">
              <h1>Organic Steak</h1>
              <h2 className="text-Vivid-Red-Tangelo">€12</h2>
            </div>
            <p className="font-medium text-sm text-Black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              leo sapien, gravida scelerisque lacus in, malesuada ultrices
              purus.
            </p>
          </div>

          <div className="rounded-lg shadow-md md:px-5 md:py-[30px]">
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
              <div className="flex items-center">
                <img
                  className="mr-2"
                  src="./assets/certificate.svg"
                  alt="certificate"
                />
                <h2>Best Seller</h2>
              </div>
              <div className="flex items-center">
                <img className="mr-2" src="./assets/chef.svg" alt="chef" />
                <h2>Suggested by the chef</h2>
              </div>
            </div>
          </div>

          <div className="hiddenas md:block">
            <CartButtons />
          </div>
        </div>
        <div className="flex-1 mx-1">
          <div className="shadow-md rounded-sm md:px-5 md:py-[20px]">
            <h1 className="opacity-40 my-2 pb-2 border-b border-Spanish-Gray border-opacity-50">
              Ingredients
            </h1>

            <div className="space-y-2">
              <div
                onClick={() => {
                  handleIngredientsSelect("tomato");
                }}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div
                    className={`${
                      ingredients.tomato
                        ? " bg-Medium-Electric-Blue border-Medium-Electric-Blue"
                        : " border-Spanish-Gray"
                    } overflow-hidden rounded-sm border-2 w-5 h-5 flex items-center justify-center`}
                  >
                    {ingredients.tomato && (
                      <img src="./assets/tick.svg" alt="tick" />
                    )}
                  </div>
                  <h3 className="font-semibold ml-2">Tomato</h3>
                </div>
                <h3 className="font-semibold">+ €2</h3>
              </div>
              <div
                onClick={() => {
                  handleIngredientsSelect("mozzarella");
                }}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div
                    className={`${
                      ingredients.mozzarella
                        ? " bg-Medium-Electric-Blue border-Medium-Electric-Blue"
                        : " border-Spanish-Gray"
                    } overflow-hidden rounded-sm border-2 w-5 h-5  flex items-center justify-center`}
                  >
                    {ingredients.mozzarella && (
                      <img src="./assets/tick.svg" alt="tick" />
                    )}
                  </div>
                  <h3 className="font-semibold ml-2">Mozzarella</h3>
                </div>
                <h3 className="font-semibold">+ €3</h3>
              </div>
            </div>
          </div>

          <div className="shadow-md rounded-sm md:px-5 md:py-[20px]">
            <h1 className="opacity-40 my-2 pb-2 border-b border-Spanish-Gray border-opacity-50">
              Extras
            </h1>

            <div className="space-y-2">
              <div
                onClick={() => {
                  handleExtraSelect("doubletomato");
                }}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div
                    className={`${
                      selectedExtras.doubletomato
                        ? " bg-Medium-Electric-Blue border-Medium-Electric-Blue"
                        : " border-Spanish-Gray"
                    } overflow-hidden rounded-sm border-2 w-5 h-5 flex items-center justify-center`}
                  >
                    {selectedExtras.doubletomato && (
                      <img src="./assets/tick.svg" alt="tick" />
                    )}
                  </div>
                  <h3 className="font-semibold ml-2">Double Tomato</h3>
                </div>
                <h3 className="font-semibold">+ €2</h3>
              </div>
              <div
                onClick={() => {
                  handleExtraSelect("doublemozzarella");
                }}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div
                    className={`${
                      selectedExtras.doublemozzarella
                        ? " bg-Medium-Electric-Blue border-Medium-Electric-Blue"
                        : " border-Spanish-Gray"
                    } overflow-hidden rounded-sm border-2 w-5 h-5  flex items-center justify-center`}
                  >
                    {selectedExtras.doublemozzarella && (
                      <img src="./assets/tick.svg" alt="tick" />
                    )}
                  </div>
                  <h3 className="font-semibold ml-2">Double Mozzarella</h3>
                </div>
                <h3 className="font-semibold">+ €3</h3>
              </div>
            </div>
          </div>

          <div className="shadow-md rounded-sm md:px-5 md:py-[20px]">
            <h1 className="opacity-40 my-2 pb-2 border-b border-Spanish-Gray border-opacity-50">
              Variant 1
            </h1>

            <div className="space-y-2">
              <div
                onClick={() => {
                  handleVariantSelect("small");
                }}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div
                    className={`${
                      selectedVarient.small
                        ? "  border-Medium-Electric-Blue"
                        : " border-Spanish-Gray"
                    } rounded-full border-2 w-5 h-5 flex items-center justify-center`}
                  >
                    <div
                      className={`${
                        selectedVarient.small
                          ? " w-3 h-3 bg-Medium-Electric-Blue "
                          : " bg-transparent"
                      } rounded-full`}
                    />
                  </div>
                  <h3 className="font-semibold ml-2">Small</h3>
                </div>
                <h3 className="font-semibold">+ €4</h3>
              </div>
              <div
                onClick={() => {
                  handleVariantSelect("medium");
                }}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div
                    className={`${
                      selectedVarient.medium
                        ? "  border-Medium-Electric-Blue"
                        : " border-Spanish-Gray"
                    } rounded-full border-2 w-5 h-5 flex items-center justify-center`}
                  >
                    <div
                      className={`${
                        selectedVarient.medium
                          ? " w-3 h-3 bg-Medium-Electric-Blue "
                          : " bg-transparent"
                      } rounded-full`}
                    />
                  </div>
                  <h3 className="font-semibold ml-2">Medium</h3>
                </div>
                <h3 className="font-semibold">+ €6</h3>
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-sm md:px-5 md:py-[20px]">
            <h2 className="font-semibold border-b border-Spanish-Gray border-opacity-20 pb-2">
              Notes
            </h2>
            <input
              className="bg-transparent  min-h-[64px] w-full outline-none text-sm"
              placeholder="Write here"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
