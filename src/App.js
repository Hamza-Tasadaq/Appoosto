import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookTable from "./pages/BookTable/index.js";
import Dashboard from "./pages/DashBoard";

import "./App.css";

// React Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="font-Montserrat">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Route for Desktop */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Route for mobile phone */}
          <Route path="/booktable" element={<BookTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
