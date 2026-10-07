/**
 * Données Madeleine & Léon
 * Modifiez ce fichier pour mettre à jour le contenu du site sans toucher aux composants.
 */

export const infos = {
  nom: "Madeleine & Léon",
  slogan: "Artisanales & ultra moelleuses",
  tagline: "Ingrédients choisis, du sucré au salé",
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
  titre: "Notre histoire",
  sections: [
    {
      titre: "Mon histoire",
      paragraphes: [
        "Avant Madeleine & Léon, mon parcours n’était pas tout tracé.",
        "J’ai commencé par un master en graphisme, puis j’ai travaillé plusieurs années comme chef cuisinier. Deux univers qui, finalement, ne sont pas si éloignés : la créativité, le goût du détail, la recherche de l’équilibre et surtout l’envie de créer quelque chose qui puisse être partagé.",
        "À 28 ans, j’ai décidé de changer de cap et de me lancer dans un CAP Pâtisserie. Une nouvelle aventure, un nouveau métier.",
        "Et comme souvent dans la vie, une rencontre peut tout changer. Pour lui faire honneur, j’ai décidé de me consacrer pleinement à un projet autour de cette petite pâtisserie qui porte désormais son prénom.",
        "Je me suis lancé à fond dans l’aventure des madeleines : chercher les bonnes recettes, travailler les textures, imaginer de nouvelles associations, apprendre encore et encore pour faire d’une madeleine bien plus qu'une simple pâtisserie.",
        "Puis notre deuxième enfant est arrivé.",
        "Léon.",
        "Et l’histoire a pris tout son sens.",
      ],
    },
    {
      titre: "Madeleine & Léon",
      paragraphes: [
        "J’ai choisi de donner à mon projet les prénoms de mes deux enfants.",
        "Madeleine, pour les madeleines sucrées.\nLéon, pour les madeleines salées.",
        "Deux prénoms, deux univers, mais une même histoire.",
        "Les madeleines sucrées portent la douceur, la gourmandise et les souvenirs d’enfance. Les madeleines salées, elles, ouvrent un autre terrain de jeu : l’apéritif, le brunch, les repas, les marchés et les rencontres.",
        "Derrière chaque recette, il y a une part de moi. Et derrière ce projet, il y a surtout eux.",
        "Je construis Madeleine & Léon avec cette envie de leur transmettre quelque chose : le goût du travail bien fait, le courage de se lancer, la liberté de créer et surtout l’idée qu’il est possible de construire une vie autour de ce que l’on aime.",
      ],
    },
    {
      titre: "Un métier fait avec amour",
      paragraphes: [
        "Aujourd’hui, je fais ce métier avec amour.",
        "Chaque madeleine est préparée artisanalement, avec le regard du cuisinier, la précision du pâtissier et la sensibilité du créatif que j’ai toujours été.",
        "Je cherche la bonne texture, le bon équilibre, la recette qui surprend mais qui donne surtout envie d’en reprendre une.",
        "Je ne veux pas simplement fabriquer des madeleines. Je veux créer des moments de gourmandise, provoquer un souvenir, une émotion, un sourire autour d’une petite bouchée.",
        "Et puis il y a les marchés.",
        "Vous pouvez retrouver Madeleine & Léon sur les marchés talençais et bordelais, au fil des semaines et des saisons. C’est là que l’aventure prend tout son sens : rencontrer les gens, faire goûter mes créations, échanger, écouter les retours et voir une madeleine passer directement de mes mains aux vôtres.",
        "C’est une façon simple et authentique de faire ce métier.",
      ],
    },
  ],
  conclusion: {
    texte: "Madeleine & Léon, c’est une histoire de famille, de gourmandise et de passion.",
    lignes: ["Deux enfants.", "Deux univers.", "Des madeleines sucrées et salées."],
    fin: "Et l’envie de continuer à les faire grandir, une madeleine après l’autre.",
  },
  imageStand: "/images/stand-marche.jpg",
  imageStandAlt:
    "Le stand Madeleine & Léon au marché avec nappe vichy bleu et blanc, paniers en osier et ardoise écrite à la main",
  imageKraft: "/images/boite-kraft.jpg",
  imageKraftAlt:
    "Boîte kraft fermée par un sticker rond monochrome Madeleine & Léon",
};

