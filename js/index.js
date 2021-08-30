
// Dichiaro variabili ed inizializzo array cognomi
const lastNames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
let userLastName, position, output;

// DOM
const ul = document.getElementById("list");
const cognome = document.getElementById("cognome");
const send = document.getElementById("send");
const dom_position = document.getElementById("position");
dom_position.style.opacity = 0;

const generateList = () => {

    lastNames.forEach((el, i, arr) => {
        arr[i] = el.toLowerCase();
    });
    lastNames.sort();

    ul.innerHTML = "";
    lastNames.forEach((el, i) => {
        let li = document.createElement("li");
        li.innerHTML = el;
        ul.appendChild(li);
    });
}

send.onclick = () => {
    let str = cognome.value.toLowerCase();
    if (!isNaN(str) || str == 0) {
        cognome.value = "";
        return;
    }
    lastNames.push(str);

    cognome.value = "";
    generateList();

    if (dom_position.style.opacity == 0) dom_position.style.opacity = 1;
    dom_position.innerHTML = "Sei alla posizione: " + parseInt(lastNames.indexOf(str) + 1);
    let ul_li = ul.children[lastNames.indexOf(str)];
    ul_li.classList.add("selected");

}

cognome.addEventListener("keypress", (e) => {
    if (e.key == "Enter") send.onclick();
})

generateList();

// Esercizio 1
// Chiedo cognome all'utente e lo formatto nel seguente modo: "Cognome";
// do userLastName = prompt("Inserisci aaa il tuo cognome:").toLowerCase();
// while (!isNaN(userLastName) || userLastName.length == 0)
// userLastName = userLastName[0].toUpperCase() + userLastName.slice(1);

// Inserisco il cognome dell'utente nell'arrai ed ordino quest'ultimo in ordine alfabetico.
// lastNames.push(userLastName);
// lastNames.sort();

// Formatto la stringa di output
// output = "Utenti:";
// for (let i = 0; i < lastNames.length; i++) output += " " + (i + 1) + ": " + lastNames[i] + ","; output = output.slice(0, -1);
// output += "\nLa tua posizione: " + (lastNames.indexOf(userLastName) + 1);

// Stampo la stringa
// alert(output);


