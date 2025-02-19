interface IngredientProps {
  name: string;
  index: number;
  length: number;
}
const Ingredient = ({ name, index, length }: IngredientProps) => {
  return (
    <span className="mr-1 text-sm text-white italic lowercase">
      {name?.trim()} {index < length - 1 && ","}
    </span>
  );
};

export default Ingredient;
