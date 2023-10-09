import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes

import Home from "./Home";
import UpdatePage from "./UpdatePage";

function App() {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Use <Routes> as a container */}
        <Route path="/" element={<Home />} /> {/* Use 'element' prop */}
        <Route path="/update_employee/:id" element={<UpdatePage />} />
        {/* Use 'element' prop */}
      </Routes>
    </Router>
  );
}

export default App;
