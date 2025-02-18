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
      <div className="w-full h-full bg-black bg-[radial-gradient(circle_farthest-side_at_center,_hsl(102,37%,75%)_-80%,_hsl(0,0%,0%)_150%)]">
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
