import { defineField, defineType } from "sanity";
export const ingredientType = defineType({
  name: "ingredient",
  title: "Ingrédients",
  type: "document",
  fields: [
    defineField({
      name: "nom",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      nom: "nom",
    },
    prepare(selection) {
      const { nom } = selection;
      return {
        title: `Nom : ${nom}`,
      };
    },
  },
});
