export const MenuSite = () => {
    let navbar = document.querySelector(".navbar-1");
    if (navbar) {
        navbar.innerHTML =`
        
        <header class="navbar-1">
            <div class="mobile-first">
                <div class="logo">
                    <h3>Ivoire-Shop</h3>
                </div>
                <button class="bouton" onclick="AfficheMenu()">
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                </button>
            </div>
            <div class="liens">
                <ul>
                    <li><a href="index.html">ACCUEIL</a></li>
                    <li><a href="achat.html">ACHAT</a></li>
                    <li><a href="#inventaire.html">INVENTAIRE</a></li>
                    <li><a href="detail.html">DETAIL</a></li>
                    <li><a href="#produits.html">PRODUITS</a></li>
                </ul>
            </div>
        </header> `
    }
}