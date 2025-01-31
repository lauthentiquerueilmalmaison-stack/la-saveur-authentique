import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Menu from "./Menu";
import Privatisation from "./Privatisation";
import SocialMedia from "./SocialMedia";
import Testimonials from "./Testimonials";

const App = () => {
  return (
    <>
      <Hero />
      <Menu />
      <Testimonials />
      <SocialMedia />
      {/* <Contact /> */}
      <Privatisation />
      <Footer />
    </>
  );
};

export default App;
