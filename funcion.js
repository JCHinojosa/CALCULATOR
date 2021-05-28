//practica para entender paso a paso como funciona, como se coloca y como se complementa el javaScript con html.

var operandoa;
var operandob;
var operacion;
function init(){
    //variables asignamos variable a cada boton
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    //eventos
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1"; //aqui se manda llamar la variable resultado y dice que la variebale resultado punto el concenido de texto que haya es igual a lo que ya tenia mas el numero 1, asi si ya habia un numero anteriormente se concatena por ejemplo si habia un 2 ahora sera 21.     
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2"; //y asi sucesicavemte para cada numero     
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";      
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";      
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";      
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";      
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";      
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";      
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";      
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";      
    }

    reset.onclick = function(e){ // aqui llamaremos a la funcion resetear
        resetear ();     
    }
    suma.onclick = function(e){
             operandoa = resultado.textContent;//mandamos llamar el operando a.
             operacion = "+";//se asigna el valor de la operacion
             limpiar();//se limpia la pantalla         
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;//mandamos llamar el operando a.
        operacion = "-";//se asigna el valor de la operacion
        limpiar();//se limpia la pantalla         
    
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;//mandamos llamar el operando a.
        operacion = "*";//se asigna el valor de la operacion
        limpiar();//se limpia la pantalla         
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;//mandamos llamar el operando a resultado.el contenido de texto.
        operacion = "/";//se asigna el valor de la operacion
        limpiar();//se limpia la pantalla         
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
      
    }
}

function limpiar (){
    resultado.textContent = ""; //limpamos pantalla con una cadena vacia
}

function resetear (){
    resultado.textContent = ""; // aqui de igual manera limpiamos la pantalla pero tambien todos los operadores regresan a 0.
    operandoa = 0 ;
    operandob = 0 ;
    operacion = "";
}

function resolver (){ // al llamara esta funcion entramos a un switch
    var res = 0;        // declaramos una variable e inicializamos en 0.
    switch (operacion){ //switch recibe como parametro operacion.
                            // hacemos la respectiva operacion para cada caso.
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;

         case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;   
        
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;

        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    // salimos del switch
    resetear(); //despues reseteamos todas las variables de operacion.
    resultado.textContent = res; // se imprime el resultado de la operacion con la variable res en resultado que es la pantalla.
}