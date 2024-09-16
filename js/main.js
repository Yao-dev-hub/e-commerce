// Déclaration de la variable de vérification pour savoir le bouton est cliqué ou non cliqué
// par défaut on initialise le bouton à false ; c'est à dire par encore cliqué

let btnClicked = "pas cliqué";

// selecion du container liens

let menuBtn = document.querySelector(".liens");

const AfficheMenu = () => {

    if(btnClicked === "pas cliqué"){

        menuBtn.style.display = "block";
        btnClicked = "cliqué";
    }else {

        menuBtn.style.display = "none";
        btnClicked = "pas cliqué";
    }
}



// IMPORTION DE TOUTES LES DIFFERENTES MODULES DE NOTRE SITE

// Importation de la fonction contenant le header
import { MenuSite } from "./menu.js";

let menus = MenuSite()
console.log(menus)

// Importation de la fonction contenant le footer

import { FooterSite } from "./footer.js";
let footers = FooterSite();
console.log(footers);

// Importation du module RecupeSaisi

import { RecupeSaisi } from "./recupSaisie.js";

RecupeSaisi()

const detailProduit = () => {
    let detailBloc = document.querySelector(".bloc-detail") ;
    if(detailBloc){
        detailBloc.innerHTML = `
            <div class="col-lg-3 bloc-detail">
                    <div class="card p-4">
                        <div class="card-header">
                            <h4>Détails du produits</h4>
                        </div>
                        <div class="card-body">
                            <p>Nom : produits X</p>
                            <p>type : type de produits</p>
                            <p>Prix unitaire : xxx fcfa</p>
                            <p><em>Condition de réduction : si quantité de produits est supérieur à 10</em></p>
                            <p>Quantité d'achat : x</p>
                            <p>Quantité restant : x</p>
                            <ol>
                                <li>Date de création</li>
                                <li>Date d'expiration</li>
                                <li>xxxxxxxxxxxxxx</li>
                                <li>xxxxxxxxxxxxxx</li>
                            </ol>
                        </div>
                    </div>
                </div>
        
        `
    }
}