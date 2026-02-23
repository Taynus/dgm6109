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
    { dish: "Chicken fajitas", time: 41, mastery: 3, mood: 3 }, 
    { dish: "Lima Beans", time: 90, mastery: 2, mood: 3 },      
    { dish: "Lentils", time: 70, mastery: 2, mood: 4 },         
    { dish: "Lentils Leftovers", time: 10, mastery: 1, mood: 4 },
    { dish: "Quinoa and chicken", time: 34, mastery: 2, mood: 5 },
    { dish: "Chicken Salad", time: 23, mastery: 3, mood: 3 },   
    { dish: "Spaghetti Bolognese", time: 20, mastery: 2, mood: 5 },
    { dish: "Burgers & Fries", time: 25, mastery: 3, mood: 4 },
    { dish: "Tuna with rice", time: 23, mastery: 3, mood: 3 },
    { dish: "Soup (Home)", time: 35, mastery: 2, mood: 4 }
];

/* Scales Map data values to pixel coordinates */

// X Scale: Cooking time from 0 to 100 minutes
let xScale = d3.scaleLinear()
    .domain([0, 100]) 
    .range([margin, svgWidth - margin]);

// Y Scale: Mastery level from 0 to 5
let yScale = d3.scaleLinear()
    .domain([0, 5]) 
    .range([svgHeight - margin, margin]);

// Scale for circle radius based on Mood (the 3rd property)
let radiusScale = d3.scaleLinear()
    .domain([1, 5])
    .range([2, 15]); // Small mood = 4px, High mood = 18px

/* Create circles for each data point */
svg.selectAll("circle")
    .data(dataset)
    .join("circle")
    .attr("cx", function(d) { 
        return xScale(d.time); 
    })
    .attr("cy", function(d) { 
        return yScale(d.mastery); 
    })
    .attr("r", function(d) { 
        return radiusScale(d.mood); 
    })
    .attr("fill", "black")
    .attr("stroke", "white")
    .style("opacity", 0.7);

/* Draw canvas and margin borders */

// Main canvas border
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// Inner margin border (dashed line)
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-dasharray", "5")
    .attr("x", margin)
    .attr("y", margin)
    .attr("width", svgWidth - margin * 2)
    .attr("height", svgHeight - margin * 2);

/* Title the axes and mark key coordinates */

// X Axis Label
svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - 15)
    .attr("text-anchor", "middle")
    .text("Cooking Time (Minutes)");

// Y Axis Label (Rotated)
svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", 20)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .text("Mastery Level (1-5)");

// Label for Max X value (100)
svg.append("text")
    .attr("x", svgWidth - margin)
    .attr("y", svgHeight - (margin / 2) + 12)
    .attr("text-anchor", "middle")
    .text("100");

// Label for Max Y value (5)
svg.append("text")
    .attr("x", margin - 25)
    .attr("y", margin)
    .attr("text-anchor", "end")
    .text("5");

// Origin (0)
svg.append("text")
    .attr("x", margin - 25)
    .attr("y", svgHeight - margin)
    .attr("text-anchor", "end")
    .text("0");

// Drawing the Key (Legend) for circle sizes
let keyY = 60; // Starting Y position for the key
let keyX = svgWidth - 80;

// 3rd variable
svg.append("text")
    .attr("x", svgWidth - 15)
    .attr("y", 50)
    .attr("text-anchor", "end")
    .style("font-size", "12px")
    .style("font-weight", "bold")
    .text("Circle Size = Mood (1-5)");

// Label for the key
svg.append("text")
    .attr("x", keyX)
    .attr("y", keyY - 30)
    .attr("text-anchor", "middle")
    .style("font-weight", "bold")
    .text("Mood Scale");

// Mood 1
svg.append("circle")
    .attr("cx", keyX + 40)
    .attr("cy", keyY + 50)
    .attr("r", radiusScale(1))
    .attr("fill", "black");

svg.append("text")
    .attr("x", keyX + 60)
    .attr("y", keyY + 55)
    .text("1");

// Mood 2
svg.append("circle")
    .attr("cx", keyX + 40)
    .attr("cy", keyY + 100)
    .attr("r", radiusScale(2))
    .attr("fill", "black");

svg.append("text")
    .attr("x", keyX + 60)
    .attr("y", keyY + 105)
    .text("2");

// Mood 3
svg.append("circle")
    .attr("cx", keyX + 40)
    .attr("cy", keyY + 150)
    .attr("r", radiusScale(3))
    .attr("fill", "black");

svg.append("text")
    .attr("x", keyX + 60)
    .attr("y", keyY + 155)
    .text("3");

// Mood 4
svg.append("circle")
    .attr("cx", keyX + 40)
    .attr("cy", keyY + 200)
    .attr("r", radiusScale(4))
    .attr("fill", "black");

svg.append("text")
    .attr("x", keyX + 60)
    .attr("y", keyY + 205)
    .text("4");

// Mood 5
svg.append("circle")
    .attr("cx", keyX + 40)
    .attr("cy", keyY + 250)
    .attr("r", radiusScale(5))
    .attr("fill", "black");

svg.append("text")
    .attr("x", keyX + 60)
    .attr("y", keyY + 255)
    .text("5");