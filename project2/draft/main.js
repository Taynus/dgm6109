"use strict"

let price;
let amount;
let userZip;

document.getElementById("submit").addEventListener("click", processForm);

document.getElementById("reset").addEventListener("click", function () {
    clear(); 
    document.getElementById("submit").toggleAttribute("hidden");
    document.getElementById("reset").toggleAttribute("hidden");
});

function processForm() {
    price = Number(document.getElementById("comboSelect").value);
    amount = Number(document.getElementById("quantityInput").value);
    userZip = document.getElementById("zip").value;

    let evaluationCompleted = false;

    if (validateData()) {
        evaluationCompleted = evaluateAnswers();
    }

    if (evaluationCompleted) {
        document.getElementById("submit").toggleAttribute("hidden");
        document.getElementById("reset").toggleAttribute("hidden");
    }
}

function validateData() {
    
// DIAMOND: ZIP is 5 digits
if (userZip.length !== 5 || isNaN(amount)) {
        output("Please enter a valid ZIP number!");
        valid = false;
    }

    console.log("All form data is valid");
    return true;
}

 // DIAMOND: ¿3 or more? (For Pizza and Hamburger)
function evaluateAnswers() {
    let subtotal = price * amount;
    let discount = 0;

// Pizza & Salad e. coli message
// If the user select the Pizza combo and the Zip code start with 9, the message appear
    if (price === 12) {
        if (userZip.startsWith("9")) {
            output("e. coli outbreak, Pizza & Salad is not available in this region");
            return false;
        }
    }

// DIAMOND: ¿3 or more? (For Pizza and Hamburger)
// If th user select 3 or more combos of Pizza or Hamburger, the discount is applied
    if (amount >= 3) {
        if (price === 12) {
            discount = subtotal * 0.25;
        }
        if (price === 8) {
            discount = subtotal * 0.25;
        }
    }


// Here is the operation to obtain the total of the order, with or without discount
    let total = subtotal - discount;

    output("Subtotal: $" + subtotal.toFixed(2) + 
           "\nDiscount: -$" + discount.toFixed(2) + 
           "\nTotal: $" + total.toFixed(2));
    
    return true; 
}