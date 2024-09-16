export const FooterSite = () => {

    let footerBar = document.querySelector(".footer");

    if (footerBar) {

        footerBar.innerHTML = `

        <section class="footer">
        <div class="container">
        <div class="row">
           <div class="col-lg-4">
               <div class="logo">
                   <h3>Ivoire-Shop</h3>
               </div>
           </div>
           <div class="col-lg-4">
               <div class="titre-footer">
                   <h3>Nos réseaux sociaux</h3>
               </div>
               <div class="reseaux">
                   <!-- insertion des icones réseaux -->
               </div>
           </div>
           <div class="col-lg-4">
               <div class="titre-footer">
                   <h3>Liens rapides de la page</h3>
               </div>
               <div class="lien-pages">
                   <!-- insertion des icones réseaux -->
                   <ul>
                       <li><a href="indexhtml">ACCUEIL</a></li>
                       <li><a href="achat.html">ACHAT</a></li>
                       <li><a href="inventaire.html">INVENTAIRE</a></li>
                       <li><a href="detail.html">DETAIL</a></li>
                       <li><a href="produits.html">PRODUITS</a></li>
                   </ul>
                </div>
             </div>
            </div>
        </div>
    </section>

`
    }

}