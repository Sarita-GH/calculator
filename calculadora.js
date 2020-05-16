const botonNumeros=document.getElementsByName("data-number");
const botonOpera=document.getElementsByName("data-opera");
const botonDelete=document.getElementsByName("data-delete");
const botonEqual=document.getElementsByName("data-equal");
let result=document.getElementById("result");
let result2=document.getElementById("result1");

let numeroAnterior=''
let numeroPosterior=''
let operador
let numeroActual
for(let i=0; i<botonNumeros.length; i++) {
    const callback = function() {
        result.value += botonNumeros[i].innerText;
        if (!operador){
            numeroAnterior+= botonNumeros[i].innerText;
        }
        else{
            numeroPosterior+= botonNumeros[i].innerText;
            numeroActual=calcular(numeroAnterior,numeroPosterior,operador);
            console.log(numeroActual);
            result2.value=numeroActual;
            
        }
    }
    botonNumeros[i].addEventListener("click", callback)
}

for(let j=0; j<botonOpera.length; j++){
    const callback=function(){
        result.value+=botonOpera[j].innerText;
        if(!numeroPosterior){
        operador=botonOpera[j].innerText;
    }
        else{
        operador=botonOpera[j].innerText;
        añadir();
        numeroActual=calcular(numeroAnterior,numeroPosterior,operador);
        result2.value=''+numeroActual;
        }
    }
    botonOpera[j].addEventListener("click", callback)
    
}

let k=0;
botonDelete[k].addEventListener("click", function(){
    result.value="";
    result2.value="";
    setValoresDefecto();
});

let l=0;
botonEqual[l].addEventListener("click", function(){
    result.value = ''+numeroActual
    numeroAnterior = ''+numeroActual
    numeroPosterior=""
    operador=""
})

function setValoresDefecto() {
    numeroAnterior=''
    numeroPosterior=''
    operador=undefined
    numeroActual=undefined
}

function reiniciar(){
    numeroAnterior = ''+numeroActual
    numeroPosterior=""
    operador=""
    // numeroActual=undefined
}
function añadir(){
    
    numeroAnterior=''+numeroActual
    numeroPosterior=0
}

function calcular(n1,n2,operador){
    let calculoFinal
    n1=parseFloat(n1)
    n2=parseFloat(n2)
    if (operador==="+"){
        calculoFinal=n1+n2;
    }
    else if (operador==="-"){
        calculoFinal=n1-n2;
    }
    else if (operador==="/"){
        calculoFinal=n1/n2;
    }
    else if (operador==="X"){
        calculoFinal=n1*n2;
    }
    return calculoFinal;
}



/*function calcular() {
    let calculoFinal
    let resultArray
    if (result.value.includes("+")){
        resultArray = result.value.split('+');
        calculoFinal = parseFloat(resultArray[0]) + parseFloat(resultArray[1]);
    }
    else if (result.value.includes("-")){
        resultArray = result.value.split('-');
        calculoFinal = parseFloat(resultArray[0]) - parseFloat(resultArray[1]);
    }
    else if (result.value.includes("/")){
        resultArray = result.value.split('/');
        calculoFinal = parseFloat(resultArray[0]) / parseFloat(resultArray[1]);
    }
    else if (result.value.includes("X")){
        resultArray = result.value.split('X');
        calculoFinal = parseFloat(resultArray[0]) * parseFloat(resultArray[1]);
    }
    return calculoFinal;
}*/




/*
botonEqual.addEventListener("click", function(){
    calcular();
    actualizarDisplay();
    
});

botonDelete.addEventListener("click", function(){
    clear();
    actualizarDisplay();
});
*/
