import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookTable from "./pages/BookTable/index.js";
import Dashboard from "./pages/DashBoard";
import PinScreen from "./pages/PinScreen";

import "./App.css";

// React Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Filters from "./pages/Filters";
import OrderStatus from "./pages/OrderStatus";
import NotForYou from "./pages/NotForYou";
import Intro from "./pages/Intro";
import Tutorial from "./pages/Tutorial";
import { SrcollToTop } from "./components";
import OrderSuccessFull from "./pages/OrderSuccessFull";

function App() {
  return (
    <div className="font-Montserrat">
      <BrowserRouter>
        <SrcollToTop />
        <Routes>
          {/* Route for Desktop */}
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Routes for mobile phone */}
          <Route path="/booktable" element={<BookTable />} />
          <Route path="/pinscreen" element={<PinScreen />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category" element={<Category />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/filters" element={<Filters />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/orderStatus" element={<OrderStatus />} />
          <Route path="/orderSuccessFull" element={<OrderSuccessFull />} />
          <Route path="*" element={<NotForYou />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
