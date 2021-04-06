var nome = prompt("Ciao, come ti chiami?");
var cognome = prompt("E il tuo cognome?");
var colore = prompt("Mi puoi dire il tuo colore preferito?");

var risposta = "E' un piacere conoscerti " + nome + " " + cognome + ". So che il tuo colore preferito è il " + colore + ".";

document.getElementById('identita').innerHTML = risposta;