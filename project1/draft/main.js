"use strict"

let drawingWidth = 500;
let drawingHeight = 500;


/*  Variable that enables you to "talk to" your SVG drawing canvas. */
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", drawingWidth)
    .attr("height", drawingHeight);

let border = drawing.append("rect")
    .attr("width", drawingWidth)
    .attr("height", drawingHeight)
    .attr("fill", "lightblue")
    .attr("stroke", "red");

/* Draw a lion */

let lionLeftEar = drawing.append("circle")
.attr("cx", 60) //Horizontal
.attr("cy", 70)
.attr("r", 40)
.attr("fill", "#94754d") //brown
// .attr("fill", "transparent") 
// .attr("stroke", "black");

let lionRightEar = drawing.append("circle")
.attr("cx", 200)
.attr("cy", 70)
.attr("r", 40)
.attr("fill", "#94754d") //brown
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionHead = drawing.append("circle")
.attr("cx", 130)
.attr("cy", 75)
.attr("r", 55)
.attr("fill", "#94754d") //brown
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionLeftCheek = drawing.append("ellipse")
.attr("cx", 80)
.attr("cy", 160)
.attr("rx", 60)
.attr("ry", 85)
.attr("fill", "#94754d") //brown
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionRightCheek = drawing.append("ellipse")
.attr("cx", 180)
.attr("cy", 160)
.attr("rx", 60)
.attr("ry", 85)
.attr("fill", "#94754d") //brown
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionChin = drawing.append("circle")
.attr("cx", 130)
.attr("cy", 230)
.attr("r", 55)
.attr("fill", "#94754d") //brown
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionLeftEarInside = drawing.append("circle")
.attr("cx", 55)
.attr("cy", 65)
.attr("r", 20)
.attr("fill", "#d8ab70") //beight
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionReightEarInside = drawing.append("circle")
.attr("cx", 200)
.attr("cy", 65)
.attr("r", 20)
.attr("fill", "#d8ab70") //beight
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionFace = drawing.append("circle")
.attr("cx", 125)
.attr("cy", 120)
.attr("r", 60)
.attr("fill", "#d8ab70") //beight
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionNose = drawing.append("circle")
.attr("cx", 125)
.attr("cy", 160)
.attr("r", 25)
.attr("fill", "black")
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionMouth = drawing.append("polyline")
.attr("points", closedPolygon(80,185, // Corner Left Up
                            180,185, // Corner Rigth Up
                            140,220, // Corner Rigth Down
                            110,220)) // Corner Left Down
.attr("fill", "black")
//.attr("fill", "transparent")
//.attr("stroke", "black");

let lionLeftSnout = drawing.append("circle")
.attr("cx", 95)
.attr("cy", 180)
.attr("r", 30)
.attr("fill", "#d8ab70") //beight
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionRightSnout = drawing.append("circle")
.attr("cx", 155)
.attr("cy", 180)
.attr("r", 30)
.attr("fill", "#d8ab70") //beight
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionWhisker1 = drawing.append("line")
.attr("x1", 90) //Horizontal R 
.attr("x2", 40) // Horizontal L
.attr("y1", 170) // Vertical R
.attr("y2", 160) // Vertical L
.attr("stroke", "black");
// .attr("fill", "transparent")

let lionWhisker2 = drawing.append("line")
.attr("x1", 90) //Horizontal R 
.attr("x2", 40) // Horizontal L
.attr("y1", 180) // Vertical R
.attr("y2", 200) // Vertical L
.attr("stroke", "black");
// .attr("fill", "transparent")

let lionWhisker3 = drawing.append("line")
.attr("x1", 200) //Horizontal R 
.attr("x2", 150) // Horizontal L
.attr("y1", 160) // Vertical R
.attr("y2", 170) // Vertical L
.attr("stroke", "black");
// .attr("fill", "transparent")

let lionWhisker4 = drawing.append("line")
.attr("x1", 200) //Horizontal R 
.attr("x2", 150) // Horizontal L
.attr("y1", 200) // Vertical R
.attr("y2", 180) // Vertical L
.attr("stroke", "black");
// .attr("fill", "transparent")

let lionEyeLeft = drawing.append("circle")
.attr("cx", 100)
.attr("cy", 110)
.attr("r", 10)
.attr("fill", "black")
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionEyeRigth = drawing.append("circle")
.attr("cx", 150)
.attr("cy", 110)
.attr("r", 10)
.attr("fill", "black")
// .attr("fill", "transparent")
// .attr("stroke", "black");