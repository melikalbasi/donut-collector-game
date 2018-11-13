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
        crystalOne = Math.floor(Math.random() * 11) + 1;
        crystalTwo = Math.floor(Math.random() * 11) + 1;
        crystalThree = Math.floor(Math.random() * 11) + 1;
        crystalFour = Math.floor(Math.random() * 11) + 1;
        $("#crystal-one").attr("data-value", crystalOne);
        $("#crystal-two").attr("data-value", crystalTwo);
        $("#crystal-three").attr("data-value", crystalThree);
        $("#crystal-four").attr("data-value", crystalFour);
        randomNumber = Math.floor(Math.random() * 120) + 1;
        $("#random-number").text(randomNumber);
        scoreResult= 0;
        $("score").text(scoreResult);

    }

    

    // randomly generate number displayed at start of game
    var randomNumber = Math.floor(Math.random() * 120) + 1;

    $("random-number").append(randomNumber);

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#random-number").text(randomNumber);

    // var startDisplay = function() {}
    function startDisplay() {
        document.querySelector("random-number").textContent = randomNumber
    }


    // randomly generate number for each crystal (hidden)
    var crystalOne = Math.floor(Math.random() * 11) + 1;
    var crystalTwo = Math.floor(Math.random() * 11) + 1;
    var crystalThree = Math.floor(Math.random() * 11) + 1;
    var crystalFour = Math.floor(Math.random() * 11) + 1;

    $("#crystal-one").attr("data-value", crystalOne);
    $("#crystal-two").attr("data-value", crystalTwo);
    $("#crystal-three").attr("data-value", crystalThree);
    $("#crystal-four").attr("data-value", crystalFour);

    // each click will add a number to result panel
    $(".crystal").on("click", function() {
       var currentClick = $(this).data("value");
       scoreResult = currentClick + scoreResult;
        $("#score").text(scoreResult);


        // else when number matches, results in 1 win
        if (scoreResult === randomNumber) {
            wins++; 
            alert("You win!");
            initializeGame();

        }

         // if user goes over randomNumber, losses increase by 1

         if (scoreResult > randomNumber) {
             losses++;
             alert("You lost!");
             initializeGame();
         }

          // display wins and losses
        $("#wins").text(wins);
        $("#losses").text(losses);
        
    })


});