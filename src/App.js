import React from "react";
import { Routes, Route } from "react-router-dom";

import Pages from "./components/Pages";
import Portfolio from "./components/Portfolio";
import DisplayProject from "./components/Displayproject";
import DisplayProjectTwo from "./components/Displayprojecttwo";
import InProgress from "./components/Inprogress";

const App = () => {
  return (
    <Routes>
      {/* Main Website */}
      <Route path="/" element={<Pages />} />

      {/* Portfolio Page */}
      <Route path="/portfolio" element={<Portfolio />} />

      {/* Project Details */}
      <Route
        path="/displayproject"
        element={<DisplayProject />}
      />

      <Route
        path="/displayprojecttwo"
        element={<DisplayProjectTwo />}
      />



      <Route
        path="/inprogress"
        element={<InProgress />}
      />
    </Routes>
  );
};

export default App;