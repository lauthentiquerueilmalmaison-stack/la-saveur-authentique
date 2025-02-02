import { defineField, defineType } from "sanity";

export const formuleType = defineType({
  name: "glace",
  title: "Glaces",
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
