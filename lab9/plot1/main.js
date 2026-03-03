"use strict"

/* Configuration variables: drawing */
let svgWidth = 900;
let svgHeight = 600;
let margin = 65; // Extra margin for clear labels

/* Resize container div */
d3.select("#container").style("width", String(svgWidth) + "px");

/* Create the SVG canvas */
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Data */
let dataset = [
    { dish: "Chicken fajitas", time: 41, mastery: 3, mood: 3, type: "meat" },
    { dish: "Lima Beans", time: 90, mastery: 2, mood: 3, type: "legume" },
    { dish: "Lentils", time: 70, mastery: 2, mood: 4, type: "legume" },
    { dish: "Lentils Leftovers", time: 10, mastery: 1, mood: 4, type: "legume" },
    { dish: "Quinoa and chicken", time: 34, mastery: 2, mood: 5, type: "meat" },
    { dish: "Chicken Salad", time: 23, mastery: 3, mood: 3, type: "meat" },
    { dish: "Spaghetti Bolognese", time: 20, mastery: 2, mood: 5, type: "pasta" },
    { dish: "Burgers & Fries", time: 25, mastery: 3, mood: 4, type: "meat" },
    { dish: "Tuna with rice", time: 23, mastery: 3, mood: 3, type: "meat" },
    { dish: "Soup (Eat out)", time: 0, mastery: 0, mood: 0, type: "soup" },
    { dish: "Soup (Home)", time: 35, mastery: 2, mood: 4, type: "soup" },
    { dish: "McDonalds (Eat out)", time: 0, mastery: 0, mood: 1, type: "meat" },
];

/* Visualization of cooking experiences on Array.filter()
*/
let highMoodData = dataset.filter(function(d) {
    return d.mood >= 3; 
});

/* This prevents smaller circles from being hidden behind larger ones.
*/
highMoodData.sort(function(a, b) {
    return b.time - a.time;
});

/* Scales Map data values to pixel coordinates */

// X: Mastery (1-5)
let xScale = d3.scaleLinear()
    .domain([0, 5])
    .range([margin, svgWidth - margin * 2]);

// Y: Mood (1-5)
let yScale = d3.scaleLinear()
    .domain([0, 5])
    .range([svgHeight - margin, margin]);

// Radius: Cooking Time (Minutes)
let radiusScale = d3.scaleLinear()
    .domain([0, 100])
    .range([5, 25]);

/* Create circles for each data point */
highMoodData.sort(function (a, b) {
    return b.time - a.time;
});

/* 2. Crear los círculos con 4 propiedades */
svg.selectAll("circle")
    .data(highMoodData)
    .join("circle")
    .attr("cx", function (d) {
        return xScale(d.mastery);
    })
    .attr("cy", function (d) {
        return yScale(d.mood);
    })
    .attr("r", function (d) {
        return radiusScale(d.time);
    })
    .attr("fill", function (d) {
        // Lógica condicional para la 4ta propiedad (Color)
        if (d.type == "meat") { return "#ff6666"; }
        else if (d.type == "legume") { return "#66ff66"; }
        else if (d.type == "pasta") { return "#1515ff"; }
        else { return "#f2ff00"; }
    })
    .attr("stroke", "white")
    .style("opacity", 0.8);

/* Draw canvas and margin borders */

// Main canvas border
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// Inner margin border (dashed line)
// svg.append("rect")
//     .attr("fill", "none")
//     .attr("stroke", "black")
//     .attr("stroke-dasharray", "5")
//     .attr("x", margin)
//     .attr("y", margin)
//     .attr("width", svgWidth - margin * 2)
//     .attr("height", svgHeight - margin * 2);


/* Title the axes and mark key coordinates */

// X Axis Label
svg.append("text")
    .attr("x", (svgWidth - margin) / 2)
    .attr("y", svgHeight - 15)
    .attr("text-anchor", "middle")
    .text("Mastery Level (1-5)");

// Y Axis Label (Rotated)
svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", 25)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .text("Mood Score (1-5)");

// Axis Values
svg.append("text")
    .attr("x", margin - 10)
    .attr("y", margin)
    .attr("text-anchor", "end")
    .text("5");

svg.append("text")
    .attr("x", margin - 10)
    .attr("y", svgHeight - margin)
    .attr("text-anchor", "end")
    .text("0");

svg.append("text")
    .attr("x", svgWidth - margin)
    .attr("y", svgHeight - margin + 20)
    .attr("text-anchor", "middle")
    .text("5");

// Drawing the Key (Legend) for circle sizes
let keyX = svgWidth - 100;
let keyYStart = 150;

svg.append("text")
    .attr("x", keyX - 60)
    .attr("y", keyYStart - 50)
    .style("font-weight", "bold")
    .text("Time (Min):");

svg.append("circle")
    .attr("cx", keyX - 40)
    .attr("cy", keyYStart)
    .attr("r", radiusScale(10))
    .attr("fill", "black");

svg.append("text")
    .attr("x", keyX - 10)
    .attr("y", keyYStart + 5)
    .text("10m");

svg.append("circle").attr("cx", keyX)
    .attr("cx", keyX - 40)
    .attr("cy", keyYStart + 50)
    .attr("r", radiusScale(50))
    .attr("fill", "black");

svg.append("text")
    .attr("x", keyX - 10)
    .attr("y", keyYStart + 55)
    .text("50m");

svg.append("circle")
    .attr("cx", keyX - 40)
    .attr("cy", keyYStart + 100)
    .attr("r", radiusScale(100))
    .attr("fill", "black");

svg.append("text")
    .attr("x", keyX - 10)
    .attr("y", keyYStart + 105)
    .text("100m");

// Color Legend

let colorKeyY = 380;

svg.append("text") // Title
    .attr("x", keyX - 60)
    .attr("y", colorKeyY - 20)
    .style("font-weight", "bold")
    .text("Dish Type:");

// Meat (Red)
svg.append("circle")
    .attr("cx", keyX - 40)
    .attr("cy", colorKeyY)
    .attr("r", 8)
    .attr("fill", "#ff6666");

svg.append("text")
    .attr("x", keyX - 10)
    .attr("y", colorKeyY + 5)
    .text("Meat");

// Legume (Green)
svg.append("circle")
    .attr("cx", keyX - 40)
    .attr("cy", colorKeyY + 30)
    .attr("r", 8)
    .attr("fill", "#66ff66");

svg.append("text")
    .attr("x", keyX - 10)
    .attr("y", colorKeyY + 35)
    .text("Legume");

// Pasta (Blue)
svg.append("circle")
    .attr("cx", keyX - 40)
    .attr("cy", colorKeyY + 60)
    .attr("r", 8)
    .attr("fill", "#1515ff");

svg.append("text")
    .attr("x", keyX - 10)
    .attr("y", colorKeyY + 65)
    .text("Pasta");

// Others (Yellow)
svg.append("circle")
    .attr("cx", keyX - 40)
    .attr("cy", colorKeyY + 90)
    .attr("r", 8)
    .attr("fill", "#f2ff00");

svg.append("text")
    .attr("x", keyX - 10)
    .attr("y", colorKeyY + 95)
    .text("Others");