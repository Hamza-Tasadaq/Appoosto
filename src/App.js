import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

// React Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookTable from "./pages/BookTable.js";

function App() {
  return (
    <div className="font-Montserrat scroll-smooth	 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Route for mobile phone */}
          <Route path="/booktable" element={<BookTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
