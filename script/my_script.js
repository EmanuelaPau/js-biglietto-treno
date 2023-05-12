// Ask length of the trip
const kilometers = parseInt(prompt("quanti chilometri devi percorrere?"));

// Lenght of the trip written in numbers verification
console.log(typeof kilometers)
if (isNaN(kilometers)) {
    console.log("C'è un errore nella compilazione dei chilometri da percorrere")
    document.getElementById("alert").innerHTML = `È stato rilevato un errore nel campo: chilometri da percorrere. Per favore ricaricare la pagina e riscrivere il numero di chilometri in forma numerica`;

    throw new Error("Age was badly written!");
}


// Ask passenger Age
const passengerAge = parseInt(prompt("quanti anni hai?"));
console.log(passengerAge);

// Age written in numbers verification
console.log(typeof passengerAge)
if (isNaN(passengerAge)) {
    console.log("C'è un errore nella compilazione dell'età")
    document.getElementById("alert").innerHTML = `È stato rilevato un errore nel campo: età del passeggero. Per favore ricaricare la pagina e riscrivere l'età in forma numerica`;

    throw new Error("Age was badly written!");
}


// Calc ticket price: 0.21 € al km)
const fullTicketPrice = kilometers * 0.21;
console.log(`Your not discounted ticket price is: ${fullTicketPrice} Euros`);


// Add discounted ticket variable
let discountedticketPrice;

if (passengerAge < 18) {
    // allora applica sconto del 20 % sul prezzo totale 
    discountedticketPrice = fullTicketPrice - (fullTicketPrice * 0.2);

    // Print result to page 
    document.getElementById("your-ticket-price").innerHTML = `Il prezzo intero del tuo biglietto è: ${fullTicketPrice}€.`;

    document.getElementById("your-discounted-ticket-price").innerHTML = `Hai diritto allo sconto giovani del 20%, per cui il prezzo finale del tuo biglietto è: ${discountedticketPrice}€`;

} else if (passengerAge > 65) {
    // allora applica sconto del 40 % sul prezzo totale 
    discountedticketPrice = fullTicketPrice - (fullTicketPrice * 0.4);
    // Print result to page 
    document.getElementById("your-ticket-price").innerHTML = `Il prezzo intero del suo biglietto è: ${fullTicketPrice}€.`;

    document.getElementById("your-discounted-ticket-price").innerHTML = `Ha diritto allo sconto anziani del 40%, per cui il prezzo finale del suo biglietto è: ${discountedticketPrice}€`;
} else {
    // Print result to page 
    document.getElementById("your-ticket-price").innerHTML = `Il prezzo del tuo biglietto è: ${fullTicketPrice}€`;

}

// Fix result with two decimals
discountedticketPrice = discountedticketPrice.toFixed(2);

console.log(`Your discounted ticket price is: ${discountedticketPrice} Euros`);

// // Print result to page 
// document.getElementById("your-ticket-price").innerHTML = `Il prezzo del tuo biglietto è: ${discountedticketPrice}€`;