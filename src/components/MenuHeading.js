import { useEffect, useLayoutEffect, useState } from "react";
import CategoryData from "../data/Category.json";

const hex2rgba = (hex = "", alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

const MenuHeading = ({ heading }) => {
  const [background, setBackground] = useState("");
  const [iconSrc, setIconSrc] = useState(undefined);
  useLayoutEffect(() => {
    compare(heading);
  }, [heading]);
  const compare = (heading) => {
    const res = CategoryData.find(({ name }) => heading === name);

    setIconSrc(res?.iconSrc);
    setBackground(res?.background);
  };

  console.log(background);
  return (
    <div
      style={{
        backgroundColor: `${background && hex2rgba(background, 0.2)}`,
        color: `${background}`,
      }}
      className="w-full h-10 flex items-center px-8"
    >
      <img className=" h-6 mr-5" src={iconSrc && `./assets/${iconSrc}.svg`} alt={iconSrc} />
      <h1 className="font-semibold pl-3 md:pl-0 md:ml-1 z-40">{heading}</h1>
    </div>
  );
};

export default MenuHeading;
