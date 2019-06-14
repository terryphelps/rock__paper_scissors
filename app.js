let player1 = ""
let player2 = ""
let rock = "rock"
let paper = "paper"
let scissors = "scissors"

let playerOneResult = document.querySelector("#player-1")
let playerTwoResult = document.querySelector("#player-2")


function playGame(player1) {
  if (player1 == "rock") {
    if (player2 == "rock") {
      tie()
    } else if (player2 == "paper") {
      lose()
    } else if (player2 == "scissors") {
      win()
    }
  }
  if (player1 == "paper") {
    if (player2 == "paper") {
      tie()
    } else if (player2 == "scissors") {
      lose()
    } else if (player2 == "rock") {
      win()
    }
  }
  if (player1 == "scissors") {
    if (player2 == "scissors") {
      tie()
    } else if (player2 == "rock") {
      lose()
    } else if (player2 == "paper") {
      win()
    }
  }
}

function tie() {
  playerOneResult.innerHTML = "TIE!!!"
  playerTwoResult.innerHTML = "TIE!!!"
}

function win() {
  playerOneResult.innerHTML = "WINNER!!!"
  playerTwoResult.innerHTML = ""
}

function lose() {
  playerOneResult.innerHTML = ""
  playerTwoResult.innerHTML = "WINNER!!!"
}

function computer() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0: {
      player2 = "rock"
      //      replay() //
      break;
    }
    case 1: {
      player2 = "paper"
      //      replay() //
      break;
    }
    case 2: {
      player2 = "scissors"
      //      replay() //
      break;
    }
  }
}
//function replay() { //
//  let rePlayYes = document.querySelector("#re-play-yes")//
//  let rePlayNo = document.querySelector("#re-play-no")//
//  let askText = document.querySelector("#ask")//
//  askText.innerHTML = "Replay Y/N"//
//  rePlayNo.innerHTML = "N"//
//  rePlayYes.innerHTML = "Y"//

//  p = "set text in replay h3, no button and yes button"//
//   if (rePlayYes.innerHTML == "Y" || rePlayYes.innerHTML == "y") {//

//  debugger//

//}//
//function playAgain() {//
//  computer() //
//}//
computer()
