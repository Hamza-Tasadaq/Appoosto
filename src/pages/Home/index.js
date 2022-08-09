import { Header, Footer } from "../../components";
import Features from "./Features";
import BestSeller from "./BestSeller";
import ResturantStory from "./ResturantStory";
import ChefSelection from "./ChefSelection";
import BookTable from "./BookTable";
import ServicesGrid from "./ServicesGrid";

const Home = () => {
  return (
    <div>
      <Header />
      <Features />
      <BestSeller />

      <br />
      <br />
      <br />
      <br />
      <ResturantStory />
      <ChefSelection />
      {/* Book Table for desktop Version */}
      <BookTable />
      {/* ServicesGrid for mobile Version */}
      <ServicesGrid />
      <Footer />
    </div>
  );
};

export default Home;
