import { Header, Footer } from "../../components";
import Features from "./Features";
import ResturantStory from "./ResturantStory";
import BookTable from "./BookTable";
import ServicesGrid from "./ServicesGrid";
const Home = () => {
  return (
    <div>
      <Header />
      <Features />
      <ResturantStory />
      {/* Book Table for desktop Version */}
      <BookTable />
      {/* ServicesGrid for mobile Version */}
      <ServicesGrid />
      <Footer />
    </div>
  );
};

export default Home;
