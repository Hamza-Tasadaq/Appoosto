import { Header, Footer } from "../../components";
import Features from "./Features";
import ResturantStory from "./ResturantStory";
import BookTable from "./BookTable";

const Home = () => {
  return (
    <div>
      <Header />
      <Features />
      <ResturantStory />
      <BookTable />
      <Footer />
    </div>
  );
};

export default Home;
