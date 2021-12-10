
function letsPlay () {
const locaiton1 = 3;
const location2 = 4; 
const location3 = 5; 
let guess ; 
let hits = 0 ; 
let  guesses = 0; 
let isSunk = false; 



while (isSunk == false) {
 guess = prompt ("Ready, aim, fire! \n\n Do you think you can sink my battleship? \n\nEnter a value between 0 and 6 to give it a try:"); 
 
     
if (guess == null) {
    return (alert ('You have aborted, are you too scared?'))
}
else if (guess < 0 || guess > 6 ) {

     (alert('Please enter a valid cell number. Your game will start over. \n\n Do you always have this much trouble following directions?')); 
 }
 else {
     guesses = guesses + 1
 

 if (guess == locaiton1 || guess == location2 || guess == location3) {
     alert ('HIT')
     hits = hits + 1
     if (hits == 3) { 
         isSunk = true; 
         alert (' You Sunk my battleship!')
     }
 } else {alert ('MISS'); }





}
} 

let stats = "you took " + guesses + ' guesses to sink the battle ship, \n\n which means your shooting accuracy was ' + ((3/guesses) * 100) + '%'; 
alert (stats); } 















   
       
   


      


    

    


     


      

     
     











    











