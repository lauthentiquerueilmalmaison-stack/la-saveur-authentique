import { defineField, defineType } from "sanity";

export const quantiteType = defineType({
  name: "quantite",
  title: "Quantités",
  type: "document",
  fields: [
    defineField({
      name: "quantite",
      title: "Quantité",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
  preview: {
    select: {
      quantite: "quantite",
    },
    prepare(selection) {
      const { quantite } = selection;
      return {
        title: `quantite : ${quantite}`,
      };
    },
  },
});
