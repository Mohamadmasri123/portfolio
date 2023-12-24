import Home from "./components/Home";
import Nav from "./components/Nav";
import Social from "./components/Social";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
      <div>
        <Nav/>
        <Home/>
        <Social/>
        <About/>
        <Portfolio/>
        <Experience/>
        <Contact/>
      </div>
  );
}

export default App;
