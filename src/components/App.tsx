import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import ImageGallery from "./ImageGallery";
import Menu from "./Menu";
import Privatisation from "./Privatisation";
import SocialMedia from "./SocialMedia";
import Testimonials from "./Testimonials";

const App = () => {
  return (
    <>
      <Hero />
      <div className="w-full h-full bg-gradient-to-r from-[#50936a] to-[#000000df]">
        <Menu />
        <ImageGallery />
        <Testimonials />
        {/* <SocialMedia /> */}
        <Contact />
        <Privatisation />
        <Footer />
      </div>
    </>
  );
};

export default App;
