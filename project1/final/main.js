"use strict"

document.getElementById("action").addEventListener("click", processForm);

let xInput, yInput, choice;

function processForm() {
    /* Get data from the form */
    xInput = Number(document.getElementById("xInput").value);
    yInput = Number(document.getElementById("yInput").value);

choice =document.getElementById("a").value;

    drawing.selectAll('svg>*').remove(); // This line selects everything that has been drawn in the SVG and deletes it all
    drawImage();

}

/* set up the drawing canvas - Be sure not to copy this code from your draft project! */
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");

/*
The function below is called when the user presses the "Draw!" button and is where you will put most of your drawing code. Please follow the instructions in the homework PDF for this step.
*/

function drawImage() {

    let lionX = xInput;
    let lionY = yInput;


// Draw of the lion.

/*
Left ear of the lion
*/
    let lionLeftEar = drawing.append("circle")
        .attr("cx", lionX-40) // Original point 60
        .attr("cy", lionY-230) // Original point 70
        .attr("r", 40)
        .attr("fill", "#94754d") //brown

/*
Rigth ear of the lion
*/
    let lionRightEar = drawing.append("circle")
        .attr("cx", lionX+100) // Original point 200
        .attr("cy", lionY-230) // Original point 70
        .attr("r", 40)
        .attr("fill", "#94754d") //brown

/*
Head of the lion
*/
    let lionHead = drawing.append("circle")
        .attr("cx", lionX+30) // Original point 130
        .attr("cy", lionY-225) // Original point 75
        .attr("r", 55)
        .attr("fill", "#94754d") //brown

/*
Left cheek of the lion
*/
    let lionLeftCheek = drawing.append("ellipse")
        .attr("cx", lionX-20) // Original point 80
        .attr("cy", lionY-140) // Original point 160
        .attr("rx", 60)
        .attr("ry", 85)
        .attr("fill", "#94754d") //brown

/*
Rigth cheek of the lion
*/
    let lionRightCheek = drawing.append("ellipse")
        .attr("cx", lionX+80) // Original point 180
        .attr("cy", lionY-140) // Original point 160
        .attr("rx", 60)
        .attr("ry", 85)
        .attr("fill", "#94754d") //brown

/*
Chin of the lion
*/
    let lionChin = drawing.append("circle")
        .attr("cx", lionX+30) // Original point 130
        .attr("cy", lionY-70) // Original point 230
        .attr("r", 55)
        .attr("fill", "#94754d") //brown

/*
Left inside part ear of the lion
*/
    let lionLeftEarInside = drawing.append("circle")
        .attr("cx", lionX-45) // Original point 55
        .attr("cy", lionY-235) // Original point 65
        .attr("r", 20)
        .attr("fill", "#d8ab70") //beight

/*
Rigth inside part ear of the lion
*/
    let lionReightEarInside = drawing.append("circle")
        .attr("cx", lionX+100) // Original point 200
        .attr("cy", lionY-235) // Original point 65
        .attr("r", 20)
        .attr("fill", "#d8ab70") //beight

/*
Face of the lion
*/
    let lionFace = drawing.append("circle")
        .attr("cx", lionX+25) // // Original point 125
        .attr("cy", lionY-180) // Original point 120
        .attr("r", 60)
        .attr("fill", "#d8ab70") //beight

/*
Nose of the lion
*/
    let lionNose = drawing.append("circle")
        .attr("cx", lionX+25) // Original point 125
        .attr("cy", lionY-140) // Original point 160
        .attr("r", 25)
        .attr("fill", "black")

/*
This is the mouth of the lion
The mouth open when the "else" comand start.
*/
    if (choice === "1") {let lionMouth = drawing.append("polyline")
        .attr("points", closedPolygon(lionX-20, lionY-115, // Original point 80-185, // Corner Left Up
            lionX+80, lionY-115, // Original point 180-185, // Corner Rigth Up
            lionX+40, lionY-80, // Original point 140-220, // Corner Rigth Down
            lionX+10, lionY-80)) // Original point 110, 220, // Corner Left Down
        .attr("fill", "black")} else {let lionMouth = drawing.append("polyline")
        .attr("points", closedPolygon(lionX-20, lionY-115,
            lionX+80, lionY-115,
            lionX+40, lionY-60, 
            lionX+10, lionY-60))
        }
    
/*
This is the rigth snout
*/
    let lionLeftSnout = drawing.append("circle")
        .attr("cx", lionX-5) // Original point 95
        .attr("cy", lionY-120) // Original point 180
        .attr("r", 30)
        .attr("fill", "#d8ab70") //beight

/*
This is the rigth snout
*/
    let lionRightSnout = drawing.append("circle")
        .attr("cx", lionX+55) // Original point 155
        .attr("cy", lionY-120) // Original point 180
        .attr("r", 30)
        .attr("fill", "#d8ab70") //beight

/*
This is the whisker from the upper left corner
*/
    let lionWhisker1 = drawing.append("line")
        .attr("x1", lionX-10) // Original point 90, //Horizontal R 
        .attr("x2", lionX-60) // Original point 40, // Horizontal L
        .attr("y1", lionY-130) // Original point 170, // Vertical R
        .attr("y2", lionY-140) // Original point 160, // Vertical L
        .attr("stroke", "black");

/*
This is the whisker from the down left corner
*/
    let lionWhisker2 = drawing.append("line")
        .attr("x1", lionX-10) // Original point 90, //Horizontal R 
        .attr("x2", lionX-60) // Original point 40, // Horizontal L
        .attr("y1", lionY-120) // Original point 180, // Vertical R
        .attr("y2", lionY-100) // Original point 200, // Vertical L
        .attr("stroke", "black");

/*
This is the whisker from the upper rigth corner
*/
    let lionWhisker3 = drawing.append("line")
        .attr("x1", lionX+100) // Original point 200, //Horizontal R 
        .attr("x2", lionX+50) // Original point 150, // Horizontal L
        .attr("y1", lionY-140) // Original point 160, // Vertical R
        .attr("y2", lionY-130) // Original point 170, // Vertical L
        .attr("stroke", "black");

/*
This is the whisker from the down rigth corner
*/
    let lionWhisker4 = drawing.append("line")
        .attr("x1", lionX+100) // Original point 200, //Horizontal R 
        .attr("x2", lionX+50) // Original point 150, // Horizontal L
        .attr("y1", lionY-100) // Original point 200, // Vertical R
        .attr("y2", lionY-120) // Original point 180, // Vertical L
        .attr("stroke", "black");


/*
This is the left eye of the lion
I modified the eyes to make them
look like a surprised face.
*/
    if (choice === "1") {let lionEyeLeft = drawing.append("circle")
        .attr("cx", lionX) // Original point 100
        .attr("cy", lionY-190) // Original point 110
        .attr("r", 10)
        .attr("fill", "black")} else {let lionEyeLeft = drawing.append("circle")
            .attr("cx", lionX)
            .attr("cy", lionY - 190)
            .attr("r", 25) 
            .attr("fill", "white")
                let lionEyeInsideLeft = drawing.append("circle")
                    .attr("cx", lionX-10) // Original point 100
                    .attr("cy", lionY-200) // Original point 110
                    .attr("r", 10)
                    .attr("fill", "black");
        }


/*
This is the rigth eye of the lion
I modified the eyes to make them
look like a surprised face.
*/
    if (choice === "1") {let lionEyeRigth = drawing.append("circle")
        .attr("cx", lionX+50) // Original point 150
        .attr("cy", lionY-190) // Original point 110
        .attr("r", 10)
        .attr("fill", "black")} else {let lionEyeRight = drawing.append("circle")
            .attr("cx", lionX+50)
            .attr("cy", lionY-190)
            .attr("r", 25) 
            .attr("fill", "white")
                            let lionEyeInsideRigth = drawing.append("circle")
                    .attr("cx", lionX+40) 
                    .attr("cy", lionY-200)
                    .attr("r", 10)
                    .attr("fill", "black");
            }


    /***** DO NOT ADD OR EDIT ANYTHING BELOW THIS LINE ******/
}
