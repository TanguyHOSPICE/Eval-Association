function resultat() {
	let result = document.querySelector('#result');
	let formulaire = document.forms.form1;
	result.textContent = formulaire.elements.composant.value;
}

let bouton = document.querySelector('#bouton');
let selecteur = document.querySelector('#selecteur');

bouton.addEventListener('click', resultat);
selecteur.addEventListener('change', resultat);
