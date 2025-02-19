// utils/horairesUtils.ts

export const organiserHoraires = (
  horaires?: Array<{
    jour?:
      | "dimanche"
      | "jeudi"
      | "lundi"
      | "mardi"
      | "mercredi"
      | "samedi"
      | "vendredi";
    plagesHoraires?: Array<{
      ouverture?: string;
      fermeture?: string;
      _key: string;
    }>;
    _key: string;
  }>
) => {
  const horairesMap = new Map<string, string[]>();
  const joursFermes: string[] = [];

  horaires?.forEach(({ jour, plagesHoraires }) => {
    if (!plagesHoraires || plagesHoraires.length === 0) {
      joursFermes.push(jour!); // Utilisation de "!" car nous savons que jour existe ici
    } else {
      const plagesString = plagesHoraires
        .map(({ ouverture, fermeture }) => `${ouverture} - ${fermeture}`)
        .join(" | ");

      if (horairesMap.has(plagesString)) {
        horairesMap.get(plagesString)?.push(jour!);
      } else {
        horairesMap.set(plagesString, [jour!]);
      }
    }
  });

  // Gestion des horaires
  const horairesTexte: string[] = [];

  // Gérer le cas où Lundi-Samedi ont les mêmes horaires
  const horairesLundiSamedi = Array.from(horairesMap).find(([_, jours]) =>
    jours?.every((jour) =>
      ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"].includes(
        jour
      )
    )
  );

  if (horairesLundiSamedi) {
    const horairesString = horairesLundiSamedi[0];
    horairesTexte.push(`Lun - Sam : ${horairesString}`);
  }

  // Gérer les jours fermés (Dimanche ici)
  const joursFermesText = joursFermes.length > 0 ? `Dim : Fermé` : null;
  if (joursFermesText) {
    horairesTexte.push(joursFermesText);
  }

  return horairesTexte;
};
