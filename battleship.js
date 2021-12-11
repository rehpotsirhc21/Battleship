
function letsPlay () {
const randomLoc = Math.floor (Math.random () * 5)
console.log (randomLoc);
const locaiton1 = randomLoc;
const location2 = randomLoc + 1; 
const location3 = location2 + 1 ;
let guess ; 
let hits = 0 ; 
let  guesses = 0; 
let isSunk = false; 
//new array variable 
const duplicateGuess = []


while (isSunk == false) {
 guess = prompt ("Ready, aim, fire! \n\n Do you think you can sink my battleship? \n\nEnter a value between 0 and 6 to give it a try. Each number may only be selected once.  \n\n You have already chosen the the following: " + duplicateGuess.sort()); 
 //new code 

// existing code   
if (guess == null) {
    return (alert ('You have aborted, are you too scared?'))
}
else if (guess < 0 || guess > 6 ) {

     (alert('Please enter a valid cell number. Your game will start over. \n\n Do you always have this much trouble following directions?')); 
 }
 else {
    
     guesses = guesses + 1
 //trying something here
 
if (duplicateGuess.includes(guess) ){

   return alert('you have already guessed this value please try again. The game will start over');
}


 //below is the if that works

 if (guess == locaiton1 || guess == location2 || guess == location3) {
     
         alert ('HIT')

      hits = hits + 1
        duplicateGuess.push (guess);
        console.log (duplicateGuess); 
        

     if (hits == 3) { 
         isSunk = true; 
         alert (' You Sunk my battleship!')
     }
 } else {
      duplicateGuess.push (guess);
    alert ('MISS'); }





}
} 

let stats = "you took " + guesses + ' guesses to sink the battle ship, \n\n which means your shooting accuracy was ' + ((3/guesses) * 100) + '%'; 
alert (stats); } 















   
       
   


      


    

    


     


      

     
     











    











