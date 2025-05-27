let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "blue", "orange"];

let started = false;
let level = 0;

let h4 = document.querySelector("h4");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is Started");
        started = true;
        level = 0;
        gameSeq = [];
        setTimeout(levelUp, 1000);
    }
});

function levelUp() {
    userSeq = [];
    level++;
    h4.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randomIdx];
    let ranBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(ranBtn);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

function btnPress() {
    if (!started) return; // Ignore clicks when game is not started

    let btn = this;
    userFlash(btn);

    let userCol = btn.getAttribute("id");
    userSeq.push(userCol);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (let butn of allBtns) {
    butn.addEventListener("click", btnPress);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h4.innerText = `Game Over! Your Score is ${level}. Press any key to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },1500)
        resetGame();
    }
}

function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
