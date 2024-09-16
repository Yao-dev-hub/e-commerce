//Création d'un objet contenant 4 produits

let listProduits = [

    {
        num : 1,
        designation : "mangue",
        type : "fruit",
        prix_unitaire : 300,
        reduction: "7%",
        condition_de_reduction : "qte>=10",
        quantite_initial : 20,
        quantite_achete : 0,
        quantite_restant : 20,
        total_prix_achat : 0,
        image : URL("img/banniere.jpeg"),
    },
    {
        num : 2,
        designation : "yaourt",
        type : "produit laitier",
        prix_unitaire : 500,
        reduction: "7%",
        condition_de_reduction : "qte>=10",
        quantite_initial : 30,
        quantite_achete : 0,
        quantite_restant : 30,
        total_prix_achat : 0,
        image : URL("img/banniere.jpeg"),
    },
    {
        num : 3,
        designation : "tomate",
        type : "legume",
        prix_unitaire : 100,
        reduction: "7%",
        condition_de_reduction : "qte>=10",
        quantite_initial : 40,
        quantite_achete : 0,
        quantite_restant : 40,
        total_prix_achat : 0,
        image : URL("img/banniere.jpeg"),
    },
    {
        num : 4,
        designation : "poulet",
        type : "viande",
        prix_unitaire : 1000,
        reduction: "7%",
        condition_de_reduction : "qte>=10",
        quantite_initial : 10,
        quantite_achete : 0,
        quantite_restant : 10,
        total_prix_achat : 0,
        image : URL("img/banniere.jpeg"),
    },
]


const AfficheTomate = () => {
    let nbre_aleatoire = Math.floor(Math.random()*4);
    let {num,designation,type,prix_unitaire,quantite_initial,quantite_achete,quantite_restant} = listProduits;
}