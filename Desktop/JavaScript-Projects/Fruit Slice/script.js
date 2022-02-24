var playing = false;
var score;
var trialsLeft;
var action;
var step;

var fruits = ['apple','banana','pineapple','cherries'];


$(function(){
    $("#reset").click(function(){
        if(playing){
            location.reload();
        } else{
            $("#game-over").hide();
            playing=true;

            score = 0;
            $("#score-value").html(score);

            $("#trials-left").show();
            trialsLeft=3;
            addHearts();

            //Change button text
            $("#reset").html("Reset Game");

            startAction();
        }
    })


    //Slice Fruit
    $("#fruit1").mouseover(function(){
        
        score++;
        $('#score-value').html(score);
        
        $('#slice')[0].play();
        clearInterval(action);

        $("#fruit1").hide("explode",500);
        setTimeout(startAction,600);


    });


function addHearts(){
    $("#trials-left").empty();
    for(var i=0;i<trialsLeft;i++){
        $("#trials-left").append('<img src="images/heart.png" class="life">');
    }
}
function startAction(){
    
    chooseFruit();
    $("#fruit1").show();
    $("#fruit1").css({"left":Math.round(Math.random()*50)*11,"top":-50});

    //generate a random step
     step = Math.round(1+Math.random()*3);
    //Move fruit down every 10ms
    action = setInterval(function(){
        $("#fruit1").css("top",$("#fruit1").position().top + step);

        if($("#fruit1").position().top > $("#fruits-container").height()){
            if(trialsLeft>1){
                chooseFruit();
                $("#fruit1").show();
                $("#fruit1").css({"left":Math.round(Math.random()*50)*11,"top":-50});

                //generate a random step
                step = Math.round(1+Math.random()*3);

                trialsLeft--;
                addHearts();
            }
            else{
                playing=false;

                $("reset").html("Start Game");
                $("#game-over").show();
                $("#game-over").html('<p>Game Over</p><p>Your Score is '+score+'</p>');
                $("trials-left").hide();
                stopAction();
            }
        }
    },10);
}

function chooseFruit(){
    $("#fruit1").attr("src","images/"+"pineapple"+".png");
}

function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}


});