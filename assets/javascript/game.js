$(document).ready(function() { 

    // declare global variables
    var crystalOne = 0;
    var crystalTwo = 0;
    var crystalThree = 0;
    var crystalFour = 0;
    var wins = 0;
    var losses = 0;
    var randomNumber = "";
    var scoreResult = 0;

    // use a function to initialize game, and have it ready for reset
    function initializeGame() {
        crystalOne = "";
        crystalTwo = "";
        crystalThree = "";
        crystalFour = "";
        wins = 0;
        losses = 0;
        randomNumber = "";
        scoreResult= 0;

        $("#wins", "#losses", "#score").empty();

    }

    

    // randomly generate number displayed at start of game
    var randomNumber = Math.floor(Math.random() * 120) + 1;

    $("random-number").append(randomNumber);

    function startDisplay() {
        document.querySelector("random-number").textContent = randomNumber
    }


    // randomly generate number for each crystal (hidden)
    var crystalOne = Math.floor(Math.random() * 11) + 1;
    var crystalTwo = Math.floor(Math.random() * 11) + 1;
    var crystalThree = Math.floor(Math.random() * 11) + 1;
    var crystalFour = Math.floor(Math.random() * 11) + 1;

    // each click will add a number to result panel

        // if a crystal is clicked  
            // push value of crystal into score

            // if another crystal is clicked
                // push value of each crystal and add it to score


    // when number matches, results in 1 win

    // if loss, losses increase by 1

    // games resets, wins and losses are still tracked

   
    








});