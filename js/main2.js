console.log("working?");

$(document).ready(function() {
    console.log("ready")

    let clicks = 0; //start click counter at 0 - palyer one will start

    let objectP1 = ""; // Empty global variable to be filled for user input of playing mark (X) - player1

    let objectP2 = ""; // Empty global variable to be filled for user input of playing mark (X) - player2

    let name1 = ""; // Empty global variable - user inoput for player name 1 - use this variable later

    let name2 = ""; // Empty global variable - user inoput for player name 1 - use this variable later

    let turn = function () {
      if (clicks === 0) {
        $("#player1Name").addClass("playerTurn")
      }if (clicks != 0) {
        $("#player2Name").addClass("playerTurn")
      }
    }

    let RemoveTurn = function () {
      if (clicks != 0) {
        $("#player1Name").removeClass("playerTurn")
      }if (clicks === 0) {
        $("#player2Name").removeClass("playerTurn")
      }
    }

    custom = function() { //run fuction when 'custom play' button is clicked
        name1 = $("#numb1").val() //take the user value typed into the first name box - assign it to name1 variable
        $("#player1Name").text(`${name1} Score: `) //add user input for player1 + Score: for the scoreboard text (h3)
        name2 = $("#numb3").val() //take the user value typed into the second name box - assign it to name2 variable
        $("#player2Name").text(`${name2} Score: `) //player 2 for scoreboard
        objectP1 = $("#numb2").val() //select user input for their choosen mark - player1 - store value for later use
        objectP2 = $("#numb4").val() //select user input for their choosen mark - player2 - store value for later use
    };

    quick = function() { //if 'quick game' button is clicked
        $("#player1Name").text(`Player 1 Score: `) //display text for scoreboard - with no user input
        $("#player2Name").text(`Player 2 Score: `) //display text for scoreboard - with no user input
        objectP1 = "X" //default mark value - store for later use on board
        objectP2 = "O" // ``
    };

    resetPlayers = function() { //reset the game board and the score - (reset players button)
        location.reload(); //just reloads the page - clears all dom
    }

    let topL = $("#1text").click(function() { // if the Top Left Square is Clicked
        $("#1text").addClass("animate bounceIn"); // click effect
        if (clicks === 0) { // 0 = player one turn
            $("#1text").text(objectP1); // fill square will player1 marker
            clicks++ // add 1 to click counter after placeing the player 1 marker - means next turn will be player 2
            topL = 1 // assign numvber value to square top left  - used for checking winner
            gameEnd(); // run the end game function - check for winner after placig each mark
            RemoveTurn();
            turn ();
        } else { //if click counter is not 0 then it is player2 turn
            $("#1text").text(objectP2); // place the player 2 mark in top Left square
            clicks-- // subtract 1 after placing player2 mark - make next turn player 1
            topL = 4 // assign value of 4 for a player 2 mark in top left
            gameEnd(); // check for winner after placing player 2 mark
            RemoveTurn();
            turn ();
        }
    })

    let topM = $("#2text").click(function() { // The top middle square of game board
        $("#2text").addClass("animate bounceIn");
        if (clicks === 0) {
            $("#2text").text(objectP1);
            clicks++
            topM = 1
            gameEnd();
            RemoveTurn();
            turn ();
        } else {
            $("#2text").text(objectP2)
            clicks--
            topM = 4
            gameEnd();
            RemoveTurn();
            turn ();
        }
    })

    let topR = $("#3text").click(function() { // The top right square of game board
        $("#3text").addClass("animate bounceIn");
        if (clicks === 0) {
            $("#3text").text(objectP1);
            clicks++
            topR = 1
            gameEnd();
            RemoveTurn();
            turn ();
        } else {
            $("#3text").text(objectP2)
            clicks--
            topR = 4
            gameEnd();
            RemoveTurn();
            turn ();
        }
    })

    let midL = $("#4text").click(function() { // The middle left square of game board
        $("#4text").addClass("animate bounceIn");
        if (clicks === 0) {
            $("#4text").text(objectP1);
            clicks++
            midL = 1
            gameEnd();
            RemoveTurn();
            turn ();
        } else {
            $("#4text").text(objectP2)
            clicks--
            midL = 4
            gameEnd();
            RemoveTurn();
            turn ();
        }
    })

    let midM = $("#5text").click(function() { // The middle middle square of game board
        $("#5text").addClass("animate bounceIn");
        if (clicks === 0) {
            $("#5text").text(objectP1);
            clicks++
            midM = 1
            gameEnd();
            RemoveTurn();
            turn ();
        } else {
            $("#5text").text(objectP2)
            clicks--
            midM = 4
            gameEnd();
            RemoveTurn();
            turn ();
        }
    })

    let midR = $("#6text").click(function() { // The middle Right square of game board
        $("#6text").addClass("animate bounceIn");
        if (clicks === 0) {
            $("#6text").text(objectP1);
            clicks++
            midR = 1
            gameEnd();
            RemoveTurn();
            turn ();
        } else {
            $("#6text").text(objectP2)
            clicks--
            midR = 4
            gameEnd();
            RemoveTurn();
            turn ();
        }
    })

    let bottomL = $("#7text").click(function() { // The bottom left square of game board
        $("#7text").addClass("animate bounceIn");
        if (clicks === 0) {
            $("#7text").text(objectP1);
            clicks++
            bottomL = 1
            gameEnd();
            RemoveTurn();
            turn ();
        } else {
            $("#7text").text(objectP2)
            clicks--
            bottomL = 4
            gameEnd();
            RemoveTurn();
            turn ();
        }
    })

    let bottomM = $("#8text").click(function() { // The bottom middle square of game board
        $("#8text").addClass("animate bounceIn");
        if (clicks === 0) {
            $("#8text").text(objectP1);
            clicks++
            bottomM = 1
            gameEnd();
            RemoveTurn();
            turn ();
        } else {
            $("#8text").text(objectP2)
            clicks--
            bottomM = 4
            gameEnd();
            RemoveTurn();
            turn ();
        }
    })

    let bottomR = $("#9text").click(function() { // The bottom right square of game board
        $("#9text").addClass("animate bounceIn");
        if (clicks === 0) {
            $("#9text").text(objectP1);
            clicks++
            bottomR = 1
            gameEnd();
            RemoveTurn();
            turn ();
        } else {
            $("#9text").text(objectP2)
            clicks--
            bottomR = 4
            gameEnd();
            RemoveTurn();
            turn ();
        }
    })

    let gameEnd = function() { // find if their is a winner after each mark is place - run this function after each click

        // Horizonal Wins options for player1 (X) - asigned values add to three
        if (+(topL) + +(topM) + +(topR) === 3 || +(midL) + +(midM) + +(midR) === 3 || +(bottomL) + +(bottomM) + +(bottomR) === 3) {
            console.log("Player X has won"); //check for a sum of 3 in each of the three horizontal line - only checks for player 1 victory
            winner = "X"; //assin the winner to be X - store for later use
            endMessage(); // calling the function to display the winner message
            $("body").addClass("gameWinner"); // change the background color after a win
            $(".box *").attr('disabled', true); // Not working - stop addtional clicks after a win
            if (+(topL) + +(topM) + +(topR) === 3) { // if the win invloved these 3 spaces - change to new font - only these squares
                $("#1text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                }) //font awesome check mark for square topL (id class of #1text)
                $("#2text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#3text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })

            }
            if (+(midL) + +(midM) + +(midR) === 3) {
                $("#4text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#5text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#6text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })

            }
            if (+(bottomL) + +(bottomM) + +(bottomR) === 3) {
                $("#7text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#8text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#9text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })

            } else {}

            // Horizonal Wins options for player2 (O) - asigned values add to 12 (each assinged a 4 after player2 click)
        } else if (+(topL) + +(topM) + +(topR) === 12 || +(midL) + +(midM) + +(midR) === 12 || +(bottomL) + +(bottomM) + +(bottomR) === 12) {
            console.log("Player O has won");
            winner = "O";
            endMessage();
            $("body").addClass("gameWinner");
            $(".box *").attr('disabled', true);
            if (+(topL) + +(topM) + +(topR) === 12) {
                $("#1text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#2text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#3text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })

            }
            if (+(midL) + +(midM) + +(midR) === 12) {
                $("#4text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#5text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#6text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })

            }
            if (+(bottomL) + +(bottomM) + +(bottomR) === 12) {
                $("#7text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#8text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#9text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })

            } else {}

            // Verticle Win options for player1 (X)
        } else if (+(topL) + +(midL) + +(bottomL) === 3 || +(topM) + +(midM) + +(bottomM) === 3 || +(topR) + +(midR) + +(bottomR) === 3) {
            console.log("Player X has won");
            winner = "X";
            endMessage();
            $("body").addClass("gameWinner");
            $(".box *").attr('disabled', true);
            if (+(topL) + +(midL) + +(bottomL) === 3) { // Change the X,O to Checks after they win
                $("#1text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#4text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#7text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })

            }
            if (+(topM) + +(midM) + +(bottomM) === 3) {
                $("#2text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#5text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#8text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })

            }
            if (+(topR) + +(midR) + +(bottomR) === 3) {
                $("#3text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#6text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#9text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })

            } else {}

            // Verticle Win options for player 2 (O)
        } else if (+(topL) + +(midL) + +(bottomL) === 12 || +(topM) + +(midM) + +(bottomM) === 12 || +(topR) + +(midR) + +(bottomR) === 12) {
            console.log("Player O has won");
            winner = "O";
            endMessage();
            $("body").addClass("gameWinner");
            $(".box *").attr('disabled', true);
            if (+(topL) + +(midL) + +(bottomL) === 12) { // Change the X,O to Checks after they win
                $("#1text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#4text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#7text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })

            }
            if (+(topM) + +(midM) + +(bottomM) === 12) {
                $("#2text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#5text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#8text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })

            }
            if (+(topR) + +(midR) + +(bottomR) === 12) {
                $("#3text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#6text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#9text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })

            } else {}

            // Across Wins - X
        } else if (+(topL) + +(midM) + +(bottomR) === 3 || +(topR) + +(midM) + +(bottomL) === 3) {
            console.log("Player X has won");
            winner = "X";
            endMessage();
            $("body").addClass("gameWinner");
            $(".box *").attr('disabled', true);
            if (+(topL) + +(midM) + +(bottomR) === 3) { // Change the X,O to Checks after they win
                $("#1text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#5text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#9text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })

            }
            if (+(topR) + +(midM) + +(bottomL) === 3) {
                $("#3text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#5text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#7text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })

            } else {}
            // Across Wins - O
        } else if (+(topL) + +(midM) + +(bottomR) === 12 || +(topR) + +(midM) + +(bottomL) === 12) {
            console.log("Player O has won");
            winner = "O";
            endMessage(); // Top Statement of the winner
            $("body").addClass("gameWinner");
            $(".box *").attr('disabled', true);
            if (+(topL) + +(midM) + +(bottomR) === 12) { // Change the X,O to Checks after they win
                $("#1text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#5text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#9text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })

            }
            if (+(topR) + +(midM) + +(bottomL) === 12) {
                $("#3text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#5text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })
                $("#7text").text("").addClass("fa fa-check-circle").css({
                    "font-size": "75px"
                })

            } else {};

            // Tie Game

        } else if (+(topL) + +(topM) + +(topR) + +(midL) + +(midM) + +(midR) + +(bottomL) + +(bottomM) + +(bottomR) === 21) {
            console.log("Tie, Play again");
            winner = "T"
            $("body").addClass("gameTie");
            endMessage()
            console.log(winner);
        } else {
            console.log("keep Playing");
        };
    };

    let xWin = 0 //Starting values for the score board
    let oWin = 0

    let endMessage = function() { //function for when a win has been found
        if (winner === "X") {
            xWin++ //Add 1 to the scoreboard for player1 (X)
            $(".winner").text(`${name1} has won, click reset to play again`); //The message to be displayed on the bottom after a player1 win
            $(".box").removeClass("animated shake") // remove the shake animation so that i can be readded when the clear button is pushed - Does it need to be here?
            $("#scorePlayer1").text(xWin); // add the new score text for scoreboard
            $(".box *").attr('disabled', true);

        }
        if (winner === "O") { // same for a player2 win
            oWin++
            $(".winner").text(`${name2} has won, click reset to play again`);
            $(".box").removeClass("animated shake")
            $("#scorePlayer2").text(oWin);
        }
        if (winner === "T") {
            $(".winner").text(`Tie Game, Play again`);
            $(".box").removeClass("animated shake")
        } else {}
    };

    let clear = $(".reset").click(function() { // reset the game board - not the players - keep the score
        $("#1text").removeClass("animate bounceIn fa fa-check-circle"); //Removes the animation and font class on thje clear
        $("#2text").removeClass("animate bounceIn fa fa-check-circle"); //Done for each square individually - better Way?
        $("#3text").removeClass("animate bounceIn fa fa-check-circle");
        $("#4text").removeClass("animate bounceIn fa fa-check-circle");
        $("#5text").removeClass("animate bounceIn fa fa-check-circle");
        $("#6text").removeClass("animate bounceIn fa fa-check-circle");
        $("#7text").removeClass("animate bounceIn fa fa-check-circle");
        $("#8text").removeClass("animate bounceIn fa fa-check-circle");
        $("#9text").removeClass("animate bounceIn fa fa-check-circle");
        $(".box").text("");
        topL = 0 // reset the value in each square - so new round winner can be found
        topM = 0
        topR = 0
        midL = 0
        midM = 0
        midR = 0
        bottomL = 0
        bottomM = 0
        bottomR = 0
        clicks = 0 //reset the clicks so that player 1 starts first again - could leave and have players rotate lead? or winner goes first?
        $(".winner").text(""); //reset the winner text box to blank
        $("body").removeClass("gameWinner"); // rest background winning color
        $("body").removeClass("gameTie"); // rest background tie color
        $(".box").addClass("animated shake") // only works the first time - need to remove the class and re-add nd have animiate for next round
        $("#player1Name").addClass("playerTurn")
        $("#player2Name").removeClass("playerTurn")
    })

}) // end of doc ready
