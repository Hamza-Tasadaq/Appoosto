import MenuData from "../data/Category.json";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const half = Math.ceil(MenuData.length / 2);
  const firstHalf = MenuData.slice(0, half);
  const secondHalf = MenuData.slice(half);
  return (
    <div className="relative px-4 my-4 md:my-0 md:px-0">
      <div className="flex justify-center md:flex-col md:overflow-x-auto scrollBarHorizontal">
        <div className="flex justify-center md:justify-start flex-col mr-2 md:mr-0  md:flex-row items-center my-1 space-y-3 md:space-y-0  md:space-x-3">
          {firstHalf.map(({ name, iconSrc, background }, index) => (
            <CategoryCard
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
