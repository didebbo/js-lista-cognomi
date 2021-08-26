// Dichiaro variabili ed inizializzo array cognomi
const lastNames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
let userLastName, position, output;

// Chiedo cognome all'utente e lo formatto nel seguente modo: "Cognome";
do userLastName = prompt("Inserisci aaa il tuo cognome:").toLowerCase();
while (!isNaN(userLastName) || userLastName.length == 0)
userLastName = userLastName[0].toUpperCase() + userLastName.slice(1);

// Inserisco il cognome dell'utente nell'arrai ed ordino quest'ultimo in ordine alfabetico.
lastNames.push(userLastName);
lastNames.sort();

// Formatto la stringa di output
output = "Utenti:";
for (let i = 0; i < lastNames.length; i++) output += " " + (i + 1) + ": " + lastNames[i] + ","; output = output.slice(0, -1);
output += "\nLa tua posizione: " + (lastNames.indexOf(userLastName) + 1);

// Stampo la stringa
alert(output);
