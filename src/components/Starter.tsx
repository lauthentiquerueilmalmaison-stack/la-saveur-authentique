import { Entree } from "../../sanity.types";
import starter from "../../public/starter.jpg";
import Category from "./Category";

interface StarterProps {
  starters: Entree[];
}
const Starter = ({ starters }: StarterProps) => {
  return <Category category={starters} image={starter} />;
};

export default Starter;
