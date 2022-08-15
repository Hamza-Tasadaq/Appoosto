import { DashboardHeaderPhone, Category as Categories } from "../../components";

const Category = () => {
  return (
    <div>
      <DashboardHeaderPhone prevHref="/menu" heading="Categories" isSamll={true} />
      <Categories />
    </div>
  );
};

export default Category;
