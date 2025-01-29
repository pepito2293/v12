// Liste des émojis par défaut
const defaultEmojis = [
  "🍓", "🍕", "🍔", "🌵", "🐱", "🐟", "🎸", "🎨", "📱", "🚗",
  "🍦", "🥑", "🦄", "🌙", "🔥", "🎶", "💻", "🐻", "🍩", "🏀",
  "🌈", "🍿", "🥂", "🍹", "🎁", "🏞️", "🚀", "🎧", "👑", "⚽",
  "📚", "🎂", "🍪", "🌻", "🎀", "🐶", "🍇", "🌎", "🍉", "🎤",
  "🎯", "🍋", "🎹", "🐾", "🪐", "🛴", "🦋", "🍫", "🐨", "🍒",
  "🌴", "🚲", "🎮", "⚡", "⭐", "🌟", "☕"
];

// Fonction pour charger les émojis personnalisés depuis `localStorage`
function loadEmojiList() {
  const storedEmojis = localStorage.getItem("emojiList");
  return storedEmojis ? JSON.parse(storedEmojis) : [...defaultEmojis];
}

// Fonction pour sauvegarder les émojis dans `localStorage`
function saveEmojiList() {
  localStorage.setItem("emojiList", JSON.stringify(emojiList));
}

// Initialisation de la liste d'émojis (personnalisée ou par défaut)
let emojiList = loadEmojiList();

// Fonction pour remplir le tableau des émojis personnalisables
function populateEmojiTable() {
  const tableBody = document.getElementById("emojiTable").querySelector("tbody");
  tableBody.innerHTML = "";

  emojiList.forEach((emoji, index) => {
    const row = document.createElement("tr");

    // Colonne Numéro
    const numberCell = document.createElement("td");
    numberCell.textContent = index + 1;
    row.appendChild(numberCell);

    // Colonne Émoji actuel
    const emojiCell = document.createElement("td");
    if (emoji.startsWith("data:image")) {
      emojiCell.innerHTML = `<img src="${emoji}" width="20" height="20">`;
    } else {
      emojiCell.textContent = emoji;
    }
    emojiCell.id = `current-emoji-${index}`;
    row.appendChild(emojiCell);

    // Colonne Nouvelle image (Correction appliquée)
    const inputCell = document.createElement("td");

    // Crée un bouton personnalisé pour ajouter une image
    const uploadButton = document.createElement("label");
    uploadButton.className = "custom-file-upload";
    uploadButton.textContent = "Ajouter un fichier";

    // Crée un champ de téléchargement caché
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.dataset.index = index;
    fileInput.style.display = "none"; // CACHE l'input pour éviter l'affichage du texte

    // Ajoute un écouteur d'événement pour détecter le choix du fichier
    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          emojiList[index] = e.target.result;
          saveEmojiList();
          populateEmojiTable();
          generateCards();
        };
        reader.readAsDataURL(file);
      }
    });

    // Relie le bouton au champ input
    uploadButton.addEventListener("click", () => {
      fileInput.click(); // Simule un clic sur l'input caché
    });

    // Ajoute le bouton et l'input à la cellule
    inputCell.appendChild(uploadButton);
    inputCell.appendChild(fileInput);
    row.appendChild(inputCell);

    // Colonne Action (Réinitialisation)
    const actionCell = document.createElement("td");
    const resetButton = document.createElement("button");
    resetButton.textContent = "Réinitialiser";
    resetButton.onclick = () => resetEmoji(index);
    actionCell.appendChild(resetButton);
    row.appendChild(actionCell);

    tableBody.appendChild(row);
  });
}

// Fonction pour réinitialiser un émoji
function resetEmoji(index) {
  emojiList[index] = defaultEmojis[index];
  saveEmojiList();
  populateEmojiTable();
  generateCards();
}

// Fonction pour mettre à jour l'affichage des curseurs
function updatePreview() {
  const minSizeInput = document.getElementById("minSize");
  const maxSizeInput = document.getElementById("maxSize");
  document.getElementById("minSizeValue").textContent = `${minSizeInput.value}px`;
  document.getElementById("maxSizeValue").textContent = `${maxSizeInput.value}px`;

  if (parseInt(minSizeInput.value, 10) > parseInt(maxSizeInput.value, 10)) {
    maxSizeInput.value = minSizeInput.value;
    document.getElementById("maxSizeValue").textContent = `${maxSizeInput.value}px`;
  }
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  populateEmojiTable();
  generateCards();

  document.getElementById("minSize").addEventListener("input", () => {
    updatePreview();
    generateCards();
  });

  document.getElementById("maxSize").addEventListener("input", () => {
    updatePreview();
    generateCards();
  });
});
