import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import MenuData from "../data/Menu.json";
import DashboardHeaderPhone from "./DashboardHeaderPhone";
import ModalWrapper from "./ModalWrapper";
import ProductDetails from "./ProductDetails";

const Menu = () => {
  const navigate = useNavigate();
  const [showProductDetails, setShowProductDetails] = useState(false);

  const modalHandler = () => {
    setShowProductDetails(!showProductDetails);
  };

  const productClickHandler = () => {
    if (window.innerWidth < 768) {
      navigate("/productdetails");
    } else {
      setShowProductDetails(!showProductDetails);
    }
  };
  return (
    <div className="mb-20 md:mb-0">
      <div className="hidden md:block">
        {showProductDetails && (
          <ModalWrapper>
            <ProductDetails closeHandler={modalHandler} />
          </ModalWrapper>
        )}
      </div>
      <div className="md:hidden sticky top-0 left-0 right-0 z-50">
        <div className="bg-White md:bg-Flash-White  md:static  shadow-xl md:shadow-none rounded-b-2xl md:bg-transparent md:rounded-none">
          <div className="flex px-5 pt-3 items-center justify-between">
            <Link to={"/"} className=" flex items-center ">
              <img
                src="./assets/headers-logo-gray.png"
                alt="headers-logo-gray"
              />
            </Link>
            <img src="./assets/flag.png" alt="flag" />
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
      </div>
      <div className="my-5 md:my-0">
        {Object.entries(MenuData).map(([key, value]) => (
          <div key={key}>
            {/* <h1 className="font-bold pl-3 md:pl-0 md:ml-1 bg-White z-40 sticky top-0 left-0">
              {key}
            </h1> */}
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
                    onClick={productClickHandler}
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
