import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("L'Authentique")
    .items([
      S.documentTypeListItem("entree").title("Entrées"),
      S.documentTypeListItem("plat").title("Plats"),
      S.documentTypeListItem("salade").title("Salades"),
      S.documentTypeListItem("dessert").title("Dessets"),
      S.documentTypeListItem("ingredient").title("Ingrédients"),
      S.documentTypeListItem("formule").title("Formules"),
      S.documentTypeListItem("information").title("Informations"),
      S.documentTypeListItem("glace").title("Glaces"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            "entree",
            "plat",
            "salade",
            "dessert",
            "ingredient",
            "formule",
            "information",
            "glace",
          ].includes(item.getId()!)
      ),
    ]);
