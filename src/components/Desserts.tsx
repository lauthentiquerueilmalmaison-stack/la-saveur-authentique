import dessert from "../../public/dessert.jpg";
import { Dessert } from "../../sanity.types";
import Category from "./Category";

interface DessertProps {
  desserts: Dessert[];
}
const Desserts = ({ desserts }: DessertProps) => {
  return <Category category={desserts} image={dessert} />;
};

export default Desserts;
