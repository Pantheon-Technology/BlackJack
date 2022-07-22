let extraCard = 0;
let message = "";
let cards = [];
let sum = 0;
let gameInSession = false;

let player = {
    playerName: "Myles",
    playerCash: 500,
}

function startGame(){
    player.isAlive = true;
    player.hasBlackJack = false;
    if ((player.playerCash > 50) && (gameInSession === false)){
    gameInSession = true;
    let alertEl = document.getElementById("alert");
    alertEl.textContent = ""
    cards = [];
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    player.playerCash -= 50;
    renderGame();
    }else{
    let alertEl = document.getElementById("alert");
    alertEl.textContent = "Cannot start game, either one is in session or you have no funds available";
    }
}

function getRandomCard(){
    randomCard = Math.floor(Math.random() * 11) + 1;
    cards.push(randomCard);
    return randomCard;
}


function renderGame(){
    let cardsEl = document.getElementById("cards");
    cardsEl.textContent = "Cards: "
    let prizeEl = document.getElementById("prizePot");
    prizeEl.textContent = "£" + player.playerCash;

    for (let i = 0; i < cards.length; i += 1){
        cardsEl.textContent += cards[i] + " ";
    }
    let sumMsg = "Your card total is" + " " + sum;
    document.getElementById("total").textContent = sumMsg;

    if (sum <= 20){
       message = "Would you like another card?"
         }else if (sum === 21){
          let prize = Math.floor(Math.random() * 1000) + 100;
          message = "You got black jack!" + " " + "Your prize is" + " " + "£" + prize;
          player.hasBlackJack = true;
          player.playerCash += prize;
          prizeEl.textContent = "£" + player.playerCash;
         }
         else{
          message = "You Lost!"
          player.isAlive = false;
          gameInSession = false;
         }
         console.log(message);
         let messageEl = document.getElementById("message-el");
         messageEl.textContent = message;
}

function draw(){
    if((player.isAlive === true) && (player.hasBlackJack === false)){
    extraCard = getRandomCard();
    sum += extraCard;
    renderGame();
    return sum;
    }else{
        let alertEl = document.getElementById("alert");
        alertEl.textContent = "You must start a game to draw a card."
    }
}


//QUERY SELECTOR DOES THE SAME AS SELECT EL BY ID
//let testEl = document.querySelector("#test-el");
//IF SELECTING A CLASS USE . INSTEAD OF #

// //ARRAY PRACTICE
// let featuredPosts = ["Check out my post", "Here is my code", "My portfolio"];
// console.log(featuredPosts);
// console.log(featuredPosts[2]);

// let practiceArray = ["This", "is", "just", "my", "array"];
// console.log(practiceArray.length);

// let numbers = [1, 2 , 3];
// numbers.push(4);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// //END

//FOR EACH PRACTICE
// for (let count = 1; count < 11; count += 1){
//     console.log(count);
// }

// for (let count = 10; count < 101; count += 10){
//     console.log(count);
// }

// //USING RETURNS PRACTICE
// let player1Time = 120;
// let player2Time = 102;

// function fastestPlayer(){
//     if (player1Time > player2Time){
//         return player1Time;
//     }else if (player2Time > player1Time){
//         return player2Time;
//     }else{
//         console.log("You achieved the same time")
//     }
// }
// let fastest = fastestPlayer();

// console.log(fastest);

// function totalTime(){
//     let total = player1Time + player2Time;
//     return total;
// }
// let totalLapTime = totalTime();
// console.log(totalLapTime);
// //END

// // OR PRACTICE
// function reccommendMovie(){
//     console.log("Hey check out this movie!");
// }
// let likesDocumentaries = true;
// let likesStartups = false;

// if ((likesDocumentaries === true) || (likesStartups === true)){
//     reccommendMovie();
// }else{
//     console.log("I don't recommend this movie for you.")
// }
// //END

// //OBJECT PRACTICE
// let castle = {
//     title: "live like a king",
//     price: 200,
//     isSuperHost: true,
//     review: ["Username", "Rating", "message"]
// }
// console.log(castle.price);
// console.log(castle.review[0]);
// //END