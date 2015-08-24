function opcion(min, max) {
    var numero = Math.floor(Math.random() * (min,max));
    return numero;
}

var piedra = 0;
var papel = 1;
var tijeras = 2;

var opciones = ["Piedra", "Papel", "Tijeras"];
var opcionMaquina = opcion(0,3);
var opcionUsuario = prompt("Elige: \n0 Piedra \n1 Papel \n2 Tijeras", 0);


alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió: " + opciones[opcionMaquina]);


    if(opcionUsuario == piedra)
    {
        if(opcionMaquina == piedra)
        {
            alert("Empate");
        }
        else if(opcionMaquina == papel)
        {
            alert("Perdiste");
        }
        else if(opcionMaquina == tijeras)
        {
            alert("Ganaste");
        }
    }
    
    if(opcionUsuario == papel)
    {
        if(opcionMaquina == papel)
        {
            alert("Empate");
        }
        else if(opcionMaquina == piedra)
        {
            alert("Ganaste");
        }
        else if(opcionMaquina == tijeras)
        {
            alert("Perdiste");
        }
    }

    if(opcionUsuario == tijeras)
    {
        if(opcionMaquina == tijeras)
        {
            alert("Empate");
        }
        else if(opcionMaquina == piedra)
        {
            alert("Perdiste");
        }
        else if(opcionMaquina == papel)
        {
            alert("Ganaste");
        }
    }
    
