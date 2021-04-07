var nome = prompt("Ciao, come ti chiami?");
var cognome = prompt("E il tuo cognome?");
var colore = prompt("Mi puoi dire il tuo colore preferito?");

var risposta = nome + cognome + colore + "21";

document.getElementById('identita').innerHTML = risposta;