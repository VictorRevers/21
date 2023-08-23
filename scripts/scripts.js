//import Player from "./modules/Player";
const showNumber = document.getElementById("_number");
const sumH1 = document.getElementById("_numberSum");
let sum = 0;

var player1 = new Player(1, 0);
var player2 = new Player(2, 0);

let playersList = [];

playersList.push(player1);


    
function stop(playerNum){    
    player1.sum = sum;
    console.log(player1);

}

function randomNumber(){
    
    let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A"];
    
    //get random value from array
    let random = numberArr[Math.floor(Math.random() * numberArr.length )];
    
    showNumber.innerText = random;
    

    if(random === "A"){     
         let value = window.prompt("1 ou 11?");
         value
         sum +=parseInt(value);        
    }else{
        sum += random;
    }

    
    sumH1.innerText = `Soma:${sum}`;

    if(sum > 21){
        alert("PASSOU!");
        player1.active = false;
        console.log(player2);
        console.log(player1);
    }else if(sum === 21){
        alert("GANHOU!");
    }   
}