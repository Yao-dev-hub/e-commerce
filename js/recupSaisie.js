// créer une fonction qui récupère ce que l'utilisateur a saisi

export const RecupeSaisi = () => { 
    // récuperons le input dans la page achat 

    let saisi = document.getElementById("prd");

    //  récuperons le bouton envoyer dans la page achat 

    let envoi = document.getElementById("envoi");

    // créer un tableau qui contient la liste du menu

    let listeMenu = ["fruit","legume","produi laitier","viande"];

    //verifions ce que l'utlisateur a saisi
    for(let i = 0; i <= listeMenu.length;i++ ){
        if(listeMenu[i] === saisi) {
            console.log("correct");
        }
    }


}