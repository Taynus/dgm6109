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

function evaluateAnswers() {
    let subtotal = price * amount;
    let discount = 0;

    // Pizza & Salad
    if (price === 12) {
        if (userZip.startsWith("9")) {
            output("e. coli outbreak, Pizza & Salad is not available in this region");
            return false;
        }
    }

    // DIAMOND: ¿3 or more? (For Pizza and Hamburger)
    if (amount >= 3) {
        if (price === 12) {
            discount = subtotal * 0.25;
        }
        if (price === 8) {
            discount = subtotal * 0.25;
        }
    }

    let total = subtotal - discount;

    output("Subtotal: $" + subtotal.toFixed(2) + 
           "\nDiscount: -$" + discount.toFixed(2) + 
           "\nTotal: $" + total.toFixed(2));
    
    return true; 
}