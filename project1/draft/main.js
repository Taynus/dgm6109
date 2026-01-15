"use strict"

let drawingWidth = 500;
let drawingHeight = 500;

let lionx = drawingWidth; // original x of body
let liony = drawingHeight; // original y of doby

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

let lionleftear = drawing.append("circle")
.attr("cx", lionx-455)
.attr("cy", liony-445)
.attr("r", 40)
.attr("fill", "#94754d") //brown
// .attr("fill", "transparent") 
// .attr("stroke", "black");

let lionrightear = drawing.append("circle")
.attr("cx", lionx-315)
.attr("cy", liony-445)
.attr("r", 40)
.attr("fill", "#94754d") //brown
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionhead = drawing.append("circle")
.attr("cx", lionx-385)
.attr("cy", liony-440)
.attr("r", 55)
.attr("fill", "#94754d") //brown
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionleftcheek = drawing.append("ellipse")
.attr("cx", lionx-435)
.attr("cy", liony-345)
.attr("rx", 60)
.attr("ry", 85)
.attr("fill", "#94754d") //brown
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionrightcheek = drawing.append("ellipse")
.attr("cx", lionx-335)
.attr("cy", liony-345)
.attr("rx", 60)
.attr("ry", 85)
.attr("fill", "#94754d") //brown
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionchin = drawing.append("circle")
.attr("cx", lionx-385)
.attr("cy", liony-270)
.attr("r", 55)
.attr("fill", "#94754d") //brown
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionleftearinside = drawing.append("circle")
.attr("cx", lionx-460)
.attr("cy", liony-450)
.attr("r", 28)
.attr("fill", "#d8ab70") //beight
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionreightearinside = drawing.append("circle")
.attr("cx", lionx-310)
.attr("cy", liony-450)
.attr("r", 28)
.attr("fill", "#d8ab70") //beight
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionface = drawing.append("circle")
.attr("cx", lionx-385)
.attr("cy", liony-390)
.attr("r", 52)
.attr("fill", "#d8ab70") //beight
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionnose = drawing.append("circle")
.attr("cx", lionx-385)
.attr("cy", liony-350)
.attr("r", 25)
.attr("fill", "black")
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionmouth = drawing.append("polyline")
.attr("points", closedPolygon(80,185,
                            150,185,
                            130,210,
                            100,210))
.attr("fill", "black")
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionleftsnout = drawing.append("circle")
.attr("cx", lionx-405)
.attr("cy", liony-330)
.attr("r", 25)
.attr("fill", "#d8ab70") //beight
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionrightsnout = drawing.append("circle")
.attr("cx", lionx-365)
.attr("cy", liony-330)
.attr("r", 25)
.attr("fill", "#d8ab70") //beight
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lionwhisker1 = drawing.append("line")
.attr("x1", 80)
.attr("x2", 30)
.attr("y1", 165)
.attr("y2", 150)
.attr("stroke", "black");
// .attr("fill", "transparent")

let lionwhisker2 = drawing.append("line")
.attr("x1", 80)
.attr("x2", 30)
.attr("y1", 170)
.attr("y2", 190)
.attr("stroke", "black");
// .attr("fill", "transparent")

let lionwhisker3 = drawing.append("line")
.attr("x1", 200)
.attr("x2", 150)
.attr("y1", 150)
.attr("y2", 165)
.attr("stroke", "black");
// .attr("fill", "transparent")

let lionwhisker4 = drawing.append("line")
.attr("x1", 200)
.attr("x2", 150)
.attr("y1", 190)
.attr("y2", 170)
.attr("stroke", "black");
// .attr("fill", "transparent")

let lioneyeleft = drawing.append("circle")
.attr("cx", lionx-410)
.attr("cy", liony-405)
.attr("r", 10)
.attr("fill", "black")
// .attr("fill", "transparent")
// .attr("stroke", "black");

let lioneyerigth = drawing.append("circle")
.attr("cx", lionx-360)
.attr("cy", liony-405)
.attr("r", 10)
.attr("fill", "black")
// .attr("fill", "transparent")
// .attr("stroke", "black");