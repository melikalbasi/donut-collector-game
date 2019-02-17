$(document).ready(function() { 

    // declare global variables
    var donutOne = 0;
    var donutTwo = 0;
    var donutThree = 0;
    var donutFour = 0;
    var wins = 0;
    var losses = 0;
    var randomNumber = "";
    var scoreResult = 0;
    var winOrLose = "";

    // use a function to initialize game, and have it ready for reset
    function initializeGame() {
        donutOne = Math.floor(Math.random() * 11) + 1;
        donutTwo = Math.floor(Math.random() * 11) + 1;
        donutThree = Math.floor(Math.random() * 11) + 1;
        donutFour = Math.floor(Math.random() * 11) + 1;
        $("#donut-one").attr("data-value", donutOne);
        $("#donut-two").attr("data-value", donutTwo);
        $("#donut-three").attr("data-value", donutThree);
        $("#donut-four").attr("data-value", donutFour);
        randomNumber = Math.floor(Math.random() * 120) + 1;
        $("#random-number").text(randomNumber);
        $("#score").text(scoreResult);
        $(".winOrLose").attr("data-value", winOrLose);
    }

    

    // randomly generate number displayed at start of game
    var randomNumber = Math.floor(Math.random() * 120) + 1;

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#random-number").text(randomNumber);


    // randomly generate number for each donut (hidden)
    var donutOne = Math.floor(Math.random() * 11) + 1;
    var donutTwo = Math.floor(Math.random() * 11) + 1;
    var donutThree = Math.floor(Math.random() * 11) + 1;
    var donutFour = Math.floor(Math.random() * 11) + 1;

    $("#donut-one").attr("data-value", donutOne);
    $("#donut-two").attr("data-value", donutTwo);
    $("#donut-three").attr("data-value", donutThree);
    $("#donut-four").attr("data-value", donutFour);



    $(document).on("click", ".donut", function() {
          var currentClick = $(this).attr("data-value");
          scoreResult += parseInt(currentClick);
        $("#score").text(scoreResult);


        // else when number matches, results in 1 win
        if (scoreResult === randomNumber) {
            wins++; 
            $(".winOrLose").text("You win!! Let's play again.")
            initializeGame();

        }

         // if user goes over randomNumber, losses increase by 1

         if (scoreResult > randomNumber) {
             losses++;
             $(".winOrLose").text("You lost! Try again.")
             initializeGame();
         }

          // display wins and losses
        $("#wins").text(wins);
        $("#losses").text(losses);
        
    })


});