import { defineField, defineType } from "sanity";

export const informationType = defineType({
  name: "information",
  title: "Informations",
  type: "document",
  fields: [
    defineField({
      name: "adresse",
      title: "Adresse",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(5)
          .regex(/^[a-zA-Z0-9À-ÿ\s,'-]+$/, {
            name: "adresse",
            invert: false,
          })
          .error("L'adresse contient des caractères invalides"),
    }),
    defineField({
      name: "telephone",
      title: "Telephone",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "facebook",
      title: "Facebook",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "horaires",
      title: "Horaires d'ouverture",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "jour",
              title: "Jour",
              type: "string",
              options: {
                list: [
                  { title: "Lundi", value: "lundi" },
                  { title: "Mardi", value: "mardi" },
                  { title: "Mercredi", value: "mercredi" },
                  { title: "Jeudi", value: "jeudi" },
                  { title: "Vendredi", value: "vendredi" },
                  { title: "Samedi", value: "samedi" },
                  { title: "Dimanche", value: "dimanche" },
                ],
              },
            }),
            defineField({
              name: "plagesHoraires",
              title: "Plages horaires",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "ouverture",
                      title: "Heure d'ouverture",
                      type: "string",
                      placeholder: "ex: 11h30",
                    }),
                    defineField({
                      name: "fermeture",
                      title: "Heure de fermeture",
                      type: "string",
                      placeholder: "ex: 14h00",
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      email: "email",
      telephone: "telephone",
    },
    prepare(selection) {
      const { email, telephone } = selection;
      return {
        title: `Email : ${email}`,
        subtitle: `Telephone : ${telephone}`,
      };
    },
  },
});
