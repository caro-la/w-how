// controlla che password rispetti tutti i criteri 
let pw = document.getElementsByClassName('pw');
let salva = document.getElementsByClassName("salva");

// function controllaPassword({ target }) {
//     let password = target.value;
//     if (password.length >= 8, A - Z, a - z, 0 - 9, !$ % /?*+,;:._-°#|\) {
//         return ;
// }
//  if(password.length < 8) {
//         return "La password deve contenere almeno 8 caratteri.";
//     } else if (!A-Z) {
//         return "La password deve cintenere almeno un carattere maiuscolo.";
//     }
// }

// salva.addEventListener("click", controllaPassword);







// controllo sulla validità della password
var ck_password = /^[A-Za-z0-9]{8,20}$/;

// array degli errori
var errors = [];

function validate(form) {

  // definizione delle variabili
  var password = form.password.value;
  var confermapassword = form.confermapassword.value;

  // controllo sugli input
  if (!ck_password.test(password)) {
    errors[errors.length] = "La password deve contenere almeno 8 e massimo 12 caratteri alfanumerici.";
  }

  if (confermapassword != password) {
    errors[errors.length] = "Le password non coincidono.";
  }

  // controllo sulla presenza di errori
  if (errors.length > 0) {
    reportErrors(errors);
    return false;
  }

  return true;
}

// conteggio degli errori
function reportErrors(errors){
  var msg = "Sono stati rilevati i seguenti errori:\n";
  for (var i = 0; i<errors.length; i++) {
    var numError = i + 1;
    msg += "\n" + numError + ". " + errors[i];
  }
  // notifiche di errore
  alert(msg);
}