let stile = true;
//funzione per rigiocare 
function refresh(){
    window.location.reload(true);
}
//Funzione per il cambio di colori
function mod(){
    let anatomy = document.getElementById("anatomy");
    stile = !stile;
    if(stile){
        anatomy.style.backgroundColor = "white";
        anatomy.style.color = "black";
    }
    else{
        anatomy.style.backgroundColor = "#2b2a33";
        anatomy.style.color = "white";
    }
}
//Funzione per far ridere il prof
function RickRoll(){
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
}