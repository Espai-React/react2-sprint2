// Exercise 6
function validate(event) {
  event.preventDefault();
  let error = 0;
  // Get the input fields
  let fName = document.getElementById('fName');
  let fLastName = document.getElementById('fLastN');
  let fEmail = document.getElementById('fEmail');
  let fPassword = document.getElementById('fPassword');
  let fAddress = document.getElementById('fAddress');
  let fPhone = document.getElementById('fPhone');
  let inputs = [fName, fLastName, fEmail, fPassword, fAddress, fPhone];

  // Get the error elements
  let errorName = document.getElementById('errorName');
  let errorLastName = document.getElementById('errorLastName');
  let errorEmail = document.getElementById('errorEmail');
  let errorPassword = document.getElementById('errorPassword');
  let errorAddress = document.getElementById('errorAddress');
  let errorPhone = document.getElementById('errorPhone');
  let errors = [
    errorName,
    errorLastName,
    errorEmail,
    errorPassword,
    errorAddress,
    errorPhone,
  ];

  // Validate fields entered by the user: name, phone, password, and email
  // Expressions regulars de validació dels inputs
  // 3 caràcters mínim, cap número, i caràcters
  let regExpName = /^[a-zA-Z]{3,}$/;
  let regExpLastName = /^[a-zA-Z]{3,}$/;
  // adreça electrònica valida
  let regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  // 8 caràcters, 1 majúscula, 1 minúscula, 1 número, 1 caràcter especial
  let regExpPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  // 3 caràcters mínim, majúscules, minúscules, caràcters especials
  let regExpAddress = /^[a-zA-Z0-9\s]{3,}$/;
  // 9 números
  let regExpPhone = /^\d{9}$/;
  let regExps = [
    regExpName,
    regExpLastName,
    regExpEmail,
    regExpPassword,
    regExpAddress,
    regExpPhone,
  ];

  let validacio;
  for (let i = 0; i < inputs.length; i++) {
    validacio = regExps[i].test(inputs[i].value);
    if (inputs[i] === '' || !validacio) {
      inputs[i].value = '';
      inputs[i].classList.add('is-invalid');
      errors[i].classList.add('font-bold');
      error++;
    } else {
      inputs[i].classList.remove('is-invalid');
      inputs[i].classList.add('is-valid');
    }
  }

  if (error > 0) {
    alert('Error');
  } else {
    alert('OK');
  }
}
