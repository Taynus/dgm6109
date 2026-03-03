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

/* This allows us to analyze only the dishes actually cooked at home on Array.filter()
*/
let homeCookedData = dataset.filter(function(d) {
    return d.time > 0; 
});

/* This ensures that points with lower mastery don't get covered by higher ones if they overlap
*/
homeCookedData.sort(function(a, b) {
    return b.mood - a.mood;
});

/* Scales Map data values to pixel coordinates */

// X: Cooking Time (0-100)
let xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([margin, svgWidth - margin * 2]);

// Y: Mastery Level (0-5)
let yScale = d3.scaleLinear()
    .domain([0, 5]).range([svgHeight - margin, margin]);

// Radius: Mood Score (1-5)
let radiusScale = d3.scaleLinear()
    .domain([0, 5])
    .range([5, 25]);

svg.selectAll("circle")
    .data(homeCookedData)
    .join("circle")
    .attr("cx", function (d) {
        return xScale(d.time); 
    })
    .attr("cy", function (d) {
        return yScale(d.mastery); 
    })
    .attr("r", function (d) {
        return radiusScale(d.mood); 
    })
    .attr("fill", function (d) {
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
    .text("Cooking Time (0-100 min)");

// Y Axis Label
svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", 25)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .text("Mastery Level (0-5)");

// X Axis Label: new correlation for cooking time
svg.append("text")
    .attr("x", (svgWidth - margin) / 2)
    .attr("y", svgHeight - 15)
    .attr("text-anchor", "middle")
    .text("Cooking Time (0-100 min)");

// Y Axis Label: Swapped to Mastery Level for Plot 2
svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", 25)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .text("Mastery Level (0-5)");

// Legend position
let keyX = svgWidth - 100;
let keyYStart = 150;

// Legend Title
svg.append("text")
    .attr("x", keyX - 60)
    .attr("y", keyYStart - 50)
    .style("font-weight", "bold")
    .text("Mood Level (Size):");

// Drawing circles to represent Mood Levels 1, 3, and 5
[1, 3, 5].forEach(function(val, i) {
    svg.append("circle")
        .attr("cx", keyX - 40)
        .attr("cy", keyYStart + (i * 50))
        .attr("r", radiusScale(val))
        .attr("fill", "black");

    svg.append("text")
        .attr("x", keyX - 10)
        .attr("y", keyYStart + 5 + (i * 50))
        .text("Level " + val);
});

// Box legend
svg.append("rect")
    .attr("x", keyX - 75)
    .attr("y", keyYStart - 75)
    .attr("width", 165)
    .attr("height", 450)
    .attr("fill", "none")
    .attr("stroke", "black");

// Color Legend
let colorKeyY = 380;

svg.append("text")
    .attr("x", keyX - 60)
    .attr("y", colorKeyY - 20)
    .style("font-weight", "bold")
    .text("Dish Type:");

// Color category
let types = [
    { label: "Meat", color: "#ff6666" },
    { label: "Legume", color: "#66ff66" },
    { label: "Pasta", color: "#1515ff" },
    { label: "Others", color: "#f2ff00" }
];

types.forEach(function(d, i) {
    svg.append("circle")
        .attr("cx", keyX - 40)
        .attr("cy", colorKeyY + (i * 30))
        .attr("r", 8)
        .attr("fill", d.color);

    svg.append("text")
        .attr("x", keyX - 10)
        .attr("y", colorKeyY + 5 + (i * 30))
        .text(d.label);
});

// Final outer border for the entire SVG canvas
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("width", svgWidth)
    .attr("height", svgHeight);