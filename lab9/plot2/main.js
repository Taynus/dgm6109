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

// Filter funtion
function filterHomeCooked(value) {
    return value.time > 0; // Solo platos hechos en casa
}

//Sort function
function sortByMood(a, b) {
    return b.mood - a.mood; // Ordenar por humor para visibilidad
}

/* Scales Map data values to pixel coordinates */

// X: Cooking Time (0-100)
let xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([margin, svgWidth - margin * 2]);

// Y: Mastery Level (0-5)
let yScale = d3.scaleLinear()
    .domain([0, 5])
    .range([svgHeight - margin, margin]);

// Radius: Mood Level (0-5)
let radiusScale = d3.scaleLinear()
    .domain([0, 5])
    .range([5, 25]);

/* Filter meals that I prepared in home */
let plot2Circles = svg.selectAll("circle.plot2")
    .data(dataset.filter(filterHomeCooked).sort(sortByMood)) // Exclued "meals out" and put in order the mood level
    .join("circle") // Draw only filter selected
    .classed("plot2", true) // Uso de .classed
    .attr("cx", function(d) { return xScale(d.time); })
    .attr("cy", function(d) { return yScale(d.mastery); })
    .attr("r", function(d) { return radiusScale(d.mood); })
    .attr("fill", function(d) {
        if (d.type == "meat") return "#ff6666";
        if (d.type == "legume") return "#66ff66";
        if (d.type == "pasta") return "#1515ff";
        return "#f2ff00";
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

// Axis Label
svg.append("text")
    .attr("x", (svgWidth - margin) / 2)
    .attr("y", svgHeight - 15)
    .attr("text-anchor", "middle")
    .text("Cooking Time (0-100 min)");

svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", 25)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .text("Mastery Level (0-5)");

// Drawing the Key (Legend) for circle sizes
let keyX = svgWidth - 100;
let keyYStart = 150;

// Legend box
svg.append("rect")
    .attr("x", keyX - 75).attr("y", keyYStart - 75)
    .attr("width", 165).attr("height", 400)
    .attr("fill", "none").attr("stroke", "black");

svg.append("text")
    .attr("x", keyX - 60).attr("y", keyYStart - 50)
    .style("font-weight", "bold").text("Mood Level:");

// Legend mood level
// Mood 1
svg.append("circle")
    .attr("cx", keyX - 40).attr("cy", keyYStart)
    .attr("r", radiusScale(1)).attr("fill", "black");

svg.append("text")
    .attr("x", keyX - 10).attr("y", keyYStart + 5).text("Level 1");

// Mood 2
svg.append("circle")
    .attr("cx", keyX - 40).attr("cy", keyYStart + 50)
    .attr("r", radiusScale(3)).attr("fill", "black");

svg.append("text")
    .attr("x", keyX - 10).attr("y", keyYStart + 55).text("Level 3");

// Mood 3
svg.append("circle")
    .attr("cx", keyX - 40).attr("cy", keyYStart + 100)
    .attr("r", radiusScale(5)).attr("fill", "black");

svg.append("text")
    .attr("x", keyX - 10).attr("y", keyYStart + 105).text("Level 5");

// Border
svg.append("rect")
    .attr("fill", "none").attr("stroke", "black")
    .attr("width", svgWidth).attr("height", svgHeight);


// Color legend
let colorKeyY = 350;

svg.append("text")
    .attr("x", keyX - 60)
    .attr("y", colorKeyY - 20)
    .style("font-weight", "bold")
    .text("Dish Type:");

// Meat
svg.append("circle")
    .attr("cx", keyX - 40)
    .attr("cy", colorKeyY)
    .attr("r", 8)
    .attr("fill", "#ff6666");

svg.append("text")
    .attr("x", keyX - 10)
    .attr("y", colorKeyY + 5)
    .text("Meat");

// Legume
svg.append("circle")
    .attr("cx", keyX - 40)
    .attr("cy", colorKeyY + 30)
    .attr("r", 8)
    .attr("fill", "#66ff66");

svg.append("text")
    .attr("x", keyX - 10)
    .attr("y", colorKeyY + 35)
    .text("Legume");

// Pasta
svg.append("circle")
    .attr("cx", keyX - 40)
    .attr("cy", colorKeyY + 60)
    .attr("r", 8)
    .attr("fill", "#1515ff");

svg.append("text")
    .attr("x", keyX - 10)
    .attr("y", colorKeyY + 65)
    .text("Pasta");

// Others
svg.append("circle")
    .attr("cx", keyX - 40)
    .attr("cy", colorKeyY + 90)
    .attr("r", 8)
    .attr("fill", "#f2ff00");

svg.append("text")
    .attr("x", keyX - 10)
    .attr("y", colorKeyY + 95)
    .text("Other");