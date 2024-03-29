// elements 
var target = document.querySelectorAll(".target");
var scores = 0;
var randShow = 0;
var start = document.getElementById("start");
var time = document.querySelector(".time");
var number = 60 ;
var gameTime = 60000 ;
var Showcase = document.getElementById("case");

// function start

function wait() {

    let totalTime =  setInterval(() => {
        randShow = Math.ceil(0 + Math.random() * 5);
        target[randShow].style.bottom = "-10%";
        setTimeout(() => {
            target[randShow].style.bottom = "-100%";
        }, 1000);
        target[randShow].addEventListener("click", () => {
            scores += 10;
            document.querySelector(".scroes").innerHTML =scores;
        });
    }, 3000)

    let Number =  setInterval(() => {
        number -= 1;
        time.innerHTML = number;
    }, 1000); 
    setTimeout(() => {
        clearInterval(totalTime);
        clearInterval(Number);
        start.style.display ="inline-block";
        if (scores < 200) {
           alert("You Lose")
        }else if (scores < 300 && scores == 200 ) {
           alert("Good But not very good")
        }else if (scores  >= 300 ) {
            alert("Excellent WOOW Good job")
        }

    }, gameTime);
}
start.addEventListener("click",()=>{
    start.style.display="none";
    wait();
})