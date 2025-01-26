import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio-web/Portfolio-web";
import Servicese from "./components/services education/Servicese";
import Servicess from "./components/services skill/Servicess";
import Portfolio_P from "./components/portfolio-projects/Portfolio-projects";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Portfolio_P">
        <Parallax type="portfolio_p" />
      </section>
      <Portfolio_P />
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Background">
        <Parallax type="background" />
      </section>
      <section>
        <Servicese />
      </section>
      <section>
        <Servicess />
      </section>
      {/* <section id="Contact">
        <Contact />
      </section> */}
    </div>
  );
};

export default App;
