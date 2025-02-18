import { getAllInformations } from "@/sanity/lib/informations/getAllInformations";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import ImageGallery from "./ImageGallery";
import Menu from "./Menu";
import Privatisation from "./Privatisation";
import SocialMedia from "./SocialMedia";
import Testimonials from "./Testimonials";
import { Information } from "../../sanity.types";
import Header from "./Header";

const dynamic = "force-dynamic";

const App = async () => {
  const informations = await getAllInformations();
  return (
    <>
      <Header informations={informations} />
      <Hero />
      <div className="w-full h-full bg-black bg-[radial-gradient(circle_farthest-side_at_center,_hsl(102,37%,75%)_-80%,_hsl(0,0%,0%)_150%)]">
        <Menu />
        <ImageGallery />
        <Testimonials />
        {/* <SocialMedia /> */}
        <Contact informations={informations} />
        <Privatisation />
        <Footer informations={informations} />
      </div>
    </>
  );
};

export default App;
