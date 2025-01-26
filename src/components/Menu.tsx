import { getAllOptions } from "@/sanity/lib/options/getAllOptions";
import Options from "./Options";
import MenuCard from "./MenuCard";
async function Menu() {
  const options = await getAllOptions();

  return (
    <section
      id="menu"
      className="w-full h-full min-h-screen flex flex-col justify-start  items-start text-[50px] text-white font-forum pt-[10vh] bg-[#17181a]"
    >
      <div className="w-full flex justify-center font-arizonia uppercase mb-5">
        <h1 className="tracking-wider">Menu</h1>
      </div>
      <Options options={options} />
      <MenuCard />
    </section>
  );
}

export default Menu;
