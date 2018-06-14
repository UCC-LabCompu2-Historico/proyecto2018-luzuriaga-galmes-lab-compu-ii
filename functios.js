function velocidadunidad() { //cambio de unidades
    var velocidad = document.getElementById("velocidad").value;
    res=velocidad/3.6;
    return res;
}

function calculardistancia() { //Metodo para calcular la distancia minima de frenado
    var Auto = document.getElementById("Auto").value;
    var Moto = document.getElementById("Moto").value;
    var Camion = document.getElementById("Camion").value;
    var Colectivo = document.getElementById("Colectivo").value;
    var Camioneta = document.getElementById("Camioneta").value;
    var Traffic = document.getElementById("Traffic").value;
    var Asfalto = document.getElementById("Asfalto").ckecked;
    var Cemento = document.getElementById("Cemento").checked;
    var Tierra = document.getElementById("Tierra").checked;
    var Nieve = document.getElementById("Nieve").checked;
    var Kmporh = document.getElementById("Km/h").value;
    var mpors = document.getElementById("m/s").value;
    var vehiculo = document.getElementById("vehiculo").value;
    var unidad = document.getElementById("unidad").value;
    var velocidad = document.getElementById("velocidad").value;
    var coefroz;
    var resultado;
    var url = "Resultados.html#res=" + resultado;
    document.location.assign(url);


    if(unidad === kmporh){
        velocidad = velocidad / 3.6;
    }
    if (Asfalto === true) {
        if (velocidad < 50) {
            coefroz = 0.7;
        }
        else {
            coefroz = 0.63;
        }
    }
    if (Cemento === true) {
        if (velocidad < 50) {
            coefroz = 0.7;
        }
        else {
            coefroz = 0.67;
        }
    }
    if (Tierra === true) {
        if (velocidad < 50) {
            coefroz = 0.65;
        }
        else {
            coefroz = 0.65;
        }
    }
    if (Nieve === true) {
        if (velocidad < 50) {
            coefroz = 0.17;
        }
        else {
            coefroz = 0.15;
        }
    }
    resultado = (velocidad * velocidad) / (2 * 9.8 * coefroz);
    return resultado;
}
//Declaro todas las variables otra vez, ¿Para que?
//Me dio muchos errores con la declaracion de arriba por eso lo intento de esta manera tambien y aqui las hago globales

var Auto= document.getElementById('Auto');
if (Auto != null) {
    Auto = Auto.value;
}
else {
    Auto = null;
}

var Moto= document.getElementById('Moto');
if (Moto != null) {
    Moto = Moto.value;
}
else {
    Moto = null;
}

var Vehiculo= document.getElementById('Vehiculo');
if (Vehiculo!= null) {
    Vehiculo = Vehiculo.value;
}
else {
    Vehiculo = null;
}

var Camion= document.getElementById('Camion');
if (Camion != null) {
    Camion = Camion.value;
}
else {
    Camion = null;
}

var Colectivo = document.getElementById('Colectivo');
if (Colectivo != null) {
    Colectivo = Colectivo.value;
}
else {
    Colectivo = null;
}

var Camioneta= document.getElementById('Camioneta');
if (Camioneta != null) {
    Camioneta = Camioneta.value;
}
else {
    Camioneta = null;
}

var Traffic= document.getElementById('Traffic');
if (Traffic != null) {
    Traffic = Traffic.value;
}
else {
    Traffic = null;
}


//Profe intente utilizando estas dos funcion para obtener los valor que escogen en la lista pero no funciono (las probe por separado)
/*
function getSelectedValue() {
    var Vehiculo = Vehiculo.options[Vehiculo.selectedIndex];
    if (Vehiculo != null) {
        //var Vehiculo = document.getElementById('Vehiculo').value;

        console.log(Vehiculo.text);
       }
}

function getSelectedOption(Vehiculo) {
    var opt;
    for ( var i = 0, len = Vehiculo.options.length; i < len; i++ ) {
        opt = Vehiculo[i];
        if ( opt.Vehículo === true ) {
            break;
        }
    }
    return opt;
    var opt = getSelectedOption(Vehiculo);
    console.log( opt.value );
    console.log( opt.text );
}
*/
var cnv,ctx, pos_x = 0, img ,imgpie;

