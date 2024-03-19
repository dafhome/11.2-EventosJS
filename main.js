
const color = ["red", "yellow", "blue", "white", "green", "grey", "black"];
let contador = 0;

function cambiarColor(event){
    let key = event.key;

    if (contador<color.length-1){
        document.getElementById("input-text").style.backgroundColor = color[contador];
        contador++;
        console.log(contador);
    }
    else{
        document.getElementById("input-text").style.backgroundColor = color[contador];
        contador=0;
        console.log(contador);
    }
    
}

