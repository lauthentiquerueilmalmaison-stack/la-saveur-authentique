import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Menu from "./Menu";
import SocialMedia from "./SocialMedia";
import Testimonials from "./Testimonials";

const App = () => {
  return (
    <div className="w-full">
      <Hero />
      <Menu />
      <Testimonials />
      <SocialMedia />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
