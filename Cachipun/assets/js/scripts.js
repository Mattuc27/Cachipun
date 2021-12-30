// Preguntamos la cantidad de veces que se quiere jugar.
var juegos = prompt("Hola, ¿Cuántas veces deseas jugar?");
var juegos = parseInt(juegos)

// Guardamos el nombre del jugador
var nombre = prompt("Ingresa tu nombre")
var nombre = sessionStorage.setItem('jugador', nombre) 

var jugador = sessionStorage.getItem('jugador')

// Asignamos puntaje inicial para la máquina y el jugador
var punto_pc = 0;
var punto_player = 0;

alert("Todo listo. ¿Preparado para jugar?")

// Iniciamos un ciclo que permitirá jugar la cantidad de veces deseada.
for(var i = 1; i<=juegos; i=i+1){
    var mano_player = prompt("¿Que jugarás? (Piedra, Papel o Tijera)")

    // Validación de datos jugador
    if(mano_player=="tijera"){
        }
        else if(mano_player=="piedra"){
        }
        else if (mano_player=="papel"){
        }
        else{
        alert("Ingresa una opción válida.")
        }
    
    // Determina mano de la máquina.
    var mano_pc = Math.floor(Math.random()*3);
    
    if (mano_pc==0) {
        var mano_pc = "Tijera"
        }
        else if (mano_pc==1) {
        var mano_pc = "Piedra"
        }
        else {
        var mano_pc = "Papel"
        }
    
    // Jugando
    if(mano_player=="tijera"){
        if(mano_pc=="Tijera"){
            alert("La maquina saca " + mano_pc + "\n¡Han empatado! Intenta denuevo " + jugador + ".")
        }
        else if(mano_pc=="Piedra"){
            alert("La maquina saca " + mano_pc + "\n¡Has perdido " + jugador +"! La máquina ha ganado esta vez.")
            var punto_pc = punto_pc + 1;
        }
        else if(mano_pc=="Papel"){
            alert("La maquina saca " + mano_pc + "\n¡Felicitaciones " + jugador + "! Has ganado.")
            var punto_player = punto_player + 1;
        } 
    }
    else if(mano_player=="piedra"){
        if(mano_pc=="Tijera"){
            alert("La maquina saca " + mano_pc + "\n¡Felicitaciones " + jugador + "! Has ganado.")
            var punto_player = punto_player + 1;
        }
        else if(mano_pc=="Piedra"){
            alert("La maquina saca " + mano_pc + "\n¡Han empatado! Intenta denuevo " + jugador + ".")
        }
        else if(mano_pc=="Papel"){
            alert("La maquina saca " + mano_pc + "\n¡Has perdido " + jugador +"! La máquina ha ganado esta vez.")
            var punto_pc = punto_pc + 1;
        }
    }

    else if(mano_player=="papel"){
        if(mano_pc=="Tijera"){
            alert("La maquina saca " + mano_pc + "\n¡Has perdido " + jugador +"! La máquina ha ganado esta vez.")
            var punto_pc = punto_pc + 1;
        }

        else if(mano_pc=="Piedra"){
            alert("La maquina saca " + mano_pc + "\n¡Felicitaciones " + jugador + "! Has ganado.")
            var punto_player = punto_player + 1;
        }

        else if(mano_pc=="Papel"){
            alert("La maquina saca " + mano_pc + "\n¡Han empatado! Intenta denuevo " + jugador + ".")
        }
    }
}

// Muestra los resultados finales de la partida.
if(punto_player>punto_pc){
    var ganador = document.getElementById("ganador");
    ganador.innerText = "¡El ganador ha sido " + jugador + "!"
}
else if(punto_player<punto_pc){
    var ganador = document.getElementById("ganador");
    ganador.innerText = "¡El ganador ha sido la máquina! Mas suerte la próxima vez."
}

else if(punto_player==punto_pc){
    var ganador = document.getElementById("ganador");
    ganador.innerText = "¡Ha sido un empate! Juguemos denuevo."
}

var puntaje = document.getElementById("puntaje");
puntaje.innerHTML = "El puntaje de " + jugador + " ha sido de " + punto_player + ". Y el de la máquina ha sido " + punto_pc + "."

var ultimo = document.getElementById("ultimo");
ultimo.innerHTML = "El último ganador fue " + score; 