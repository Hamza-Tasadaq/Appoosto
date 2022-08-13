import MenuData from "../data/Category.json";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const half = Math.ceil(MenuData.length / 2);
  const firstHalf = MenuData.slice(0, half);
  const secondHalf = MenuData.slice(half);
  return (
    <div className="relative">
      <div className="flex flex-col overflow-x-auto noScrollBar">
        <div className="flex items-center my-1 space-x-3">
          {firstHalf.map(({ name, iconSrc, background }, index) => (
            <CategoryCard
              key={index}
              background={background}
              name={name}
              iconSrc={iconSrc}
            />
          ))}
        </div>
        <div className="flex items-center my-2 space-x-3">
          {secondHalf.map(({ name, iconSrc, background }, index) => (
            <CategoryCard
              key={index}
              background={background}
              name={name}
              iconSrc={iconSrc}
            />
          ))}
        </div>
      </div>
      <div className="bg-Spanish-Gray  h-px max-w-[60%] mx-auto opacity-25" />
    </div>
  );
};

export default Category;
