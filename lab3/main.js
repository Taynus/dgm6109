"use strict"

document.getElementById("submit")
        .addEventListener("click", function () { // Empty Variables

let fahrenheit = document.getElementById("inputF").value; // Correcting Conditional Syntax
let conversionType = document.getElementById("conversionChoice").value; // I stuck in this part, but I resolve with the past resouses

let celsius = (fahrenheit - 32) * 5 / 9
let kelvin = (fahrenheit + 459.67) * 5 / 9

/*
I used the "if" command because I followed the instruction
and was easy to understand at the beginning
*/

if (conversionType === "c")
    {output("Temperature (celsius): " + celsius);
    }

if (conversionType === "k")
    {output("Temperature (kelvin): " + kelvin);
    }

// if (conversionType === "c") {
            // output("Temperature (celsius): " + celsius);
        // } else {output("Temperature (kelvin): " + kelvin);
        // }

// Always show the original temperature
        output("Temperature (fahrenheit): " + fahrenheit);

}); // End
