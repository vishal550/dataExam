var validateinput = document.getElementById("validate");
var resetinput = document.getElementById("reset");

validateinput.addEventListener('click', function () {
	ValidateForm();
});

resetinput.addEventListener('click', function () {
	ResetMessage();
});

function isNumeric(n) {
	return !isNaN(parseInt(n));
}

// Validate the inputs on this page.
function ValidateForm() {
	var regex;

	// Validate name.
	var name = $('#name').val();
	var namemessage = $('#namemessage');
	if (name.length != 0) {
		namemessage.innerHTML
		= 'Valid!';
		namemessage.setAttribute('class', 'green');
	}
	else {
		namemessage.innerHTML = 'Not Valid, it should not be blank!';
		namemessage.setAttribute('class', 'red');
	}

	// Validate age.
	var age = document.getElementById('age').value;
	var agemessage = document.getElementById('agemessage');;
	if (isNumeric(age)) {
		agemessage.innerHTML = 'Valid!';
		agemessage.setAttribute('class', 'green');
	}
	else {
		agemessage.innerHTML = 'Not Valid!';
		agemessage.setAttribute('class', 'red');
	}
}

// Reset any messages that were displayed.
function ResetMessage() {
	var elements = document.getElementsByName('message');
	for (var i = 0; i < elements.length; i++) {
		elements[i].innerHTML = '';
	}
}