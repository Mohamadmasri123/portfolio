import React from "react";

import Navbar from "./Nav";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Pages = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Pages;