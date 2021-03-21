var database;
var dog, happyDogImg,feedMeDogImg
var foodS, foodStockReference;
var feed,add;
var press=0;

function preload()
{
  happyDogImg = loadImage("happy.png");
  feedMeDogImg = loadImage("waiting.png");
  milk = loadImage("Milk.png")

}

function setup() {
  database = firebase.database();

  createCanvas(500, 500);
  
  dog = createSprite(420,250) ;
  dog.scale = 0.2;
  dog.addImage(feedMeDogImg);
  
  foodStockReference = database.ref('/Food');
  foodStockReference.on("value",readStock);
}

function draw() {  
  background(46,139,87);

  feed=createButton("Feed dog");
  feed.position(100,100);

  add=createButton("Add food");
  add.position(200,100);

  add.mousePressed(function(){
  dog.addImage(feedMeDogImg);
  press+=1;
 })

  feed.mousePressed(function(){
    writeStock(foodS);
    dog.addImage(happyDogImg);
    press-=1;
 })

if (press===1 || press<0 || press===0){

  image(milk,50,100,100,100);

  } 

if (press===2){

  image(milk,50,100,100,100);
  image(milk,100,100,100,100);
  
  } 

if (press===3){
  
  image(milk,50,100,100,100);
  image(milk,100,100,100,100);
  image(milk,150,100,100,100);
    
  } 

if (press===4){
  
  image(milk,50,100,100,100);
  image(milk,100,100,100,100);
  image(milk,150,100,100,100);
  image(milk,200,100,100,100);
      
  } 

  if (press===5){
  
    image(milk,50,100,100,100);
    image(milk,100,100,100,100);
    image(milk,150,100,100,100);
    image(milk,200,100,100,100);
    image(milk,250,100,100,100);
        
    } 

  if (press===6){
  
    image(milk,50,100,100,100);
    image(milk,100,100,100,100);
    image(milk,150,100,100,100);
    image(milk,200,100,100,100);
    image(milk,250,100,100,100);
    image(milk,50,200,100,100);
          
    } 

   if (press===7){
  
     image(milk,50,100,100,100);
     image(milk,100,100,100,100);
     image(milk,150,100,100,100);
     image(milk,200,100,100,100);
     image(milk,250,100,100,100);
     image(milk,50,200,100,100);
     image(milk,100,200,100,100);
            
    } 


    if (press===8){
  
      image(milk,50,100,100,100);
      image(milk,100,100,100,100);
      image(milk,150,100,100,100);
      image(milk,200,100,100,100);
      image(milk,250,100,100,100);
      image(milk,50,200,100,100);
      image(milk,100,200,100,100);
      image(milk,150,200,100,100);
             
     } 


    if (press===9){
  
      image(milk,50,100,100,100);
      image(milk,100,100,100,100);
      image(milk,150,100,100,100);
      image(milk,200,100,100,100);
      image(milk,250,100,100,100);
      image(milk,50,200,100,100);
      image(milk,100,200,100,100);
      image(milk,150,200,100,100);
      image(milk,200,200,100,100);
             
     } 


    if (press===10){
  
      image(milk,50,100,100,100);
      image(milk,100,100,100,100);
      image(milk,150,100,100,100);
      image(milk,200,100,100,100);
      image(milk,250,100,100,100);
      image(milk,50,200,100,100);
      image(milk,100,200,100,100);
      image(milk,150,200,100,100);
      image(milk,200,200,100,100);
      image(milk,250,200,100,100);
             
    } 

    if (press===11){
  
      image(milk,50,100,100,100);
      image(milk,100,100,100,100);
      image(milk,150,100,100,100);
      image(milk,200,100,100,100);
      image(milk,250,100,100,100);
      image(milk,50,200,100,100);
      image(milk,100,200,100,100);
      image(milk,150,200,100,100);
      image(milk,200,200,100,100);
      image(milk,250,200,100,100);
      image(milk,50,300,100,100);
             
    } 


    if (press===12){
  
      image(milk,50,100,100,100);
      image(milk,100,100,100,100);
      image(milk,150,100,100,100);
      image(milk,200,100,100,100);
      image(milk,250,100,100,100);
      image(milk,50,200,100,100);
      image(milk,100,200,100,100);
      image(milk,150,200,100,100);
      image(milk,200,200,100,100);
      image(milk,250,200,100,100);
      image(milk,50,300,100,100);
      image(milk,100,300,100,100);
             
    } 


    if (press===13){
  
      image(milk,50,100,100,100);
      image(milk,100,100,100,100);
      image(milk,150,100,100,100);
      image(milk,200,100,100,100);
      image(milk,250,100,100,100);
      image(milk,50,200,100,100);
      image(milk,100,200,100,100);
      image(milk,150,200,100,100);
      image(milk,200,200,100,100);
      image(milk,250,200,100,100);
      image(milk,50,300,100,100);
      image(milk,100,300,100,100);
      image(milk,150,300,100,100);
             
    } 

    
    if (press===14){
  
      image(milk,50,100,100,100);
      image(milk,100,100,100,100);
      image(milk,150,100,100,100);
      image(milk,200,100,100,100);
      image(milk,250,100,100,100);
      image(milk,50,200,100,100);
      image(milk,100,200,100,100);
      image(milk,150,200,100,100);
      image(milk,200,200,100,100);
      image(milk,250,200,100,100);
      image(milk,50,300,100,100);
      image(milk,100,300,100,100);
      image(milk,150,300,100,100);
      image(milk,200,300,100,100);
             
    } 

    if (press===15 || press>15){
  
      image(milk,50,100,100,100);
      image(milk,100,100,100,100);
      image(milk,150,100,100,100);
      image(milk,200,100,100,100);
      image(milk,250,100,100,100);
      image(milk,50,200,100,100);
      image(milk,100,200,100,100);
      image(milk,150,200,100,100);
      image(milk,200,200,100,100);
      image(milk,250,200,100,100);
      image(milk,50,300,100,100);
      image(milk,100,300,100,100);
      image(milk,150,300,100,100);
      image(milk,200,300,100,100);
      image(milk,250,300,100,100);
             
    } 


  drawSprites();
}

function readStock(data){
    foodS = data.val();
}

function writeStock(foodValue){
    database.ref('/').update({
      Food : foodValue+1
    })
}