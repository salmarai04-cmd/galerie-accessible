// script.js

// Fonction qui ajoute tabindex=0 à chaque <figure> et attache les écouteurs
function ajouterTabIndexEtEvenements() {
  console.log("onload déclenché : ajout des tabindex et écouteurs");

  const figures = document.querySelectorAll("#galerie figure");

  for (let i = 0; i < figures.length; i++) {
    const fig = figures[i];
    // Ajouter tabindex pour navigation clavier
    if (!fig.hasAttribute("tabindex")) fig.setAttribute("tabindex", "0");

    // Gestion souris
    fig.addEventListener("mouseover", () => agrandir(fig));
    fig.addEventListener("mouseleave", () => retrecir(fig));

    // Gestion clavier (focus / blur)
    fig.addEventListener("focus", () => agrandir(fig));
    fig.addEventListener("blur", () => retrecir(fig));
  }
}

// Animation visuelle simple
function agrandir(element) {
  element.style.transform = "scale(1.06)";
  element.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
}

// Revenir à l'état normal
function retrecir(element) {
  element.style.transform = "";
  element.style.boxShadow = "";
}

// Appeler la fonction au chargement DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ajouterTabIndexEtEvenements);
} else {
  ajouterTabIndexEtEvenements();
}
