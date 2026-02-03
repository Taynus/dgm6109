"use strict"

let price;
let amount;
let userZip;

document.getElementById("submit").addEventListener("click", processForm);

document.getElementById("reset").addEventListener("click", function () {
    // Resetting page to clear all fields and hide/show buttons
    location.reload();
});

function processForm() {
    price = Number(document.getElementById("comboSelect").value);
    amount = Number(document.getElementById("quantityInput").value);
    userZip = document.getElementById("zip").value;

    let evaluationCompleted = false; // status tracker for process completion

    if (validateData()) {
        evaluationCompleted = evaluateAnswers();
    }

    if (evaluationCompleted) {
        document.getElementById("submit").toggleAttribute("hidden");
        document.getElementById("reset").toggleAttribute("hidden");
    }
}

/*
Validates input for ZIP and ensures quantity is a valid positive number
Returns true if all validations pass, false if an error alert is triggered
 */
function validateData() {
    // Confirm the zip has 5 digits
    if (userZip.length !== 5) {
        alert("Error: ZIP invalid");
        return false;
    }

    // This code confirm that the user use only numbers
    if (isNaN(amount)) {
        alert("Please enter a number for quantity");
        return false;
    }

    // Check if the quantity is a positive number
    if (amount < 1) {
        alert("Please enter a positive number");
        return false;
    }

    return true;
}

/*
Calculates subtotal
Applies discounts and process the total
 */
function evaluateAnswers() {
    let subtotal = price * amount; // base calculation
    let discount = 0; // temporary variable for calculated discount amount

    // Check if Pizza is selected and the zip starts with 9
    if (price == 12) {
        if (userZip.startsWith("9")) {
            output("e. coli outbreak, Pizza & Salad is not available in this region");
            return false;
        }
    }

    // Apply 25% only for 3 or more orders of Pizza or Hamburgers
    if (amount >= 3) {
        // Check if Pizza
        if (price == 12) {
            discount = subtotal * 0.25;
        }
        // Check if Hamburger
        if (price == 8) {
            discount = subtotal * 0.25;
        }
    }

    let total = subtotal - discount;

    // Formatting output with two decimals and newlines for readability
    output("Subtotal: $" + subtotal.toFixed(2) +
        "\nDiscount: -$" + discount.toFixed(2) +
        "\nTotal: $" + total.toFixed(2));

    return true;
}