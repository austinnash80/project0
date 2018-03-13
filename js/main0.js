console.log("working?");

$(document).ready(function(){
  console.log("ready")


let clicks = 0;


changePlayerX = function (){
  let player = "X"
  let playerX = prompt ("Player 1: Select the first letter of your name", "Enter One Letter Only")
      if (playerX.length === 1) {
        console.log(playerX);
        changePlayerX = playerX
        console.log(changePlayerX);
        console.log(playerX.length);
      }else {
        changePlayerX = "X"
      }
};

// changePlayerO = function () {
//   let player = "O";
//   let playerO = prompt ("Player 2: Select the first letter of your name", "Enter One Letter Only")
//       if (playerO.length === 1) {
//         changePlayerO = playerO
//       }else {
//         changePlayerO = "O"
//       }
// };

//reset the game board and the score - (reset players button)
resetPlayers = function (){
  location.reload();
}

let topL = $("#1text").click(function() {
  $("#1text").addClass("animate bounceIn");

                  if (clicks === 0 ) {
                    $("#1text").text(changePlayerX);
                    // clicks++
                    topL = 1
                    console.log(topL)
                    $("#5text").text("O")
                    midM = 4
                    console.log(midM);
                    gameEnd();

                  }else {
                  //   $("#1text").text(changePlayerO);
                  //   clicks--
                  //   topL = 4
                  //   gameEnd();
                  }
                })

let topM = $("#2text").click(function() {
  $("#2text").addClass("animate bounceIn");

                  if (clicks === 0 ) {
                    $("#2text").text(changePlayerX);
                    // clicks++
                    topM = 1
                    console.log(topM);
                    $("#3text").text("O")
                    topR = 4
                    console.log(topR);
                    gameEnd();
                  }else {
                  //   $("#2text").text(changePlayerO)
                  //   clicks--
                  //   topM = 4
                  //   gameEnd();
                  }
                })

let topR = $("#3text").click(function() {
  $("#3text").addClass("animate bounceIn");

                  if (clicks === 0 ) {
                    $("#3text").text(changePlayerX);
                    clicks++
                    topR = 1
                    gameEnd();
                  }else {
                    $("#3text").text(changePlayerO)
                    clicks--
                    topR = 4
                    gameEnd();
                  }
                })

let midL = $("#4text").click(function() {
  $("#4text").addClass("animate bounceIn");

                  if (clicks === 0 ) {
                    $("#4text").text(changePlayerX);
                    // clicks++
                    midL = 1
                    // gameEnd();
                    $("#7text").text("O")
                    bottomL = 4
                    console.log(bottomL);
                    gameEnd();
                  }else {
                    // $("#4text").text(changePlayerO)
                    // clicks--
                    // midL = 4
                    // gameEnd();
                  }
                })

let midM = $("#5text").click(function() {
  $("#5text").addClass("animate bounceIn");

                  if (clicks === 0 ) {
                    $("#5text").text(changePlayerX);
                    clicks++
                    midM = 1
                    gameEnd();
                  }else {
                    $("#5text").text(changePlayerO)
                    clicks--
                    midM = 4
                    gameEnd();
                  }
                })

let midR = $("#6text").click(function() {
  $("#6text").addClass("animate bounceIn");

                  if (clicks === 0 ) {
                    $("#6text").text(changePlayerX);
                    clicks++
                    midR = 1
                    gameEnd();
                  }else {
                    $("#6text").text(changePlayerO)
                    clicks--
                    midR = 4
                    gameEnd();
                  }
                })

let bottomL = $("#7text").click(function() {
  $("#7text").addClass("animate bounceIn");

                  if (clicks === 0 ) {
                    $("#7text").text(changePlayerX);
                    clicks++
                    bottomL = 1
                    gameEnd();
                  }else {
                    $("#7text").text(changePlayerO)
                    clicks--
                    bottomL = 4
                    gameEnd();
                  }
                })

let bottomM = $("#8text").click(function() {
  $("#8text").addClass("animate bounceIn");

                  if (clicks === 0 ) {
                    $("#8text").text(changePlayerX);
                    clicks++
                    bottomM = 1
                    gameEnd();
                  }else {
                    $("#8text").text(changePlayerO)
                    clicks--
                    bottomM = 4
                    gameEnd();
                  }
                })

let bottomR = $("#9text").click(function() {
  $("#9text").addClass("animate bounceIn");

                  if (clicks === 0 ) {
                    $("#9text").text(changePlayerX);
                    clicks++
                    bottomR = 1
                    gameEnd();
                  }else {
                    $("#9text").text(changePlayerO)
                    clicks--
                    bottomR = 4
                    gameEnd();
                  }
                })

let gameEnd = function () {
  // Horizonal Wins - X
    if (+(topL) + +(topM) + +(topR) === 3 || +(midL) + +(midM) + +(midR) === 3 || +(bottomL) + +(bottomM) + +(bottomR) === 3) {
      console.log("Player X has won");
      winner = "X";
      endMessage();
      $("body").addClass("gameWinner");
        if (+(topL) + +(topM) + +(topR) === 3) { // Change the X,O to Checks after they win
          $("#1text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#2text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#3text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})

        }if (+(midL) + +(midM) + +(midR) === 3) {
          $("#4text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#5text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#6text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})

        } if (+(bottomL) + +(bottomM) + +(bottomR) === 3) {
          $("#7text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#8text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#9text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})

        }else {

        }

  // Horizonal Wins - O
    }else if (+(topL) + +(topM) + +(topR) === 12 || +(midL) + +(midM) + +(midR) === 12 || +(bottomL) + +(bottomM) + +(bottomR) === 12){
      console.log("Player O has won");
      winner = "O";
      endMessage();
      $("body").addClass("gameWinner");
        if (+(topL) + +(topM) + +(topR) === 12) { // Change the X,O to Checks after they win
          $("#1text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#2text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#3text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})

        }if (+(midL) + +(midM) + +(midR) === 12) {
          $("#4text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#5text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#6text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})

        } if (+(bottomL) + +(bottomM) + +(bottomR) === 12) {
          $("#7text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#8text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#9text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})

        }else {

        }

// Verticle Wins - X
    }else if (+(topL) + +(midL) + +(bottomL) === 3 || +(topM) + +(midM) + +(bottomM) === 3 || +(topR) + +(midR) + +(bottomR) === 3) {
      console.log("Player X has won");
      winner = "X";
      endMessage();
      $("body").addClass("gameWinner");
        if (+(topL) + +(midL) + +(bottomL) === 3) { // Change the X,O to Checks after they win
          $("#1text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#4text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#7text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})

        }if (+(topM) + +(midM) + +(bottomM) === 3) {
          $("#2text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#5text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#8text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})

        } if (+(topR) + +(midR) + +(bottomR) === 3) {
          $("#3text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#6text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#9text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})

        }else {

        }
// Verticle Wins - O
    }else if (+(topL) + +(midL) + +(bottomL) === 12 || +(topM) + +(midM) + +(bottomM) === 12 || +(topR) + +(midR) + +(bottomR) === 12) {
      console.log("Player O has won");
      winner = "O";
      endMessage();
      $("body").addClass("gameWinner");
        if (+(topL) + +(midL) + +(bottomL) === 12) { // Change the X,O to Checks after they win
          $("#1text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#4text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#7text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})

        }if (+(topM) + +(midM) + +(bottomM) === 12) {
          $("#2text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#5text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#8text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})

        } if (+(topR) + +(midR) + +(bottomR) === 12) {
          $("#3text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#6text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#9text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})

        }else {

        }

// Across Wins - X
    }else if (+(topL) + +(midM) + +(bottomR) === 3 || +(topR) + +(midM) + +(bottomL) === 3) {
      console.log("Player X has won");
      winner = "X";
      endMessage();
      $("body").addClass("gameWinner");
        if (+(topL) + +(midM) + +(bottomR) === 3) { // Change the X,O to Checks after they win
          $("#1text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#5text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#9text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})

        }if (+(topR) + +(midM) + +(bottomL) === 3) {
          $("#3text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#5text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#7text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})

        }else {

        }
// Across Wins - O
    } else if (+(topL) + +(midM) + +(bottomR) === 12 || +(topR) + +(midM) + +(bottomL) === 12) {
      console.log("Player O has won");
      winner = "O";
      endMessage(); // Top Statement of the winner
      $("body").addClass("gameWinner");
        if (+(topL) + +(midM) + +(bottomR) === 12) { // Change the X,O to Checks after they win
          $("#1text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#5text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#9text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})

        }if (+(topR) + +(midM) + +(bottomL) === 12) {
          $("#3text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#5text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})
          $("#7text").text("").addClass("fa fa-check-circle").css({"font-size": "75px"})

        }else {

        }

// Tie Game

      } else if (+(topL) + +(topM) + +(topR) + +(midL) + +(midM) + +(midR) + +(bottomL) + +(bottomM) + +(bottomR) === 21) {
        console.log("Tie, Play again");
        winner = "T"
        $("body").addClass("gameTie");
        console.log(winner);
        }else {
        console.log("keep Playing");
        }

}

// Display a message when the game is over
  let xWin = 0
  let oWin = 0

  let endMessage = function () {
        if (winner === "X") {
          xWin++
          $(".winner").text(`Player ${changePlayerX} has won, click reset to play again`);
          $(".box").removeClass("animated shake")
          $("#scorePlayer1").text(xWin);
      } if (winner === "O") {
          oWin++
          $(".winner").text(`The computer has won, click reset to play again`);
          $(".box").removeClass("animated shake")
          $("#scorePlayer2").text(oWin);
      } if (winner === "T") {
          $(".winner").text(`Tie Game, Play again`);
          $(".box").removeClass("animated shake")
      } else {

      }

  };

// reset the game board - not the players - keep the score
  let clear = $(".reset").click(function () {
    $("#1text").removeClass("animate bounceIn fa fa-check-circle");
    $("#2text").removeClass("animate bounceIn fa fa-check-circle");
    $("#3text").removeClass("animate bounceIn fa fa-check-circle");
    $("#4text").removeClass("animate bounceIn fa fa-check-circle");
    $("#5text").removeClass("animate bounceIn fa fa-check-circle");
    $("#6text").removeClass("animate bounceIn fa fa-check-circle");
    $("#7text").removeClass("animate bounceIn fa fa-check-circle");
    $("#8text").removeClass("animate bounceIn fa fa-check-circle");
    $("#9text").removeClass("animate bounceIn fa fa-check-circle");
    $(".box").text("");
    topL = 0
    topM = 0
    topR = 0
    midL = 0
    midM = 0
    midR = 0
    bottomL = 0
    bottomM = 0
    bottomR = 0

    clicks = 0
    $(".winner").text("");
    $("body").removeClass("gameWinner");
    $("body").removeClass("gameTie");
    $(".box").addClass("animated shake") // only works the first time - need to remove the class and re-add

  })


// start of AI

//if topL = "X" then comp play midM `0`

let ai = function () {
  if (topL = "X") {
    $("#5text").text("O")
    console.log(ai);
  }
}


}) // end of doc ready
