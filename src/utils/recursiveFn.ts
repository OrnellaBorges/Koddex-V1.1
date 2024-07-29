let allDatasTable = [];
export {};
const sets = [
  {
    setId: "",
    name: "",
    year: "",
    theme: "",
    inventories: [
      {
        partNum: "",
        quantity: "",
        setId: "",
        color: "",
        name: "",
      },
    ],
  },
];

const inventories = [
  {
    partNum: "",
    quantity: "",
    setId: "",
    color: "",
    name: "",
  },
];

const partList = [
  {
    partNum: "",
    name: "",
    category: "",
  },
];

/// RECURSIVE FONCTION POUR CREER DES NOEUD ENFANTS ////

/* const recursiveFunction = (element: string) => {
  if (element) {
    //Trouver des enfants
    //.filter()
    // const resultat = ...
    // Si le filter donne des choses alors resultat = elementFiltrés
    // Sinon resultat = null;

    if (element.theme) {
      element.inventory = resultat;
      recursiveFunction(element.inventory);
    }
    else {
      element.parts = resultat;
      recursiveFunction(element.parts);
    }
  }
}; */
