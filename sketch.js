let posX; // CREO TODAS LAS VARIABLES QUE VOY A USAR PARA LOS 2 CIRCULOS Y EL CUADRADO
let posY;
let velX;
let velY;
let posX2;
let posY2;
let velX2;
let velY2;


function setup() {

  createCanvas(windowWidth, windowHeight); // creo el canvas donde voy a trabajar q va a tener el ancho y alto de la pantalla
  background(0); //fondo negro
  posX = random(width); //posx y posy van a ser un numero random entre 0 y el ancho o alto del canvas
  posY = random(height);
  velX =  15; //la velocidad con la que va a moverese el circulo
  velY =  15;
  posX2 = random(width); //o mismo que arriba
  posY2 = random(height);
  velX2 = -15;
  velY2 = -15;
  
}
function draw() {

  noFill(); //no relleno el cuadrado (mas abajo lleno los circulos)
  frameRate(60);
  square(width/2-300,height/2 -300,600); //creo un cuadrado con 600 de ancho y alto centrado en el canvas
  fill(30,30); //lleno los circulos
  circle(mouseX, mouseY, 10); //circulo chico que sigue el mouse
  circle(posX, posY, 50); //circulo que aparece en random x y y
  circle(posX2, posY2, 50); // lo mismo
  square(900, posY2, 100); //un cuadrado que solo se mueve en y, tiene x fija
  square(posX, 400, 100); //un cuadrado que solo se mueve en x, tiene y fija
  stroke(random(255), random(255), random(255)); //el color del borde de todo
  strokeWeight(2); //ancho del borde
  
  posX = posX + velX; //a la posicion le sumo la velocidad para que se mueva
  posY = posY + velY; // lo mismo para todo
  posX2 = posX2 + velX2;
  posY2 = posY2 + velY2;
  
  if(posX >= width || posX < 0){ //si el circulo pasa el borde del canvas, se multiplica la vel . -1 para que cambie de direccion y si se pasa a la izquierda, posx<0 se hace -velx * -1 para que vaya ahora hacia la derecha
    velX = velX * -1;
  }
  if(posY >= height || posY < 0){ // lo mismo para todo
    velY = velY * -1;
  }
  if(posX2 >= width || posX2 < 0){ 
    velX2 = velX2 * -1;
  }
  if(posY2 >= height || posY2 < 0){    
    velY2 = velY2 * -1;
  }
  
 
}
