import { defineField, defineType } from "sanity";

export const saladeType = defineType({
  name: "salade",
  title: "Salades",
  type: "document",
  fields: [
    defineField({
      name: "nom",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "prix",
      title: "Prix",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [{ type: "reference", to: { type: "ingredient" } }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      nom: "nom",
      prix: "prix",
    },
    prepare(selection) {
      const { nom, prix } = selection;
      return {
        title: `Nom : ${nom}`,
        subtitle: `Prix : ${prix}`,
      };
    },
  },
});
