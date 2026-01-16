"use strict"

let drawingWidth = 500;
let drawingHeight = 500;

let lionX = 250; // Original position = 125
let lionY = 250; // Original position = 120


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

/* Lion Draw
This is the copy of the original project,
in this case all que position are in positive
but I modify the lionFace position with the variables X and Y,
because when I used the (exa:) "X - 200" all the lion vanish*/

/*This is
the Ear of the Left
of the lion*/

let lionLeftEar = drawing.append("circle")
.attr("cx", 60) //Horizontal
.attr("cy", 70) //Verical
.attr("r", 40)
.attr("fill", "#94754d") //brown
// .attr("fill", "transparent") 
// .attr("stroke", "black");

/*This is
the Ear of the Rigth
of the lion*/

let lionRightEar = drawing.append("circle")
.attr("cx", 200)
.attr("cy", 70)
.attr("r", 40)
.attr("fill", "#94754d") //brown
// .attr("fill", "transparent")
// .attr("stroke", "black");

/*This is
the Head
of the lion*/

let lionHead = drawing.append("circle")
.attr("cx", 130)
.attr("cy", 75)
.attr("r", 55)
.attr("fill", "#94754d") //brown
// .attr("fill", "transparent")
// .attr("stroke", "black");

/*This is
the Cheek of the Left
of the lion*/

let lionLeftCheek = drawing.append("ellipse")
.attr("cx", 80)
.attr("cy", 160)
.attr("rx", 60)
.attr("ry", 85)
.attr("fill", "#94754d") //brown
// .attr("fill", "transparent")
// .attr("stroke", "black");

/*This is
the Cheek of the Rigth
of the lion*/

let lionRightCheek = drawing.append("ellipse")
.attr("cx", 180)
.attr("cy", 160)
.attr("rx", 60)
.attr("ry", 85)
.attr("fill", "#94754d") //brown
// .attr("fill", "transparent")
// .attr("stroke", "black");

/*This is
the Chin
of the lion*/

let lionChin = drawing.append("circle")
.attr("cx", 130)
.attr("cy", 230)
.attr("r", 55)
.attr("fill", "#94754d") //brown
// .attr("fill", "transparent")
// .attr("stroke", "black");

/*This is
the Inside part of the Left Ear
of the lion*/

let lionLeftEarInside = drawing.append("circle")
.attr("cx", 55)
.attr("cy", 65)
.attr("r", 20)
.attr("fill", "#d8ab70") //beight
// .attr("fill", "transparent")
// .attr("stroke", "black");

/*This is
the Inside part of the Right Ear
of the lion*/

let lionReightEarInside = drawing.append("circle")
.attr("cx", 200)
.attr("cy", 65)
.attr("r", 20)
.attr("fill", "#d8ab70") //beight
// .attr("fill", "transparent")
// .attr("stroke", "black");

/*This is
the Face
of the lion*/

// I selecting the face as central ponit to move the shapes in unison later.

let lionFace = drawing.append("circle")
.attr("cx", lionX)
.attr("cy", lionY)
.attr("r", 60)
.attr("fill", "#d8ab70") //beight
// .attr("fill", "transparent")
// .attr("stroke", "black");

/*This is
the Nose
of the lion*/

let lionNose = drawing.append("circle")
.attr("cx", 125)
.attr("cy", 160)
.attr("r", 25)
.attr("fill", "black")
// .attr("fill", "transparent")
// .attr("stroke", "black");

/*This is
the Mouth
of the lion*/

let lionMouth = drawing.append("polyline")
.attr("points", closedPolygon(80,185, // Corner Left Up
                            180,185, // Corner Rigth Up
                            140,220, // Corner Rigth Down
                            110,220)) // Corner Left Down
.attr("fill", "black")
//.attr("fill", "transparent")
//.attr("stroke", "black");

/*This is
the Left Snout
of the lion*/

let lionLeftSnout = drawing.append("circle")
.attr("cx", 95)
.attr("cy", 180)
.attr("r", 30)
.attr("fill", "#d8ab70") //beight
// .attr("fill", "transparent")
// .attr("stroke", "black");

/*This is
the Rigth Snout
of the lion*/

let lionRightSnout = drawing.append("circle")
.attr("cx", 155)
.attr("cy", 180)
.attr("r", 30)
.attr("fill", "#d8ab70") //beight
// .attr("fill", "transparent")
// .attr("stroke", "black");

/*This is
the Left Up Whisker
of the lion*/

let lionWhisker1 = drawing.append("line")
.attr("x1", 90) //Horizontal R 
.attr("x2", 40) // Horizontal L
.attr("y1", 170) // Vertical R
.attr("y2", 160) // Vertical L
.attr("stroke", "black");
// .attr("fill", "transparent")

/*This is
the Left Down Whisker
of the lion*/

let lionWhisker2 = drawing.append("line")
.attr("x1", 90) //Horizontal R 
.attr("x2", 40) // Horizontal L
.attr("y1", 180) // Vertical R
.attr("y2", 200) // Vertical L
.attr("stroke", "black");
// .attr("fill", "transparent")

/*This is
the Rigth Up Whisker
of the lion*/

let lionWhisker3 = drawing.append("line")
.attr("x1", 200) //Horizontal R 
.attr("x2", 150) // Horizontal L
.attr("y1", 160) // Vertical R
.attr("y2", 170) // Vertical L
.attr("stroke", "black");
// .attr("fill", "transparent")

/*This is
the Left Down Whisker
of the lion*/

let lionWhisker4 = drawing.append("line")
.attr("x1", 200) //Horizontal R 
.attr("x2", 150) // Horizontal L
.attr("y1", 200) // Vertical R
.attr("y2", 180) // Vertical L
.attr("stroke", "black");
// .attr("fill", "transparent")

/*This is
the Left Eye
of the lion*/

let lionEyeLeft = drawing.append("circle")
.attr("cx", 100)
.attr("cy", 110)
.attr("r", 10)
.attr("fill", "black")
// .attr("fill", "transparent")
// .attr("stroke", "black");

/*This is
the Rigth Eye
of the lion*/

let lionEyeRigth = drawing.append("circle")
.attr("cx", 150)
.attr("cy", 110)
.attr("r", 10)
.attr("fill", "black")
// .attr("fill", "transparent")
// .attr("stroke", "black");