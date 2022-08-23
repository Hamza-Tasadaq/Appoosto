import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MenuData from "../data/Menu.json";
import MenuCard from "./MenuCard";
import ModalWrapper from "./ModalWrapper";
import ProductDetails from "./ProductDetails";
import MenuHeading from "./MenuHeading";

const Menu = ({
  setShowNotificationModal,
  setShowLanguageModal,
  setShowBackModal,
}) => {
  const navigate = useNavigate();
  const [showProductDetails, setShowProductDetails] = useState(false);

  const { selectedLanguage } = useSelector((state) => state.language);

  const modalHandler = () => {
    setShowProductDetails(!showProductDetails);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
      <div className="md:hidden sticky top-0 left-0 right-0 z-40">
        <div className="bg-White md:bg-Flash-White  md:static shadow-xl md:shadow-none rounded-b-2xl md:bg-transparent md:rounded-none">
          <div className="flex px-5 pt-3 items-center justify-between">
            <div
              onClick={() => {
                scrollTop();
                setShowBackModal(true);
              }}
              className=" flex items-center "
            >
              <img
                src="./assets/headers-logo-gray.png"
                alt="headers-logo-gray"
              />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-Light-Silver">
                <img src="./assets/questionmark.svg" alt="questionmark" />
              </div>
              <div
                onClick={() => {
                  scrollTop();
                  setShowNotificationModal(true);
                }}
                className="bg-Vivid-Red-Tangelo cursor-pointer rounded-full  w-8 h-8 flex items-center justify-center"
              >
                <img className="w-5 h-5" src="./assets/bell.svg" alt="bell" />
              </div>
              <div
                onClick={() => {
                  scrollTop();
                  setShowLanguageModal(true);
                }}
                className="cursor-pointer"
              >
                <img
                  className="w-8 h-8"
                  src={`./assets/${selectedLanguage.flagSrc}.png`}
                  alt="flag"
                />
              </div>
            </div>
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
      <div className="my-5 md:my-0 space-y-5">
        {Object.entries(MenuData).map(([key, value]) => (
          <div id={key} key={key}>
            <MenuHeading heading={key} />

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
                  <MenuCard
                    imgSrc={imgSrc}
                    title={title}
                    price={price}
                    desc={desc}
                    tagImgSrc={tagImgSrc}
                    key={index}
                    productClickHandler={productClickHandler}
                  />
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
