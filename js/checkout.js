
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email

	const pattern1 = /^[a-záéíóúäëïöüàèìòùñ\s\']{3,20}$/i;
	const pattern2 = /^[0-9]{3,20}$/;
	const pattern3 = /^((?=.*[0-9])(?=.*[a-z])).{3,20}$/i;
	const pattern4 = /^[0-9a-z_\-\.]+@[0-9a-z\-\.]+\.[a-z]{2,4}$/i;
	
	//NOMBRE	
	if(!pattern1.test(fName.value)){
		error++;
		fName.setAttribute("class","form-control is-invalid")
	} else {
		fName.setAttribute("class","form-control")
	}

	//APELLIDO
	if(!pattern1.test(fLastN.value)){
		error++;
		fLastN.setAttribute("class","form-control is-invalid")
	} else {
		fLastN.setAttribute("class","form-control")
	}

	//DIRECCION
	if(!fAddress.value || fAddress.value.length <= 3){
		error++;
		fAddress.setAttribute("class","form-control is-invalid")
	} else {
		fAddress.setAttribute("class","form-control")
	}

	//TELEFONO
	if(!pattern2.test(fPhone.value)){
		error++;
		fPhone.setAttribute("class","form-control is-invalid")
	} else {
		fPhone.setAttribute("class","form-control")
	}

	//CONTRASEÑA
	if(!pattern3.test(fPassword.value)){
		error++;
		fPassword.setAttribute("class","form-control is-invalid")
	} else {
		fPassword.setAttribute("class","form-control")
	}

	//EMAIL
	if(!pattern4.test(fEmail.value)){
		error++;
		fEmail.setAttribute("class","form-control is-invalid")
	} else {
		fEmail.setAttribute("class","form-control")
	}
	 
	if(error == 0){
		alert("Tu información ha sido enviada correctamente :)");
	} else {
		return(false);
	}
}
