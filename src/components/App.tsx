import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Menu from "./Menu";
import Privatisation from "./Privatisation";
import SocialMedia from "./SocialMedia";
import Testimonials from "./Testimonials";

const App = () => {
  return (
    <div className="w-full">
      <Hero />
      {/* <Menu /> */}
      <Testimonials />
      <SocialMedia />
      <Contact />
      <Privatisation />
      <Footer />
    </div>
  );
};

export default App;
