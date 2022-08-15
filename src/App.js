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
import ProductDetails from "./pages/ProductDetails";
import Filters from "./pages/Filters";

function App() {
  return (
    <div className="font-Montserrat">
      <BrowserRouter>
        <Routes>
          {/* Route for Desktop */}
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Routes for mobile phone */}
          <Route path="/booktable" element={<BookTable />} />
          <Route path="/pinscreen" element={<PinScreen />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/filters" element={<Filters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
