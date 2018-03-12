console.log("working?");


//odd and even turn numbers for x and o
// give X vlaue of 1, o vlaue of 2 - if line === 3 x winner, if equals 6



$(document).ready(function(){
  console.log("ready")



let clicks = 0;

// let clicksHover = 0
// $(".box").addClass("x");
//
// let hover = $(".box").click(function () {
//     if (clicksHover === 0 || clicksHover === 2) {
//     $(".box").addClass("x");
//     clicksHover++
//   } if (clicksHover === 1 || clicksHover === 3) {
//     $(".box").removeClass("x")
//     $(".box").addClass("o");
//     clicksHover++
//   }
// })


let topL = $("#1text").click(function() {
  $("#1text").addClass("animate bounceIn");

                  if (clicks === 0 ) {
                    $("#1text").text("X");
                    console.log("X");
                    clicks++
                    topL = 1
                    console.log(topL);
                    gameEnd();
                    // $("#1text").addClass("animate bounceIn");
                  }else {
                    $("#1text").text("O")
                    console.log("O");
                    clicks--
                    topL = 4
                    console.log(topL);
                    gameEnd();
                  }

                })


let topM = $("#2text").click(function() {
  $("#2text").addClass("animate bounceIn");

                  if (clicks === 0 ) {
                    $("#2text").text("X");
                    console.log("x");
                    clicks++
                    topM = 1
                    console.log(topM);
                    gameEnd();
                  }else {
                    $("#2text").text("O")
                    console.log("O");
                    clicks--
                    topM = 4
                    console.log(topM);
                    gameEnd();
                  }
                })

let topR = $("#3text").click(function() {
  $("#3text").addClass("animate bounceIn");

                  if (clicks === 0 ) {
                    $("#3text").text("X");
                    console.log("x");
                    clicks++
                    topR = 1
                    console.log(topR);
                    gameEnd();
                  }else {
                    $("#3text").text("O")
                    console.log("O");
                    clicks--
                    topR = 4
                    console.log(topR);
                    gameEnd();
                  }
                })

let midL = $("#4text").click(function() {
  $("#4text").addClass("animate bounceIn");

                  if (clicks === 0 ) {
                    $("#4text").text("X");
                    console.log("x");
                    clicks++
                    midL = 1
                    console.log(midL);
                    gameEnd();
                  }else {
                    $("#4text").text("O")
                    console.log("O");
                    clicks--
                    midL = 4
                    console.log(midL);
                    gameEnd();
                  }
                })
let midM = $("#5text").click(function() {
  $("#5text").addClass("animate bounceIn");

                  if (clicks === 0 ) {
                    $("#5text").text("X");
                    console.log("x");
                    clicks++
                    midM = 1
                    console.log(midM);
                    gameEnd();
                  }else {
                    $("#5text").text("O")
                    console.log("O");
                    clicks--
                    midM = 4
                    console.log(midM);
                    gameEnd();
                  }
                })
let midR = $("#6text").click(function() {
  $("#6text").addClass("animate bounceIn");

                  if (clicks === 0 ) {
                    $("#6text").text("X");
                    console.log("x");
                    clicks++
                    midR = 1
                    console.log(midR);
                    gameEnd();
                  }else {
                    $("#6text").text("O")
                    console.log("O");
                    clicks--
                    midR = 4
                    console.log(midR);
                    gameEnd();
                  }
                })
let bottomL = $("#7text").click(function() {
  $("#7text").addClass("animate bounceIn");

                  if (clicks === 0 ) {
                    $("#7text").text("X");
                    console.log("x");
                    clicks++
                    bottomL = 1
                    console.log(bottomL);
                    gameEnd();
                  }else {
                    $("#7text").text("O")
                    console.log("O");
                    clicks--
                    bottomL = 4
                    console.log(bottomL);
                    gameEnd();
                  }
                })
let bottomM = $("#8text").click(function() {
  $("#8text").addClass("animate bounceIn");

                  if (clicks === 0 ) {
                    $("#8text").text("X");
                    console.log("x");
                    clicks++
                    bottomM = 1
                    console.log(bottomM);
                    gameEnd();
                  }else {
                    $("#8text").text("O")
                    console.log("O");
                    clicks--
                    bottomM = 4
                    console.log(bottomM);
                    gameEnd();
                  }
                })
let bottomR = $("#9text").click(function() {
  $("#9text").addClass("animate bounceIn");

                  if (clicks === 0 ) {
                    $("#9text").text("X");
                    console.log("x");
                    clicks++
                    bottomR = 1
                    console.log(bottomR);
                    gameEnd();
                  }else {
                    $("#9text").text("O")
                    console.log("O");
                    clicks--
                    bottomR = 4
                    console.log(bottomR);
                    gameEnd();
                  }
                })

let gameEnd = function () {
  // Horizonal Wins
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

// Verticle Wins

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

  // Across Wins

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

  let endMessage = function () {
        if (winner === "X") {
          $(".winner").text(`Player X has won, click reset to play again`);
          $(".box").removeClass("animated shake")
      } else if (winner === "O") {
          $(".winner").text(`Player O has won, click reset to play again`);
          $(".box").removeClass("animated shake")
      } else if (winner === "T") {
          $(".winner").text(`Tie Game, Play again`);
          $(".box").removeClass("animated shake")
      }

  };

// reset button

  let clear = $("button").click(function () {
    // Clear the X's and O's text
    $("#1text").removeClass("animate bounceIn fa fa-check-circle");
    $("#2text").removeClass("animate bounceIn fa fa-check-circle");
    $("#3text").removeClass("animate bounceIn fa fa-check-circle");
    $("#4text").removeClass("animate bounceIn fa fa-check-circle");
    $("#5text").removeClass("animate bounceIn fa fa-check-circle");
    $("#6text").removeClass("animate bounceIn fa fa-check-circle");
    $("#7text").removeClass("animate bounceIn fa fa-check-circle");
    $("#8text").removeClass("animate bounceIn fa fa-check-circle");
    $("#9text").removeClass("animate bounceIn fa fa-check-circle");
    $(".box").text(""); //fade this out
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

// if x turn hover red if O turn hover green

// let hover = function () {
//   if (clicks === 0) {
//     $(".box").addClass("x");
//   } if (clicks === 1) {
//     $(".box").removeClass("x")
//     $(".box").addClass("o");
//   }
// }
//
// hover();


}) // end of doc ready
