function velocidadunidad() { //cambio de unidades
    var velocidad = document.getElementById("velocidad").value;
    res = velocidad / 3.6;
    return res;
}

function calculardistancia() { //Metodo para calcular la distancia minima de frenado
    var Vehiculo = document.getElementById("vehiculo").value;
    var Ruta = document.formulario.ruta.value;
    var unidad = document.getElementById("unidad").value;
    var velocidad = document.getElementById("velocidad").value;
    var coefroz;
    var resultado;


    if (unidad === "Km/h") {
        velocidad = velocidad / 3.6;
    }
    switch (Ruta) {
        case "Asfalto":
            coefroz = (velocidad < 50) ? 0.7 : 0.63;
            break;
        case "Cemento":
            coefroz = (velocidad < 50) ? 0.7 : 0.67;
            break;
        case "Tierra":
            coefroz = 0.65;
            break;
        case "Nieve":
            coefroz = (velocidad < 50) ? 0.17 : 0.15;
    }

    resultado = (velocidad * velocidad) / (2 * 9.8 * coefroz);
    var url = "Resultados.html#" + resultado + "#" + Vehiculo;
    document.location.assign(url);
}

var cnv, ctx, pos_x = 0, img, imgpie;

//Aqui declaro todas las imagenes a utilizar

imgmoto = new Image();
imgmoto.src = 'Moto.jpg';

imgpie = new Image();
imgpie.src = 'Piedra.png';

imgboom = new Image();
imgboom.src = 'boom.jpg';

imgarbol = new Image();
imgarbol.src = 'Arbol.jpg';

imgautochoque = new Image();
imgautochoque.src = 'autoprueb.png';

imgcamion = new Image();
imgcamion.src = 'Camion.jpg';

imgcamioneta = new Image();
imgcamioneta.src = 'Camioneta.jpg';

imgtraffic = new Image();
imgtraffic.src = 'Traffic.jpg';

//Aca declaro todas las funciones dibujar, dependendiendo cual sea llamada es cual se dibuja, tuve que hacerlas por separado ya que cada imagen tenia distintos tamaños
//y debia ajustarla a una por una

function dibujararbol() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgarbol, 230, 30, 70, 130);

}

function dibujarboom() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgboom, 223, 77, 70, 70);
}

function dibujarmoto() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgmoto, pos_x, 80, 70, 70);
}

function dibujarauto() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgautochoque, pos_x, 90, 75, 75);

}

function dibujarcamion() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgcamion, pos_x, 80, 70, 70);
}

function dibujarcamioneta() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgcamioneta, pos_x, 80, 70, 70);
}

function dibujartraffic() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgtraffic, pos_x, 80, 70, 70);

}

function Eleccionvehiculo() { //A traves de esta funcion chequeo que Vehiculo escogio el usuario para poder graficarlo con esa imagen
    //getSelectedOption(Vehiculo.text)
    var datos = document.location.hash.split('#');
    var Vehiculo = datos[2];

    if (Vehiculo === "Auto")
        dibujarauto();
    if (Vehiculo === 'Moto')
        dibujarmoto();
    if (Vehiculo === 'Camion')
        dibujarcamion();
    if (Vehiculo === 'Traffic')
        dibujartraffic();
    if (Vehiculo === 'Camioneta')
        dibujarcamioneta();
}

//Funcion principal arranca cuando se ingresa en la seccion resultados tiene dentro funcion anim
function start () {
    cnv = document.getElementById('myCanvas');
    ctx = cnv.getContext('2d');
    anim();
};


function anim() {    //Funcion principal se la dejo comentada ya que no me funciona. (Problema al realizar los ifs)
    ctx.clearRect(0, 0, 600, 200); //Lo que hago es limpio el canvas
    dibujararbol();   // dibujo sobre el el arbol
    Eleccionvehiculo(); //Luego llamo a Eleccionvehiculo(); que lo que hace es preguntar que opcion se eligio en el menu principal
                        //Dependiendo de cual se eligio dibuja lo que le corresponde
    pos_x += 1;        //Esta imagen que se dibuja se mueve ene el eje x 1 pixel cada 10 mili segundos
    if (pos_x > 170) { //Cuando llega a x=170 se para ya que choca y ahi la vuelvo a imprimir quieta junto a una explosion y al arbol
        pos_x = 170;
        dibujararbol();
        Eleccionvehiculo();
        dibujarboom();
    }
    setTimeout(anim, 10);    //Alfinal de la funcion declaro el intervalo de tiempo para que se repita la funcion
}