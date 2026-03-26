"use strict"

// *************** Configuration variables: drawing area *************** //
let svgWidth = 1600
let svgHeight = 1000

// *************** Configuration variables: margins *************** //
let leftMargin = 80
let rightMargin = 25
let topMargin = 100
let bottomMargin = 60

// *************** CANVAS SETUP *************** //
d3.select("#container")
    .style("width", String(svgWidth) + "px")

let svg = d3.select("#drawing")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

// *************** Draw canvas border *************** //
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

// *************** DATASET JSON *************** //

d3.json("data.json").then(function (dataset) {

    // *************** Configuration variables: Data *************** //

    let minTime = d3.min(dataset, function (d) { return d.time; });
    let maxTime = d3.max(dataset, function (d) { return d.time; });

    // *************** SET UP SCALE FUNCTIONS *************** //

    /* Time (minutes) */
    let yScale = d3.scaleLinear()
        .domain([2, maxTime + 10])
        .range([svgHeight - bottomMargin - 50, topMargin]);

    /* Mood (1-5) */
    let xScale = d3.scaleLinear()
        .domain([0, 6])
        .range([leftMargin, svgWidth - 350]);

    // *************** AXIS *************** //

    // X (Horizontal)
    svg.append("line")
        .attr("x1", xScale(0))
        .attr("y1", yScale(-3))
        .attr("x2", xScale(6))
        .attr("y2", yScale(-3))
        .attr("stroke", "black");

    // Y (Vertical)
    svg.append("line")
        .attr("x1", xScale(0))
        .attr("y1", yScale(maxTime + 10))
        .attr("x2", xScale(0))
        .attr("y2", yScale(-3))
        .attr("stroke", "black");

    // *************** GRID - Fractions from 0.1 a 5 *************** //
    // Loop to create the grid in X and Y axis

    for (let i = 0; i <= 6; i = i + 0.1) {
        svg.append("line")
            .attr("x1", xScale(i))
            .attr("y1", yScale(maxTime + 10))
            .attr("x2", xScale(i))
            .attr("y2", yScale(-3))
            .attr("stroke", "#e0e0e0")
    };

    for (let i = 0; i <= maxTime + 10; i = i + 5) {
        svg.append("line")
            .attr("x1", xScale(0))
            .attr("y1", yScale(i))
            .attr("x2", xScale(6))
            .attr("y2", yScale(i))
            .attr("stroke", "#e0e0e0")
    }

    // *************** Draw Shapes *************** //

    let dishes = svg.selectAll("g.dish")
        .data(dataset)
        .join("g")
        .classed("dish", true)
        .attr("transform", function (d) {
            let x = xScale(d.mood);
            let y = yScale(d.time);
            return "translate(" + x + "," + y + ") scale(1)";
        });

    dishes.append("polyline")
        .attr("points", function (d) {
            if (d.mastery == 1) {
                return "0,0 30,0 30,10 0,10 0,0"; //  Mastery 1: Shape horizontal
            } else if (d.mastery == 2) {
                return "0,0 20,0 20,20 0,20 0,0"; //  Mastery 2: Shape square
            } else if (d.mastery == 3) {
                return "0,0 10,0 10,20 20,20 20,30 0,30 0,0"; //  Mastery 3: Shape L
            } else if (d.mastery == 4) {
                return "0,0 30,0 30,10 20,10 20,20 10,20 10,10 0,10 0,0"; //  Mastery 4: Shape T
            } else {
                return "0,0 20,0 20,10 30,10 30,20 10,20 10,10 0,10 0,0"; // Mastery 5: Shape Z
            }
        })
        .attr("fill", function (d) {
            if (d.type == "meat") return "#ff6666";
            if (d.type == "legume") return "#66ff66";
            if (d.type == "pasta") return "#1515ff";
            return "#f2ff00";
        })
        .attr("stroke", "white")
        .style("opacity", 0.8);

    // *************** X AXIS VALUES (Mood) *************** //
    for (let i = 0; i <= 5; i = i + 1) { // Range 0 a 5
        svg.append("text")
            .classed("axis", true)
            .attr("x", xScale(i))
            .attr("y", svgHeight - bottomMargin)
            .style("text-anchor", "middle")
            .style("alignment-baseline", "before-edge")
            .text(i);
    }

    // *************** Y AXIS VALUES (Time) *************** //
    for (let i = 0; i <= maxTime; i += 30) {
        svg.append("text")
            .attr("x", leftMargin - 10)
            .attr("y", yScale(i))
            .attr("text-anchor", "end")
            .attr("alignment-baseline", "middle")
            .text(i);
    }

    // *************** DRAW AXIS LABELS *************** //

    let xAxisLabel = svg.append("text")
        .attr("class", "axisLabel")
        .attr("x", svgWidth / 2)
        .attr("y", svgHeight - (bottomMargin / 4))
        .style("text-anchor", "middle")
        .text("Mood Score (1-5)");

    let yAxisLabel = svg.append("text")
        .attr("class", "axisLabel")
        .attr("transform", "rotate(-90)")
        .attr("x", -svgHeight / 2)
        .attr("y", leftMargin / 4)
        .style("text-anchor", "middle")
        .text("Time (Minutes)");

    // *************** LEGEND *************** //
    let legendBoxX = svgWidth - 280;
    let legendBoxY = svgHeight - 390;

    // BOX
    svg.append("rect")
        .attr("x", legendBoxX)
        .attr("y", legendBoxY - 70)
        .attr("width", 220)
        .attr("height", 360)
        .attr("fill", "white")
        .attr("stroke", "black")
        .style("opacity", 0.9);

    // MEALS BOX

    // Tittle categories
    svg.append("text")
        .text("Dish Categories")
        .attr("x", legendBoxX + 110)
        .attr("y", legendBoxY - 40)
        .style("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-family", "sans-serif");

    //Meat
    svg.append("rect")
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "#ff6666")
        .attr("x", legendBoxX + 20)
        .attr("y", legendBoxY - 25);

    svg.append("text")
        .text("Meat")
        .attr("x", legendBoxX + 45)
        .attr("y", legendBoxY - 12)
        .style("font-family", "sans-serif")
        .style("font-size", "12px");

    //Legume
    svg.append("rect")
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "#66ff66")
        .attr("x", legendBoxX + 20)
        .attr("y", legendBoxY);

    svg.append("text")
        .text("Legume")
        .attr("x", legendBoxX + 45)
        .attr("y", legendBoxY + 12)
        .style("font-family", "sans-serif")
        .style("font-size", "12px");

    //Pasta
    svg.append("rect")
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "#1515ff")
        .attr("x", legendBoxX + 20)
        .attr("y", legendBoxY + 25);

    svg.append("text")
        .text("Pasta")
        .attr("x", legendBoxX + 45)
        .attr("y", legendBoxY + 38)
        .style("font-family", "sans-serif")
        .style("font-size", "12px");

    //Other
    svg.append("rect")
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "#f2ff00")
        .attr("x", legendBoxX + 20)
        .attr("y", legendBoxY + 50);

    svg.append("text")
        .text("Others")
        .attr("x", legendBoxX + 45)
        .attr("y", legendBoxY + 60)
        .style("font-family", "sans-serif")
        .style("font-size", "12px");

    // MASTERY BOX

    let masteryLegendY = legendBoxY + 200;

    svg.append("text")
        .text("Mastery Level (Shape)")
        .attr("x", legendBoxX + 110)
        .attr("y", masteryLegendY - 100)
        .style("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-family", "sans-serif");

    // Shape Mastery 1 - Line
    svg.append("polyline")
        .attr("points", "0,0 20,0 20,7 0,7 0,0")
        .attr("transform", "translate(" + (legendBoxX + 20) + "," + (masteryLegendY - 70) + ")")
        .attr("fill", "grey");

    svg.append("text")
        .text("Level 1")
        .attr("x", legendBoxX + 70)
        .attr("y", masteryLegendY - 62)
        .style("font-size", "11px");

    // Shape Mastery 2 - Square
    svg.append("polyline")
        .attr("points", "0,0 20,0 20,20 0,20 0,0")
        .attr("transform", "translate(" + (legendBoxX + 20) + "," + (masteryLegendY - 50) + ")")
        .attr("fill", "grey");

    svg.append("text")
        .text("Level 2")
        .attr("x", legendBoxX + 70)
        .attr("y", masteryLegendY - 35)
        .style("font-size", "11px");

    // Shape Mastery 3 - L
    svg.append("polyline")
        .attr("points", "0,0 10,0 10,20 20,20 20,30 0,30 0,0")
        .attr("transform", "translate(" + (legendBoxX + 20) + "," + (masteryLegendY - 20) + ")")
        .attr("fill", "grey");

    svg.append("text")
        .text("Level 3")
        .attr("x", legendBoxX + 70)
        .attr("y", masteryLegendY)
        .style("font-size", "11px");

    // Shape Mastery 4 - T
    svg.append("polyline")
        .attr("points", "0,0 30,0 30,10 20,10 20,20 10,20 10,10 0,10 0,0")
        .attr("transform", "translate(" + (legendBoxX + 20) + "," + (masteryLegendY + 20) + ")")
        .attr("fill", "grey");

    svg.append("text")
        .text("Level 4")
        .attr("x", legendBoxX + 70)
        .attr("y", masteryLegendY + 30)
        .style("font-size", "11px");

    // Shape Mastery 5 - Z
    svg.append("polyline")
        .attr("points", "0,0 20,0 20,10 30,10 30,20 10,20 10,10 0,10 0,0")
        .attr("transform", "translate(" + (legendBoxX + 20) + "," + (masteryLegendY + 50) + ")")
        .attr("fill", "grey");

    svg.append("text")
        .text("Level 5")
        .attr("x", legendBoxX + 70)
        .attr("y", masteryLegendY + 65)
        .style("font-size", "11px");

}).catch(function (error) {
    console.error("Error loading JSON file:", error);
});