import { SectionHeading, CarouselSlider } from "../../components";
import BestSellerData from "../../data/BestSeller.json";

const BestSeller = () => {
  return (
    <div>
      <SectionHeading text="BEST SELLER" />
      <CarouselSlider data={BestSellerData} />
    </div>
  );
};

export default BestSeller;
