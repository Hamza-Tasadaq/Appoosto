import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryData from "../data/Category.json";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);
  const half = Math.ceil(CategoryData.length / 2);
  const firstHalf = CategoryData.slice(0, half);
  const secondHalf = CategoryData.slice(half);

  const [isSelected, setIsSelected] = useState({
    pizza: false,
    drinks: false,
    hotdog: false,
    fries: false,
    muffins: false,
    breads: false,
    icecream: false,
    cupcake: false,
  });

  const clickHandler = (selectedItem, itemClicked) => {
    setIsSelected({
      pizza: false,
      drinks: false,
      hotdog: false,
      fries: false,
      muffins: false,
      breads: false,
      icecream: false,
      cupcake: false,
      [selectedItem]: true,
    });

    setTimeout(() => {
      setIsSelected({
        pizza: false,
        drinks: false,
        hotdog: false,
        fries: false,
        muffins: false,
        breads: false,
        icecream: false,
        cupcake: false,
      });
    }, 600);
    if (window.innerWidth > 768) {
      document.getElementById(itemClicked).scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/menu", { state: itemClicked });
    }
  };
  return (
    <div className="relative px-4 my-4 md:my-0 md:px-0">
      <div
        onMouseEnter={() => {
          setIsHovered(!isHovered);
        }}
        onMouseLeave={() => {
          setIsHovered(!isHovered);
        }}
        className={`flex justify-center md:flex-col md:overflow-x-auto ${
          isHovered ? " scrollBarHorizontal   " : "noScrollBar  "
        } `}
      >
        <div className="flex justify-center md:justify-start flex-col mr-2 md:mr-0  md:flex-row items-center my-1 space-y-3 md:space-y-0  md:space-x-3">
          {firstHalf.map(({ name, iconSrc, background }, index) => (
            <CategoryCard
              isSelected={isSelected}
              clickHandler={clickHandler}
              key={index}
              background={background}
              name={name}
              iconSrc={iconSrc}
            />
          ))}
        </div>
        <div className="flex flex-col ml-2 md:ml-0 md:flex-row items-center my-1 space-y-3 md:space-y-0  md:space-x-3">
          {secondHalf.map(({ name, iconSrc, background }, index) => (
            <CategoryCard
              isSelected={isSelected}
              clickHandler={clickHandler}
              key={index}
              background={background}
              name={name}
              iconSrc={iconSrc}
            />
          ))}
        </div>
      </div>
      <div className="hidden md:block bg-Spanish-Gray  h-px max-w-[60%] mx-auto opacity-25" />
    </div>
  );
};

export default Category;
