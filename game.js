var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;
var started = false;

// Function to start the game
function startGame() {
  $("#start-message").fadeOut(); // Hide the start message
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  started = true;
  nextSequence();
}

// Event listener for tap anywhere to start
$(document).on("click touchstart", function() {
  if (!started) {
    startGame();
  }
});

// Rest of your game logic goes here...


 $(".btn").click(function() {

  
  var userChosenColour = $(this).attr("id");

 
  userClickedPattern.push(userChosenColour);
 
  animatePress(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
 
 });

 function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } 
  else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    reStart();
  }
}
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
$(document).on("keydown",function(event){
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
})


function nextSequence(){
  userClickedPattern=[];
  level++;
  $("#level-title").text("Level " + level);
    randomNumber= Math.floor(Math.random()*4);
   console.log(randomChosenColour=buttonColours[randomNumber]);
   gamePattern.push(randomChosenColour);
   
   $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   
    playSound(randomChosenColour);
}
function animatePress(currentColor){

  $("#"+currentColor).addClass("pressed");
  setTimeout( function(){
    $("#"+currentColor).removeClass("pressed");
 },100);

}
function reStart(){
 level=0;
 gamePattern=[];
 started=false;
}
