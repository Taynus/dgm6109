"use strict"

/* Configuration variables drawing */
let svgWidth = 600;
let svgHeight = 400;
let margin = 50; 

/* Resize container div to match visualization width */
d3.select("#container")
    .style("width", String(svgWidth) + "px");

/* Create the SVG drawing canvas */
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Data */
let dataset = [
    { dish: "Chicken fajitas", time: 41, mastery: 3 }, 
    { dish: "Lima Beans", time: 90, mastery: 2 },      
    { dish: "Lentils", time: 70, mastery: 2 },         
    { dish: "Quinoa and chicken", time: 34, mastery: 2 },
    { dish: "Chicken Salad", time: 23, mastery: 3 },   
    { dish: "Spaghetti Bolognese", time: 20, mastery: 2 },
    { dish: "Tuna fajitas", time: 20, mastery: 3 }
];

/* SCALES: Map data values to pixel coordinates */
// X Scale: Cooking time from 0 to 100 minutes
let xScale = d3.scaleLinear()
    .domain([0, 100]) 
    .range([margin, svgWidth - margin]);

// Y Scale: Mastery level from 0 to 5
let yScale = d3.scaleLinear()
    .domain([0, 5]) 
    .range([svgHeight - margin, margin]);

/* Create circles for each data point */
svg.selectAll("circle")
    .data(dataset)
    .join("circle")
    .attr("r", 8)
    .attr("cx", function(d) { return xScale(d.time); })   // Use time from dataset
    .attr("cy", function(d) { return yScale(d.mastery); }) // Use mastery from dataset
    .attr("fill", "black")
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
    .attr("y", svgHeight - 10)
    .attr("text-anchor", "middle")
    .text("Cooking Time (Minutes)");

// Y Axis Label (Rotated)
svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", 15)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .text("Mastery Level (1-5)");

// Label for Max X value (100)
svg.append("text")
    .attr("x", svgWidth - margin)
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text("100");

// Label for Max Y value (5)
svg.append("text")
    .attr("x", margin - 10)
    .attr("y", margin)
    .attr("text-anchor", "end")
    .attr("alignment-baseline", "middle")
    .text("5");

// Origin Label (0)
svg.append("text")
    .attr("x", margin - 10)
    .attr("y", svgHeight - margin)
    .attr("text-anchor", "end")
    .attr("alignment-baseline", "middle")
    .text("0");