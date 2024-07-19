//=======================================================================================
// Primitivas
//=======================================================================================

//Tipo string
let variableString = "hello World";

//Tipo number, não há diferença entre os tipos int e float, no typescript são ambos number
let variableNumber = 42;
variableNumber = 3.6;

//Tipo boolean
let variableBoolean = true;

//=======================================================================================
// Arrays
//=======================================================================================

//Arrays
let ar1:number[] = [1,2,3];
let ar2:Array<number> = [1,2,3]; 

//=======================================================================================
// Tipo any
//=======================================================================================
//Tipo any
let obj:any = {x : 0};
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n:number = obj;

//=======================================================================================
// Definição de tipo
//=======================================================================================
//Definição de tipo
let piAprox:number = 3.14159;


//=======================================================================================
// Funções
//=======================================================================================

//Funções
function sum(parcelA:number, parcelB:number)
{
    return parcelA + parcelB;
}

// sum("2","3"); //Typescript capta o erro: Argument of type 'string' is not assignable to parameter of type 'number'.

function multiply(factorA:number, factorB:number):number
{
    return factorA * factorB;
}

let teste = multiply(4,6)

//=======================================================================================
// Tipo object
//=======================================================================================
//Tipo object
function printPoint6(point:{x:number , y:number})
{
    console.log("Valor de X: ");
    console.log(point.x);
    console.log("Valor de Y: ");
    console.log(point.y);
}

printPoint6({x:3 , y:4});



//=======================================================================================
// Propriedades opcionais
//=======================================================================================
function printName(obj:{firstName: string , lastName?: string})
{
    console.log(obj.firstName);
}

printName({firstName:"Bob"});
printName({firstName:"Alice", lastName:"Alisson"});


//=======================================================================================
// União
//=======================================================================================
//Tipos de união
let idValue:number|string
function printId(id:number|string):void
{
    // console.log(id.toLowerCase()) //erro Property 'toLowerCase' does not exist on type 'string | number'.
                                    //Property 'toLowerCase' does not exist on type 'number'.

    if(typeof id === "string")
        console.log(id.toLowerCase());
    else
        console.log(id);
}

printId("Rafael");
printId(21);


//=======================================================================================
// Alias
//=======================================================================================
//Criando alias para um a estrutura de ponto cartesiano
type Point = 
{
    x:number,
    y:number
}

//Definindo uma função que recebe essa estrutura por exemplo
function printPoint(point:Point):void
{
    console.log(point.x,point.y)
}

//E com isso, podemos chamar de diversas formas a estrutura

//Como uma variável
let point:Point = {x:4, y:7};
printPoint(point)

//Diretamente na chamada da função
printPoint({x:6, y:9});

//=======================================================================================
// Interfaces
//=======================================================================================

interface Particula 
{
    massa:number
    carga:number
}

//Exemplo da diferença entre interface e alias
interface AtomoI
{
    proton:Particula[]
    neutron:Particula[]
    eletron:Particula[]
}

//Esqueci de adicionar o tipo dele. Com interface fazemos isso assim
interface AtomoI
{
    proton:Particula[]
    neutron:Particula[]
    eletron:Particula[]
    tipo:string
}

//ou
interface AtomoC extends AtomoI
{
    tipo:string
}

//Mas no alias não podemos fazer isso
type AtomoA =
{
    proton:Particula[]
    neutron:Particula[]
    eletron:Particula[]
}

// Erro typescript : Duplicate identifier 'AtomoA'.ts(2300)
// type AtomoA = 
// {
//     proton:Particula[]
//     neutron:Particula[]
//     eletron:Particula[]
// }


//=======================================================================================
// Assertions
//=======================================================================================
//Pegando elemento html, que pelo retorno da função é um HTMLElement, mas caso saibamos que
// é um HTMLCanvasElement, então podemos especificar isto ao typescript
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;


//=======================================================================================
// Literais
//=======================================================================================
//Podemos criar variáveis de um unico tipo
let quark:"UP" = "UP";

//Tudo certo aqui
quark = "UP";

//Mas aqui não
//Type '"up"' is not assignable to type '"UP"'.ts(2322)
// quark = "up";

//Podemos citar outros exemplos
function printQuark(quark:"TOP"|"DOWN"|"UP"|"BOTTOM"):void
{
    console.log(quark);
}

//Chamada ok
printQuark("DOWN");

//Chamada errada: Argument of type '"CHARM"' is not assignable to parameter of 
// type '"UP" | "TOP" | "DOWN" | "BOTTOM"'.ts(2345)
// printQuark("CHARM");


//=======================================================================================
// assertion null
//=======================================================================================
function printData(data:number|null):void
{
    //Sem o ! ele dá erro: Object is possibly 'null'.ts(2531)
    console.log(data!.toExponential());
}

//Tudo ok
printData(13);

//Erro:  Cannot read properties of null (reading 'toExponential')
// printData(null);