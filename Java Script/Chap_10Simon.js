let gameSeq = [];
let userSeq = [];
let highScore = 0;

let started = false;
let level = 0;
let btns = ["red", "yellow", "purple", "green"];

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelUp();
    }
})
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 300);
}
function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    // random button choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    console.dir(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}
function btnPress() {
    console.dir(this);
    let btn = this;
    userSeq.push(btn.id);
    console.log("userseq", userSeq);
    userFlash(btn);
    checkAns(userSeq.length - 1);
}
function checkAns(idx) {
    // console.log("curr level",level)
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerText = `Game Over!Your score is: [${level}] Press any key to start`;
        document.body.style.backgroundColor = "red";
        setTimeout(function () {
            document.body.style.backgroundColor = "white";
        }, 180);
        let h2 = document.querySelector("h2");
        if (level > highScore) {
            highScore = level;
        }
        h2.innerText = `Your High Score is: ${highScore}`;

        reset();
    }
}
let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
    btn.addEventListener("click", btnPress);
}
function reset() {
  level = 0;
  gameSeq = [];
  userSeq = [];
  started = false;
  setTimeout(() => {
    h3.innerText = "Press any key to start";
  }, 500);
}
