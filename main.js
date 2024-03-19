
const color = ["red", "yellow", "blue", "white", "green", "grey"];
let contador = 0;

function cambiarColor(event){
    let key = event.key;
    if (contador<color.length-1){
        document.getElementById("input-text").style.backgroundColor = color[contador];
        contador++;
    }
    else{
        document.getElementById("input-text").style.backgroundColor = color[contador];
        contador=0;
    }
    
}

