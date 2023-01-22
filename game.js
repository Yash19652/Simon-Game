var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var start = false;
$(document).keydown(function() {
    if (!start) {
      $("#level-title").text("Level " + level);
      nextSequence();
      start = true;
    }
  });




function nextSequence() {
    userClickedPattern=[];
    level++;
    $("#level-title").text("LEVEL " + level);
    var randomNumber = Math.floor((Math.random()) * 4);
    var randomChoosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChoosenColor);
    playsound(randomChoosenColor);
    $("#" + randomChoosenColor).fadeOut(100).fadeIn(100)
}


$(".btn").click(function (event) {
    var userChoosenColor = event.target.id;
    userClickedPattern.push(userChoosenColor);
    animatePress(userChoosenColor);
    playsound(userChoosenColor);

    checkAnswer(userClickedPattern.length - 1);
})



function playsound(name) {
    audio = new Audio("sounds/" + name + ".mp3");
    audio.play()
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }
        , 100);

}


function checkAnswer(currentLevel)
{
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
    {
        if(userClickedPattern.length===gamePattern.length)
        {
            setTimeout(function()
            {
                nextSequence();
            },1000)
        }
    }
    else
    {
        $("body").addClass("game-over");
        setTimeout(function()
        {
            $("body").removeClass("game-over");
        },100);
        level=0;
        $("#level-title").text("GAME OVER ! PRESS ANY KEY TO START");
        start=false;
        gamePattern=[];
    }
}






