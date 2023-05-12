// Ask length of the trip
const kilometers = parseInt(prompt("quanti chilometri devi percorrere?"));

// Ask passenger Age
const passengerAge = parseInt(prompt("quanti anni hai?"));

// Lenght of the trip written in numbers &Age written in numbers verification
console.log(typeof passengerAge)
if (isNaN(passengerAge) || (isNaN(kilometers))) {
    console.log("C'è un errore nella compilazione")
    document.getElementById("alert").innerHTML = `È stato rilevato un errore. Per favore ricaricare la pagina e riscrivere in forma numerica`;

    throw new Error("Age was badly written!");
}

// Calc ticket price: 0.21 € al km)
const fullTicketPrice = (kilometers * 0.21).toFixed(2);
console.log(`Your not discounted ticket price is: ${fullTicketPrice} Euros`);


// Add discounted ticket variable
let discountedticketPrice;

if (passengerAge < 18) {
    // allora applica sconto del 20 % sul prezzo totale 
    discountedticketPrice = (fullTicketPrice - (fullTicketPrice * 0.2)).toFixed(2);

    // Print result to page 
    document.getElementById("your-discounted-ticket-price").innerHTML = `Hai diritto allo sconto giovani del 20%, per cui il prezzo finale del tuo biglietto è: ${discountedticketPrice}€`;

} else if (passengerAge > 65) {
    // allora applica sconto del 40 % sul prezzo totale 
    discountedticketPrice = (fullTicketPrice - (fullTicketPrice * 0.4)).toFixed(2);
    // Print result to page 
    document.getElementById("your-discounted-ticket-price").innerHTML = `Ha diritto allo sconto anziani del 40%, per cui il prezzo finale del suo biglietto è: ${discountedticketPrice}€`;
}

// Fix result with two decimals

document.getElementById("your-ticket-price").innerHTML = `${fullTicketPrice}€.`;