//Váriaveis Ball
let Xball = 350;
let Yball = 200;
let diametro = 15;
let raio = diametro / 2;

//=====================================

//Pontos
let pontoD = 0;
let pontoE = 0;

//=====================================

//Váriaveis Raquetes 1
let Xret = 5;
let Yret = 150;
let ComprimentoRet = 10;
let AlturaRet = 90;


//Váriaveis Raquetes 2
let Xret2 = 585;
let Yret2 = 150;
let movimentoCPU;
let perdeCPU = 45;

//=====================================

//Velocidade Ball
let velocidadeXball = 5;
let velocidadeYball = 5;

//=====================================

//Formato layout
function setup() {
  createCanvas(600, 400);
} 

//=====================================
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
function draw() {
  background(0);
  Ball();
  ColisãoBall();
  Vermelho();
  Azul();
  // Oponente();
  pontuação();
  
  }
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//FUNÇÕES DA BOLA

function Ball() {
  
  fill(255, 255, 255);
  circle(Xball, Yball, diametro);
    Xball += velocidadeXball;
    Yball += velocidadeYball;

} 

function ColisãoBall() {
  
    //COLISÃO NO CENÁRIO
  if (Xball + raio > width || Xball - raio < 0) {
    
      (velocidadeXball *= -1);
  }
  
  if (Yball + raio > height || Yball - raio < 0) {
    
      (velocidadeYball *= -1);}
  
  
  //COLISÃO NA RAQUETE 1
  if (Xball - raio < Xret + ComprimentoRet && Yball - raio < Yret + AlturaRet && Yball + raio > Yret) { 
    
    velocidadeXball *= -1

    if(perdeCPU < 100){
        perdeCPU += 5;
      }
    if(perdeCPU == 100){
        perdeCPU -= 45;
      } 
  }    
  //COLISÃO NA RAQUETE 2
  if (Xball - raio > Xret2 - ComprimentoRet && Yball - raio < Yret2 + AlturaRet && Yball - raio > Yret2) {

    velocidadeXball *= -1
    
    if(perdeCPU < 100){
        perdeCPU += 5;
      }
    if(perdeCPU == 100){
        perdeCPU -= 45;
      } 
  }
}
//=====================================

//RAQUETES

function Vermelho() {
  fill(240, 67, 84)  
  rect(Xret, Yret, ComprimentoRet, AlturaRet);
  
  if(keyIsDown(83)){
    Yret += 8;
  }
  
  if(keyIsDown(87)){
    Yret -= 8;
  }
    
}

function Azul() {
  fill(65, 105, 225)  
  rect(Xret2, Yret2, ComprimentoRet, AlturaRet);
    
  if(keyIsDown(DOWN_ARROW)){
    Yret2 += 8;
  }
  
  if(keyIsDown(UP_ARROW)){
    Yret2 -= 8;
}
  
}


function Oponente() {
  fill(255, 255, 255)  
  rect(Xret2, Yret2, ComprimentoRet, AlturaRet);
    
  movimentoCPU = Yball - Yret2 - ComprimentoRet - perdeCPU;
    Yret2+=movimentoCPU
  }

function pontuação () {
  fill(255, 255, 255)
  text(pontoE, 278, 26)
  text(pontoD, 321, 26)


  if(Xball < 10){
    pontoD++
  }
   if(Xball > 590){
    pontoE++}
}