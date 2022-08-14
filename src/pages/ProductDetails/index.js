import {
  ProductDetails as ProductDetail,
  DashboardHeaderPhone,
} from "../../components";

const ProductDetails = () => {
  return (
    <div>
      <DashboardHeaderPhone heading="Details" prevHref="menu" isSamll={true} />
      <ProductDetail />
    </div>
  );
};

export default ProductDetails;