//Aqui declaro todas las imagenes a utilizar

imgmoto=new Image();
imgmoto.src='Moto.jpg';

imgpie= new Image();
imgpie.src='Piedra.png';

imgboom= new Image();
imgboom.src='boom.jpg';

imgarbol= new Image();
imgarbol.src='Arbol.jpg';

imgautochoque =new Image();
imgautochoque.src= 'autoprueb.png';

imgcamion= new Image();
imgcamion.src='Camion.jpg';

imgcamioneta=new Image();
imgcamioneta.src='Camioneta.jpg';

imgtraffic=new Image();
imgtraffic.src='Traffic.jpg';

//Aca declaro todas las funciones dibujar, dependendiendo cual sea llamada es cual se dibuja, tuve que hacerlas por separado ya que cada imagen tenia distintos tamaños
//y debia ajustarla a una por una

function dibujararbol()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgarbol,230,30,70,130);

}

function dibujarboom()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgboom,223,77,70,70);
}

function dibujarmoto()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgmoto,pos_x,80,70,70);
}

function dibujarauto()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgautochoque,pos_x, 90,75,75);

}

function dibujarcamion()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgcamion,pos_x,80,70,70);
}

function dibujarcamioneta()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgcamioneta,pos_x,80,70,70);
}

function dibujartraffic(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgtraffic,pos_x,80,70,70);

}

function Eleccionvehiculo() { //A traves de esta funcion chequeo que Vehiculo escogio el usuario para poder graficarlo con esa imagen
    //getSelectedOption(Vehiculo.text)

    if (Vehiculo==="Auto")
        dibujarauto();
    if (Vehiculo==='Moto')
        dibujarmoto();
    if (Vehiculo==='Camion')
        dibujarcamion();
    if (Vehiculo==='Traffic')
        dibujartraffic();
    if (Vehiculo==='Camioneta')
        dibujarcamioneta();
}

//Funcion principal arranca cuando se ingresa en la seccion resultados tiene dentro funcion anim
window.onload = function(){
    cnv = document.getElementById('myCanvas');
    ctx = cnv.getContext('2d');
    anim();
}


function anim(){ //Esta es la misma funcion pero solo con el auto, se la dejo activa para que vea cual es la idea nuestra
    ctx.clearRect(0, 0, 600, 200);
    dibujararbol();
    dibujarauto(); //Aqui en ves de decir dibujarauto(); deberia estar la funcion Eleccionvehiculo(); que al preguntar dibuja lo que le corresponde
    pos_x += 1;
    if(pos_x  >170) {
        pos_x = 170;
        dibujararbol();
        dibujarauto();
        dibujarboom();
    }
    setTimeout(anim, 10);
}
//solo cambiando el metodo dibujar auto(); por dibujarmoto(); o cualquier de los otros y se grafica lo solicitado. El unico inconveniente es la pregunta en el if
/*

function anim(){    //Funcion principal se la dejo comentada ya que no me funciona. (Problema al realizar los ifs)
    ctx.clearRect(0, 0, 600, 200); //Lo que hago es limpio el canvas
    dibujararbol();   // dibujo sobre el el arbol
    Eleccionvehiculo(); //Luego llamo a Eleccionvehiculo(); que lo que hace es preguntar que opcion se eligio en el menu principal
                        //Dependiendo de cual se eligio dibuja lo que le corresponde
     pos_x += 1;        //Esta imagen que se dibuja se mueve ene el eje x 1 pixel cada 10 mili segundos
       if(pos_x  >170) { //Cuando llega a x=170 se para ya que choca y ahi la vuelvo a imprimir quieta junto a una explosion y al arbol
           pos_x = 170;
           dibujararbol();
           Eleccionvehiculo();
           dibujarboom();
       }
   setTimeout(anim, 10);    //Alfinal de la funcion declaro el intervalo de tiempo para que se repita la funcion
}

*/
