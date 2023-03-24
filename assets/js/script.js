// Inputs radio Join , Contact , Donate
const inputRadios = document.querySelectorAll('input#join, input#contact, input#donate');

//Email & text inputs
const allInputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');

//form
const form = document.querySelector('form');

let lastname, firstname, email, messageArea;

//fonction pour changer l'attribut checked
const changeAttribute = () => {
	checkContent.addEventListener('change', (e) => {
		//Boucle pour parcourir les inputs radio
		for (let i = 0; i < inputRadios.length; i++) {
			//Si l'input radio n'est pas le même que celui coché
			if (inputRadios[i].id !== inputRadios[i].checked) {
				//Alors on enlève l'attribut checked
				inputRadios[i].removeAttribute('checked', '');
				//Et on ajoute l'attribut checked à l'input radio coché
				e.target.setAttribute('checked', 'true');
			}
		}
	});
};

const inputRadiosDisplay = () => {};

//Functions display error message
const errorDisplay = (tag, message, valid) => {
	const containers = document.querySelector('.' + tag + '-container');
	const spans = document.querySelector('.' + tag + '-container > span');

	if (!valid) {
		containers.classList.add('error');
		spans.textContent = message;
	} else {
		containers.classList.remove('error');
		spans.textContent = message;
	}
};

//Function for checking lastname
const lastnameChecker = (value) => {
	if (value.length > 0 && (value.length < 2 || value.length > 20)) {
		errorDisplay('lastname', 'Veuillez saisir entre 2 et 20 caractères pour le champ du nom.');
		lastname = null;
	} else if (!value.match(/^[a-zA-Z]+$/)) {
		errorDisplay('lastname', 'Veuillez saisir uniquement des lettres pour le champ du nom.');
		lastname = null;
	} else {
		errorDisplay('lastname', '', true);
		lastname = value;
	}
};
//Function for checking firstname
const firstnameChecker = (value) => {
	if (value.length > 0 && (value.length < 2 || value.length > 20)) {
		errorDisplay('firstname', 'Veuillez saisir entre 2 et 20 caractères pour le champ du prénom.');
		firstname = null;
	} else if (!value.match(/^[a-zA-Z]+$/)) {
		errorDisplay('firstname', 'Veuillez saisir uniquement des lettres pour le champ du prénom.');
		firstname = null;
	} else {
		errorDisplay('firstname', '', true);
		firstname = value;
	}
};
//Function for email address
const emailChecker = (value) => {
	if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
		errorDisplay('email', "L'e-mail n'est pas valide.");
		email = null;
	} else {
		errorDisplay('email', '', true);
		email = value;
	}
};
//Function for checking message area
const messageAreaChecker = (value) => {
	if (value.length > 0 && value.length < 10) {
		errorDisplay('messageAera', 'Veuillez saisir au moins 10 caractères pour le champ du message.');
		messageArea = null;
	} else {
		errorDisplay('messageAera', '', true);
		messageArea = value;
	}
};
//Function for checking values of all inputs
allInputs.forEach((inputChoiced) => {
	inputChoiced.addEventListener('input', (e) => {
		// console.log(e.target.id); // Vérification de l'id de l'input
		switch (e.target.id) {
			case 'lastname':
				lastnameChecker(e.target.value);
				break;
			case 'firstname':
				firstnameChecker(e.target.value);
				break;
			case 'email':
				emailChecker(e.target.value);
				break;
			case 'messageArea':
				messageAreaChecker(e.target.value);
				break;

			default:
				null;
				break;
		}
	});
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	// If all inputs are valid then send data "to the server"
	if (lastname && firstname && email && messageArea) {
		const data = { lastname, firstname, email, messageArea };
		console.log(data);
		// Reset all inputs
		lastname = null;
		firstname = null;
		email = null;
		messageArea = null;
		alert("Formulaire validé pour l'exercice !");
	} else {
		alert('Tous les champs ne sont pas valides.');
	}
});
