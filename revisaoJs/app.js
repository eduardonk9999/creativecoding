// variables
let x = 10;
const y = 33;

x = 20;
y = 44; // error is consts, nao podemos mudar o valor

// Functions
const multiply = (a, b) => {
    return a * b;
}

const result = multiply(8, 4) //32
console.log(result)

// ARRAYS & OBJECTS
const arr = [];
const obj = {};

const colors = ['blue', 'yellow', 'red', 'green'];
const polygon = { sides: 5, radius: 120 };

console.log(colors[0])
console.log(polygon.radius)


// LOOPS
for (i = 0; i < colors.length; i++) {
    console.log(i, colors[i])
}

colors.forEach((item, i) => {
    console.log(i, item)
})

// CONDITIONALS
if(true) console.log('yea');
else console.log('nay');

let night = true
let backgroundColor

backgroundColor = (night) ? 'black' : 'white'

if(night === true) backgroundColor = 'black'
else backgroundColor = 'white';



// ASYNC  & AWAIT
/**
 * Em JavaScript, o código é executado de forma síncrona, 
 * linha por linha. Uma variável só existe depois de ser declarada e inicializada — antes disso, 
 * ela não pode ser acessada. O comportamento assíncrono entra quando usamos funções que não bloqueiam a execução 
 * (como setTimeout, fetch, async/await ou Promises), permitindo que o código continue rodando enquanto 
 * espera algo acontecer.
 */

const loadImage = async ( url ) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img)
        img.onerror = () => reject();
        img.src = url;
    })
}

const start = async () => {
    const myImage = await loadImage('https://URL');
    console.log(myImage.width);
}





