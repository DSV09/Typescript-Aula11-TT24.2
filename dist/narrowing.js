"use strict";
//=======================================================================================
// Estreitamento
//=======================================================================================
function padLeft(padding, input) {
    //Erro no typescript. Valor 
    // pode ser uma string, que é um tipo estranho a função repeat
    //Argument of type 'string | number' is not assignable to parameter of type 'number'.
    //Type 'string' is not assignable to type 'number'.ts(2345)
    // return "".repeat(padding) + input;
    if (typeof padding === "number") {
        //Typescript não apresenta mais erro, já que ele agora sabe que padding necessariamente
        //precisa ser um number (estreitamento)
        return "".repeat(padding) + input;
    }
    else {
        return padding + input;
    }
}
padLeft("  ", "Fim");
padLeft(2, "Fim");
//=======================================================================================
// redução de tipos iguais
//=======================================================================================
function exemple(x, y) {
    if (x === y) {
        //O tipescript infere o tipo que eles tem em comum
        console.log(x); //(parameter) x: string
    }
    else {
        //Aqui detecta os tipos que eles podem ser
        console.log(y);
    }
}
exemple(34, true);
exemple("dfg", "asc");
function move(animal) {
    if ("swim" in animal) {
        return animal.swim(); //(parameter) animal: fish | human
    }
    return animal.fly(); // (parameter) animal: bird
}
//=======================================================================================
// Atribuição
//=======================================================================================
//Declarando variável com tipo string | number
let x = Math.random() < 0.5 ? 0.5 : ">0.5"; //let x: string | number
//Tudo OK
x = 45;
console.log(x);
//Tudo OK
x = "outro valor";
console.log(x);
/**
 * Função para retornararea e cor de uma figura geometrica
 * @param shape Estrutura da figura geometrica
 * @returns Área e cor da figura
 */
function getAreaAndColor(shape) {
    //Declarando variáveis de retorno
    let area = 0;
    let color = "";
    //Verificando tipo a tipo
    if (shape.kind == "Circle")
        area = Math.PI * shape.radius ** 2;
    else if (shape.kind == "Square")
        area = shape.sideLength ** 2;
    else
        area = shape.base * shape.height / 2;
    //Setando cor e retornando valor
    color = shape.color;
    return [area, color];
}
const [area1, color1] = getAreaAndColor({ kind: "Circle", radius: 12.6, color: "blue" });
const [area2, color2] = getAreaAndColor({ kind: "Square", sideLength: 20, color: "red" });
const [area3, color3] = getAreaAndColor({ kind: "Triangle", base: 9, height: 17, color: "green" });
console.log(area1, color1);
console.log(area2, color2);
console.log(area3, color3);
//=======================================================================================
// Never
//=======================================================================================
function getArea(shape) {
    switch (shape.kind) {
        case "Circle":
            return Math.PI * shape.radius ** 2;
        case "Square":
            return shape.sideLength ** 2;
        case "Triangle":
            return shape.base * shape.height / 2;
        default:
            const irregularShape = shape;
            return irregularShape;
    }
}
