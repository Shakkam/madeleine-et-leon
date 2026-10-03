/**
 * Données Madeleine & Léon
 * Modifiez ce fichier pour mettre à jour le contenu du site sans toucher aux composants.
 */

export const infos = {
  nom: "Madeleine & Léon",
  slogan: "Artisanales & ultra moelleuses",
  tagline: "Ingrédients simples, goût authentique",
  description:
    "Madeleines artisanales faites avec amour à Bordeaux. Gamme sucrée Madeleine et gamme salée Léon, à retrouver sur les marchés bordelais.",
  fondation: "2026",
  region: "Bordeaux, France",
};

export const gammes = [
  {
    id: "madeleine",
    nom: "Madeleine",
    tagline: "La gamme sucrée",
    description:
      "Des madeleines moelleuses à souhait, nées de recettes maison et d'ingrédients soigneusement choisis. Chaque bouchée est une invitation à la douceur.",
    parfums: [
      "Vanille",
      "Citron",
      "Chocolat enrobée",
      "Marbrée",
      "Pistache",
      "Enrobage blanc",
    ],
    image: "/images/gamme-madeleine.jpg",
    // Passer à true quand la photo est déposée dans public/images/
    imageDispo: true,
    imageAlt:
      "Madeleines vanille et citron dorées, zestes de citron vert, rangées dans un panier en osier avec leurs étiquettes écrites à la main",
  },
  {
    id: "leon",
    nom: "Léon",
    tagline: "La gamme salée",
    description:
      "Le caractère en version salée : des madeleines qui réinventent l'apéro. Garnies avec générosité, à partager sans modération.",
    parfums: ["Chorizo-féta", "Tomate séchée-gruyère"],
    image: "/images/gamme-leon.jpg",
    imageDispo: true,
    imageAlt:
      "Madeleines salées olive et féta gratinées, rangées sur du papier journal imprimé",
  },
];

export const histoire = {
  titre: "Notre savoir-faire",
  paragraphes: [
    "Madeleine & Léon, c'est une histoire de goût, de générosité et de beaucoup d'amour. Derrière chaque madeleine, il y a des ingrédients simples, choisis avec soin, et une pâte travaillée à la main.",
    "La bosse, ce petit dôme doré qui gonfle à la cuisson, c'est le signe que tout a été fait comme il faut. Ni colorants, ni conservateurs — juste du beurre, des œufs, de la farine et la recette qu'on chérit.",
    "Sucrées ou salées, nos madeleines sont faites pour être partagées : sur un marché, entre amis, en famille, ou glissées dans une jolie boîte kraft comme un cadeau qui vient du cœur.",
  ],
  imageStand: "/images/stand-marche.jpg",
  imageStandAlt:
    "Le stand Madeleine & Léon au marché avec nappe vichy bleu et blanc, paniers en osier et ardoise écrite à la main",
  imageKraft: "/images/boite-kraft.jpg",
  imageKraftAlt:
    "Boîte kraft fermée par un sticker rond monochrome Madeleine & Léon",
};

/**
 * Marchés
 * Ajoutez autant d'entrées que nécessaire.
 * Champs : id (slug), lieu, ville, codePostal, adresse, jours (tableau), horaires, notes.
 */
export const marches = [
  {
    id: "forum-talence",
    lieu: "Place du Forum",
    ville: "Talence",
    codePostal: "33400",
    adresse: "Place du Forum, 33400 Talence",
    jours: ["Mercredi"],
    horaires: "Horaires à confirmer",
    notes: "",
  },
  // Exemple pour ajouter un marché :
  // {
  //   id: "marche-des-quais",
  //   lieu: "Marché des Quais",
  //   ville: "Bordeaux",
  //   codePostal: "33000",
  //   adresse: "Quai des Chartrons, 33000 Bordeaux",
  //   jours: ["Dimanche"],
  //   horaires: "7 h – 13 h",
  //   notes: "",
  // },
];

export const liens = {
  instagram: "https://www.instagram.com/madeleine.leon.france",
  instagramDM: "https://ig.me/m/madeleine.leon.france",
  instagramHandle: "@madeleine.leon.france",
};