export const histoireMadeleine = {
  titre: "L’histoire de la madeleine",
  sections: [
    {
      titre: null,
      paragraphes: [
        "Avant d’être une petite pâtisserie reconnaissable entre mille, la madeleine est une histoire de transmission, de savoir-faire et de traditions. Son origine exacte reste entourée de plusieurs récits, mais tous racontent à leur manière la naissance d’une pâtisserie simple, généreuse et profondément populaire.",
        "On raconte notamment qu’au XVIIIᵉ siècle, à la cour du roi Stanislas Leszczynski, une jeune cuisinière prénommée Madeleine aurait préparé, pour une réception, un petit gâteau moelleux moulé dans une coquille. Le succès aurait été immédiat. Le gâteau aurait ensuite pris le nom de celle qui l’avait confectionné : Madeleine.",
        "Au fil du temps, la recette s’est diffusée bien au-delà de la Lorraine. Avec ses quelques ingrédients essentiels — farine, œufs, beurre, sucre — et sa forme si particulière, la madeleine est devenue un incontournable de la pâtisserie française. Sa fameuse bosse, sa couleur dorée et son cœur moelleux en ont fait une pâtisserie à la fois humble et élégante, capable de traverser les générations sans jamais perdre son charme.",
        "Mais la madeleine n’est pas seulement une recette. Elle est aussi devenue un symbole de notre rapport à la mémoire et aux souvenirs.",
      ],
    },
    {
      titre: "La madeleine de Proust",
      paragraphes: [
        "C’est au début du XXᵉ siècle que la madeleine acquiert une nouvelle dimension grâce à Marcel Proust et à son œuvre À la recherche du temps perdu.",
        "Dans un passage devenu mythique, le narrateur trempe une petite madeleine dans son thé. Le goût et la sensation qui en résultent font soudain surgir en lui une multitude de souvenirs liés à son enfance et aux dimanches passés chez sa tante Léonie, à Combray.",
        "Ce qui est fascinant dans ce passage, ce n’est finalement pas la madeleine elle-même, mais ce qu’elle déclenche. Une simple bouchée suffit à faire ressurgir un univers entier : des lieux, des personnes, des sensations et des émotions que l’on croyait oubliés.",
        "Depuis, l’expression « madeleine de Proust » est entrée dans notre langage. Elle désigne cette sensation particulière qu’un goût, une odeur, une musique ou un objet peut provoquer : celle de nous ramener instantanément vers un souvenir.",
        "Et c’est peut-être là que réside toute la magie de la madeleine.",
        "Elle est petite, mais elle peut contenir énormément de choses. Un goûter d’enfance, une cuisine familiale, un dimanche matin, une odeur de beurre chaud, un moment partagé avec ceux que l’on aime.",
        "Chez Madeleine & Léon, c’est cette dimension-là qui nous inspire. Nous voulons faire des madeleines qui ne soient pas seulement bonnes, mais qui puissent, elles aussi, devenir un petit morceau de souvenir.",
        "Parce qu’au fond, une madeleine n’est jamais seulement une madeleine.",
      ],
    },
  ],
  fin: "C’est parfois le goût d’un moment que l’on n’avait pas envie d’oublier.",
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

/**
 * Onglets du menu (ordre d'affichage)
 */
export const navigation = [
  { href: "/histoire", label: "Histoire" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/commandes-et-marches", label: "Commandes & marchés" },
  { href: "/madeleine", label: "Madeleine" },
  { href: "/leon", label: "Léon" },
];

/**
 * Qui sommes-nous — À COMPLÉTER avec les vrais prénoms et textes.
 */
export const equipe = {
  intro:
    "Derrière Madeleine & Léon, il y a une passion simple : faire des madeleines comme on les aime, moelleuses et généreuses, et les partager de vive voix sur les marchés bordelais.",
  membres: [
    {
      prenom: "[Prénom à compléter]",
      role: "Fondation · Pâtisserie · Stand",
      bio: "[Quelques lignes à compléter : parcours, pourquoi les madeleines, la recette de famille, l'envie de lancer la marque en 2026…]",
      photo: "/images/stand-marche.jpg",
      photoPosition: "38% 30%",
      photoAlt: "Au stand Madeleine & Léon, une boîte kraft tendue à un client",
    },
  ],
  valeurs: [
    { titre: "Fait main", texte: "Chaque fournée est préparée à la main, en petites quantités." },
    { titre: "Ingrédients soignés", texte: "Beurre, œufs, farine : pas de colorants ni de conservateurs." },
    { titre: "Le partage", texte: "Des madeleines pensées pour être offertes et partagées." },
  ],
};

export const liens = {
  instagram: "https://www.instagram.com/madeleine.leon.france",
  instagramDM: "https://ig.me/m/madeleine.leon.france",
  instagramHandle: "@madeleine.leon.france",
};
