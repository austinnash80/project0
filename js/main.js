console.log("working?");


//odd and even turn numbers for x and o
// give X vlaue of 1, o vlaue of 2 - if line === 3 x winner, if equals 6



$(document).ready(function(){
  console.log("ready")



let clicks = 0;



let topL = $("#1").click(function() {
                  if (clicks === 0 ) {
                    $("#1text").text("X");
                    console.log("X");
                    clicks++
                    topL = 1
                    console.log(topL);
                    gameEnd();
                  }else {
                    $("#1text").text("O")
                    console.log("O");
                    clicks--
                    topL = 4
                    console.log(topL);
                    gameEnd();
                  }
                })


let topM = $("#2").click(function() {
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

let topR = $("#3").click(function() {
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

let midL = $("#4").click(function() {
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
let midM = $("#5").click(function() {
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
let midR = $("#6").click(function() {
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
let bottomL = $("#7").click(function() {
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
let bottomM = $("#8").click(function() {
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
let bottomR = $("#9").click(function() {
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
    if (+(topL) + +(topM) + +(topR) === 3) {
      console.log("Player X has won");
      // alert ("Player X has won")
      $(".winner").text("Player X has won, click reset to play again");
      $("body").addClass("gameWinner");

    }if (+(midL) + +(midM) + +(midR) === 3) {
      console.log("Player X has won");
      $(".winner").text("Player X has won, click reset to play again")

    }if (+(bottomL) + +(bottomM) + +(bottomR) === 3) {
      console.log("Player X has won");
      $(".winner").text("Player X has won, click reset to play again")

    }if (+(topL) + +(topM) + +(topR) === 12) {
      console.log("Player O has won");
      $(".winner").text("Player O has won, click reset to play again")

    }if (+(midL) + +(midM) + +(midR) === 12) {
      console.log("Player O has won");
      $(".winner").text("Player O has won, click reset to play again")

    }if (+(bottomL) + +(bottomM) + +(bottomR) === 12) {
      console.log("Player O has won");
      $(".winner").text("Player O has won, click reset to play again")

// Verticle Wins

    }if (+(topL) + +(midL) + +(bottomL) === 3) {
      console.log("Player X has won");
      $(".winner").text("Player X has won, click reset to play again")

    }if (+(topM) + +(midM) + +(bottomM) === 3) {
      console.log("Player X has won");
      $(".winner").text("Player X has won, click reset to play again")

    }if (+(topR) + +(midR) + +(bottomR) === 3) {
      console.log("Player X has won");
      $(".winner").text("Player X has won, click reset to play again")

    }if (+(topL) + +(midL) + +(bottomL) === 12) {
      console.log("Player O has won");
      $(".winner").text("Player O has won, click reset to play again")

    }if (+(topM) + +(midM) + +(bottomM) === 12) {
      console.log("Player O has won");
      $(".winner").text("Player O has won, click reset to play again")

    }if (+(topR) + +(midR) + +(bottomR) === 12) {
      console.log("Player O has won");
      $(".winner").text("Player O has won, click reset to play again")

  // Across Wins

        }if (+(topL) + +(midM) + +(bottomR) === 3) {
          console.log("Player X has won");
          $(".winner").text("Player X has won, click reset to play again")

        }if (+(topR) + +(midM) + +(bottomL) === 3) {
          console.log("Player X has won");
          $(".winner").text("Player X has won, click reset to play again")

        }if (+(topL) + +(midM) + +(bottomR) === 12) {
          console.log("Player O has won");
          $(".winner").text("Player O has won, click reset to play again")

        }if (+(topR) + +(midM) + +(bottomL) === 12) {
          console.log("Player O has won");
          $(".winner").text("Player O has won, click reset to play again")

// Tie Game

      } if (+(topL) + +(topM) + +(topR) +
        +(midL) + +(midM) + +(midR) +
        +(bottomL) + +(bottomM) + +(bottomR) === 21) {
        console.log("Tie, Play again");
        $(".winner").text("Tie, Play again")

        }else {
          console.log("keep Playing");
        }

      console.log("here", +(topR));
      console.log("hereL", +(topL));
      console.log("hereL", +(topL) + +(topR) + +(topM));
}



let clear = $("button").click(function () {
  $("#1text").text("");
  topL = 0
  $("#2text").text("");
  topM = 0
  $("#3text").text("");
  topR = 0

  $("#4text").text("");
  midL = 0
  $("#5text").text("");
  midM = 0
  $("#6text").text("");
  midR = 0

  $("#7text").text("");
  bottomL = 0
  $("#8text").text("");
  bottomM = 0
  $("#9text").text("");
  bottomR = 0

  clicks = 0

  $(".winner").text("");

})

}) // end of doc ready
