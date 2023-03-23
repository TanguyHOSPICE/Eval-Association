// Inputs radio Join , Contact , Donate
const inputsRadio = document.querySelectorAll('input#join, input#contact, input#donate');

//Inputs textarea
const inputsTextarea = document.querySelectorAll('textarea');

const allInputs = document.querySelectorAll('input[type="text"], input[type="email"]');

let lastname, firstname, email, messageArea;

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

			default:
				null;
				break;
		}
	});
});
