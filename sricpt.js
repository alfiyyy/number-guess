let userScore = 0;
const text_p = document.getElementById("text");
const footer_p = document.getElementById("footer");
const num1_div = document.getElementById("1");
const num2_div = document.getElementById("2");
const num3_div = document.getElementById("3");
const num4_div = document.getElementById("4");
const num5_div = document.getElementById("5");
const num6_div = document.getElementById("6");
const num7_div = document.getElementById("7");
const num8_div = document.getElementById("8");
const num9_div = document.getElementById("9");
const num10_div = document.getElementById("10");
const scoreboard_div = document.querySelector(".scoreboard");
const userScore_div = document.querySelector(".score");



function computerChoice(){
    const number = ['1','2','3','4','5','6','7','8','9','10'];
    const random = Math.floor(Math.random()*10);
    return number[random];
}


function same(userChoice,compChoice){
    userScore++;
    text_p.style.border="3px solid antiquewhite";
    text_p.style.marginLeft="40px";
    text_p.style.borderRadius="20px";
    text_p.style.padding="15px 15px";
    text_p.style.backgroundColor="antiquewhite";
    text_p.style.color="black";
    text_p.innerHTML = "The CPU picked number " + compChoice;

    document.getElementById(userChoice).classList.add('same');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('same')},500);

    footer_p.style.border="3px solid antiquewhite";
    footer_p.style.marginLeft="40px";
    footer_p.style.marginBottom="30px";
    footer_p.style.borderRadius="20px";
    footer_p.style.padding="15px 15px";
    footer_p.style.backgroundColor="antiquewhite";
    footer_p.style.color="black";
    footer_p.innerHTML = "You pick the same number as the CPU !";

    
    scoreboard_div.style.border= "3px solid antiquewhite";
    scoreboard_div.style.borderRadius="20px";
    scoreboard_div.style.backgroundColor="antiquewhite";
    scoreboard_div.style.padding="10px 10px";
    userScore_div.innerHTML = userScore;


}

function wrong(userChoice ,compChoice){
    text_p.style.border="3px solid antiquewhite";
    text_p.style.marginLeft="40px";
    text_p.style.borderRadius="20px";
    text_p.style.padding="15px 15px";
    text_p.style.backgroundColor="antiquewhite";
    text_p.style.color="black";
    text_p.innerHTML = "The CPU picked number " + compChoice;

    document.getElementById(userChoice).classList.add('wrong');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('wrong')},500);

    footer_p.style.border="3px solid antiquewhite";
    footer_p.style.marginLeft="40px";
    footer_p.style.marginBottom="30px";
    footer_p.style.borderRadius="20px";
    footer_p.style.padding="15px 15px";
    footer_p.style.backgroundColor="antiquewhite";
    footer_p.style.color="black";
    footer_p.innerHTML = "Your pick isn't a match as the CPU...";

    scoreboard_div.style.border= "3px solid antiquewhite";
    scoreboard_div.style.borderRadius="20px";
    scoreboard_div.style.backgroundColor="antiquewhite";
    scoreboard_div.style.padding="10px 10px";
    userScore_div.innerHTML = userScore;
}



function compare(userChoice){
    const compChoice = computerChoice();
    if (userChoice === compChoice) {
        return same(userChoice, compChoice);
    }
    else {
       return wrong(userChoice, compChoice);
    } 
    
}


    num1_div.addEventListener('click', function(){
        compare("1");
    })

    num2_div.addEventListener('click', function(){
        compare("2");
    })

    num3_div.addEventListener('click', function(){
        compare("3");
    })

    num4_div.addEventListener('click', function(){
        compare("4");
    })

    num5_div.addEventListener('click', function(){
        compare("5");
    })

    num6_div.addEventListener('click', function(){
        compare("6");
    })

    num7_div.addEventListener('click', function(){
        compare("7");
    })

    num8_div.addEventListener('click', function(){
        compare("8");
    })

    num9_div.addEventListener('click', function(){
        compare("9");
    })

    num10_div.addEventListener('click', function(){
        compare("10");
    })


