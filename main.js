/** *************************    CHAP MARIE   ********************************* */

"use strict";

/******************* VARIABLES **********************/
let form;
let btnADD;

/******************* ARRAY **********************/
let meals = [
  {
    name: "tartiflette",
    quantity: 2,
  },
  {
    name: "poisson pannée",
    quantity: 2,
  },
  {
    name: "raclette",
    quantity: 2,
  },
  {
    name: "fondu savoyarde",
    quantity: 6,
  },
  {
    name: "nouilles sautés",
    quantity: 3,
  },
  {
    name: "uddon sautés",
    quantity: 5,
  },
  {
    name: "gratin dauphinois",
    quantity: 7,
  },
  {
    name: "quenelle brochet braisé",
    quantity: 7,
  },
  {
    name: "tourte de poulet",
    quantity: 2,
  },
  {
    name: "pita à la feta",
    quantity: 2,
  },
];

/******************* FUNCTIONS **********************/

//--------------Afficher le tableau sur le HTML-----------------------------

function displayMeal() {
  let display = document.querySelector("#meals");

  let ul = document.createElement("ul");

  //initialiser un index a 0 afin de l'incrémenter dans la boucle
  let index = 0;
  //-----Début de la boucle FOREACH = affichage des éléments
  meals.forEach((elem) => {
    let li = document.createElement("li");

    li.innerHTML = `${elem.quantity} ${elem.name}(s)`;
    ul.appendChild(li);
    index++;
  });

  //afin de vider le contenu après chaque ajout
  display.innerHTML = "";
  display.appendChild(ul);
  display.insertAdjacentHTML(
    "afterbegin",
    `<h3> Vous avez ${meals.length} plat(s) au menu! cela va vous coûter cher! </h3>`
  );
}

//Recuperer les valeurs de l'input
function recoverInput() {
  let mealRecover = new Object();
  mealRecover.name = document
    .querySelector("input[type=text]")
    .value.toLowerCase();
  mealRecover.quantity = 1;

  //Vérification de saisie invalide, et appelle de la fonction isDoublon
  if (mealRecover.name == "") {
    alert("Veuillez saisir un plat dans le champ saisie plat");
  } else {
    let doublon = isDoublon(mealRecover);
    if (doublon == false) {
      meals.push(mealRecover);
    }
    alert(`${mealRecover.name} à bien été rajouté`);
  }
  displayMeal();
  form.reset();
}

//Verification de doublon dans la saisi affichage d'une popup / alert pour confirmer que le produit à bien été ajouté
function isDoublon(product) {
  //initialisation d'un booleen à false
  let doublon = false;

  //on boucle sur le tableau meals afin de vérifier les doublons
  meals.forEach((line, index) => {
    if (line.name == product.name) {
      //si doublons: incrémenter sur le même index
      meals[index].quantity =
        parseInt(line.quantity) + parseInt(product.quantity);
      doublon = true;
    }
  });
  return doublon;
}

/******************* MAIN CODE **********************/

// chargement du code JS après le chargmement HTML
document.addEventListener("DOMContentLoaded", function () {
  //--------------SELECTORS-------------------//
  form = document.querySelector("form");
  btnADD = document.querySelector("input[type=button]");
  btnADD.addEventListener("click", recoverInput);
  displayMeal();

  //--------------EVENT-------------------//
});
