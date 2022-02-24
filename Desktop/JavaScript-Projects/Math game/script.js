var playing =false;
var score;
var action;
var timeRemaining;
var correctAnswer;
var operations = ['+','/','x','-'];


document.getElementById("reset").onclick = 
function(){
    if(playing == true){
        location.reload();
        
    }else{
        
        playing = true;
        score=0;
        document.getElementById("score-value").innerHTML = score;
        show("time-remaining");
        timeRemaining=20;
        document.getElementById("timer").innerHTML=timeRemaining;

        hide("game-over");
        document.getElementById("reset").innerHTML = "Reset Game";


        //Start Countdown

        startCountdown();

        generateQA();

    }
}


function startCountdown(){
    action = setInterval(function(){
        timeRemaining-=1;
        document.getElementById("timer").innerHTML=timeRemaining;
        if(timeRemaining == 0){
            stopCountdown();
            show("game-over");
            document.getElementById("game-over").innerHTML = 
            "<p>Game Over!</p><p>Your Score is "+ score+".</p> ";
            hide("time-remaining");
            hide('correct');
            hide('wrong');
            document.getElementById("reset").innerHTML = "Start Game";
            playing=false;
        }
    },1000);
}

function stopCountdown(){
    clearInterval(action);
}

function hide(Id){
    document.getElementById(Id).style.display="none";
}

function show(Id){
    document.getElementById(Id).style.display="block";
}


function generateQA(){
    var x = 1+Math.round(Math.random()*9);
    var y = 1+Math.round(Math.random()*9);
    var operator = operations[Math.round(Math.random()*3)];
    console.log(operator);
    if(operator=='/'){
        correctAnswer = (x/y).toFixed(2);
    }
    if(operator=='x'){
        correctAnswer = x*y;
    }
    if(operator=='+'){
        correctAnswer = x+y;
    }
    if(operator=='-'){
        correctAnswer = x-y;
    }
    document.getElementById('question').innerHTML = x + operator +y;
    var correctPosition = 1 + Math.round(Math.random()*3);
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
    for(var i = 1;i<=4;i++){
        if(i!=correctPosition){
            var num=1+Math.round(Math.random()*99);
            while(num==correctAnswer){
                num=1+Math.round(Math.random()*99);
            }
            document.getElementById("box"+i).innerHTML = num;
        }
    }


}

for(i=1;i<5;i++){
    document.getElementById('box'+i).onclick = 
function(){
    if(playing){
        if(this.innerHTML == correctAnswer){
            score++;
            document.getElementById('score-value').innerHTML = score;
            hide('wrong');
            show('correct');
            setTimeout(function(){hide('correct')},1000);

            generateQA();
        }
        else{
            hide('correct');
            show('wrong');
            setTimeout(function(){hide('wrong')},1000);
        }
    }
}
}


