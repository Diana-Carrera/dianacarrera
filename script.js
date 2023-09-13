console.log("Hola");

let dicionario = ["APPLE", "MOUSE", "SWOOD", "MAPLE", "TREES"];
let indice = Math.floor(Math.random() * dicionario.length-1) + 1;
console.log(indice);
//let parabra = diccionario[indice];
let palabra;
fetch("https://random-word-api.herokuapp.com/word?length=5&lang=es")
    .then(Response => Response.json())
    .then(Response => {
        console.log(Response)
        palabra = Response[0].toUpperCase()
        console.log(palabra)
    })
    .catch(err => console.error(err));
let intentos = 6;
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

function intentar(){
    //console.log(palabra);
    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";

    if(INTENTO.length !=5){
        alert("Debe ingresar una palabra de 5 letras")
        return
    }
    
    if (INTENTO === palabra) {
        terminar("<h1>!FELICIDADES GANASTE!</h1>")
        //console.log("!FELICIDADES GANASTE!")
        return
    }
    for (let i in palabra){
        const SPAN = document.createElement("span");
        SPAN.className = "letter";
        if (INTENTO[i] === palabra[i]){
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "#79b851";
            //console.log(INTENTO[i], "VERDE")
        }else if( palabra.includes(INTENTO[i])) {
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = "#f3c237";
                //console.log(INTENTO[i], "AMARILLO")
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "#a4aec4";
            //console.log(INTENTO[i], "GRIS")
            }
            ROW.appendChild(SPAN);
        }
        GRID.appendChild(ROW);
        intentos--
        if (intentos==0){
            terminar("<h1>PERDISTE!")
            //console.log("PERDISTE!")
        }
        
    }

function leerIntento(){
    let intento = document.getElementById("guess-input")
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input")
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
}


