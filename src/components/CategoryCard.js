import { useState } from "react";

const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

const CategoryCard = ({ name, iconSrc, background }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      onClick={() => {
        setIsSelected(!isSelected);
      }}
      style={
        isSelected
          ? { backgroundColor: `${hex2rgba(background, 0.5)}` }
          : { backgroundColor: `${hex2rgba(background, 0.2)}` }
      }
      className={`rounded-lg flex flex-col items-center justify-center space-y-3 cursor-pointer min-w-[120px] lg:min-w-[166px] min-h-[105px] py-3 px-5 duration-300 hover:bg-opacity-60`}
    >
      <img src={`./assets/${iconSrc}.svg`} alt={iconSrc} />
      <h1 className="font-bold text-sm">{name}</h1>
    </div>
  );
};

export default CategoryCard;
