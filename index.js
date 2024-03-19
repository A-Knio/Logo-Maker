const inquirer = require("inquirer");
const filesystem = require("fs");
const {circle, square, triangle} = require('./shapes');


class svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }

    render(){
        return `<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }

    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    setShapeElement(shape){
        this.shapeElement = shape.render();
    }

}

const questions = [
    {
        type: "input",
        name: "text",
        message: "What is the text?"
    },
    {
        type: "input",
        name: "text-color",
        message: "What is the text color?"
    },
    {
        type: "input",
        name: "color",
        message: "What is the color?"
    },
    {
        type: "list",
        name: "shape",
        message: "What shape do you want?",
        choices: ["circle", "square", "triangle"]
    }
];

function writeToFile(fileName, data) {
    filesystem.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
}

(async function init() {
    console.log("Starting Logo Maker");

    const answers = await inquirer.prompt(questions);

    var user_text = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        user_text = answers.text;
    } else {
        console.log("Invalid text");
        return;
    }

    console.log ("User text: " + user_text);
    console.log ("Text color: " + answers["text-color"]);
    console.log ("Shape: " + answers.shape);
    console.log ("Color: " + answers.color);

    user_Shape;
    if (answers.shape === "circle") {
        user_Shape = new circle();
    } else if (answers.shape === "square") {
        user_Shape = new square();
    } else if (answers.shape === "triangle") {
        user_Shape = new triangle();
    } else {
        console.log("Invalid shape");
        return;
    }

    user_Shape.setColor(answers.color);

    var user_svg = new svg();
    user_svg.setTextElement(user_text, answers["text-color"]);
    user_svg.setShapeElement(user_Shape);

    svgString = user_svg.render();

    console.log(svgString);
    console.log("Writing to file: " + svg_file);
    writeToFile(svg_file, svgString);
})();

console.log ("User text: " + user_text);
console.log ("Text color: " + answers["text-color"]);
console.log ("Shape: " + answers.shape);
console.log ("Color: " + answers.color);

user_Shape;
if (answers.shape === "circle") {
    user_Shape = new circle();
} else if (answers.shape === "square") {
    user_Shape = new square();
} else if (answers.shape === "triangle") {
    user_Shape = new triangle();
} else {
    console.log("Invalid shape");
    return;
}

user_Shape.setColor(answers.color);

var user_svg = new svg();
user_svg.setTextElement(user_text, answers["text-color"]);
user_svg.setShapeElement(user_Shape);

svgString = user_svg.render();

console.log(svgString);
console.log("Writing to file: " + svg_file);
writeToFile(svg_file, svgString);

init();



