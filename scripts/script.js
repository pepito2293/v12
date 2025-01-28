/* --- Styles globaux pour la page --- */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #c4e7fd;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
}

/* --- Style du logo --- */
.logo {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100px;
    height: 100px;
}

/* --- Style du titre principal (h1) --- */
h1 {
    font-size: 40px;
    font-weight: bold;
    color: #000000;
    text-shadow: 0px 0px 0px #000000;
    margin-top: 20px;
    text-align: center;
}

/* --- Vague décorative sous le titre --- */
.wave {
    background-color: #ffd700;
    height: 30px;
    width: 100%;
    border-radius: 50% 50% 0 0;
    transform: rotate(180deg);
    margin-bottom: 20px;
}

/* --- Section des boutons d'action --- */
.actions {
    margin-top: 20px;
}

.actions button {
    padding: 15px 30px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background-color: #ffd700;
    color: #000000;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s, box-shadow 0.2s;
}

.actions button:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
}

/* --- Curseur pour ajuster les tailles --- */
.slider-container {
    margin: 20px 0;
    width: 100%;
}

.slider-label {
    display: block;
    font-size: 1rem;
    color: #000;
    margin-bottom: 10px;
    text-align: center;
}

input[type="range"] {
    width: 300px;
    margin: 0 auto;
    display: block;
}

/* --- Table de personnalisation des émojis --- */
#emojiTable {
    margin: 20px auto;
    border-collapse: collapse;
    width: 90%;
    background-color: #ffffff !important;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important;
}

#emojiTable th, #emojiTable td {
    border: 1px solid #ddd !important;
    padding: 12px 15px !important;
    text-align: center !important;
    background-color: #ffffff !important;
}

#emojiTable th {
    background-color: #ffd700 !important;
    color: #000 !important;
}

/* Style pour le conteneur du bouton "Choisir un fichier" */
.bouton-container {
    position: relative; /* Pour positionner le label par-dessus l'input */
    display: inline-block; /* Pour que le conteneur occupe la largeur du bouton */
}

/* Style pour masquer l'input de type fichier */
.bouton-container input[type="file"] {
    position: absolute; /* Pour masquer l'input de manière absolue */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0; /* Pour rendre l'input invisible */
    cursor: pointer; /* Pour que le curseur change au survol du bouton */
}

/* Style pour le label (bouton personnalisé) */
.bouton-container label {
    padding: 10px 20px !important;
    background-color: #ffd700 !important;
    color: #000 !important;
    border: none !important;
    border-radius: 5px !important;
    cursor: pointer !important;
    display: inline-block; /* Pour que le label se comporte comme un bouton */
}

.bouton-container label:hover {
    background-color: #e6c200 !important;
}

#emojiTable button {
    padding: 10px 20px !important;
    background-color: #ffd700 !important;
    color: #000 !important;
    border: none !important;
    border-radius: 5px !important;
    cursor: pointer !important;
}

#emojiTable button:hover {
    background-color: #e6c200 !important;
}

/* --- Grille des cartes --- */
.card-container-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}

.card-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 25px;
    justify-content: center;
}

/* --- Style des cartes --- */
.card {
    width: 250px;
    height: 250px;
    border: 3px solid #000000;
    background: linear-gradient(135deg, #ffffff, #f9f9f9);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    position: relative;
}

/* --- Style des émojis ou images dans les cartes --- */
.symbol {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    user-select: none;
    transition: transform 0.1s ease;
    border: none;
    background: none;
    border-radius: 0;
}

.symbol img {
    max-width: 100%;
    max-height: 100%;
    display: block;
}

/* --- Contrôle de taille d'émoji --- */
.size-control {
    display: none;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.9);
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    gap: 10px;
}

.size-control label {
    font-size: 1rem;
    color: #000;
}

.size-control input {
    width: 150px;
}

/* --- Pied de page --- */
footer {
    margin-top: 20px;
    text-align: center;
    color: #000;
}

footer p {
    margin: 10px 0;
}

/* --- Menu hamburger --- */
.hamburger-menu {
    position: absolute;
    top: 20px;
    right: 20px;
}

#menu-toggle {
    display: none;
}

.menu-icon {
    font-size: 2rem;
    cursor: pointer;
}

.menu-items {
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: #ffd700
