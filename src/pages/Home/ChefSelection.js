import { SectionHeading, CarouselSlider } from "../../components";
import ChefData from "../../data/ChefData.json";

const ChefSelection = () => {
  return (
    <div>
      <SectionHeading text="CHEF SELECTION" />
      <CarouselSlider data={ChefData} />
    </div>
  );
};

export default ChefSelection;
