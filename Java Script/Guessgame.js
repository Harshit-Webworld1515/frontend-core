const max=prompt("enter the max number");
console.log("Your maxnumber is: ",max);
const random=Math.floor(Math.random()*max)+1;
console.log("Random number is :",random)
let guess=prompt("guess your number");
console.log("This time your guess is :",guess)
while (true) {
    if (guess=="quit") {
        console.log("you are quitted");
        break;
    }
    if (guess==random) {
        console.log("you guess right !congrat bruh",guess);
        break;
    }else if(guess<random){
        guess=prompt("this is small try again");
    }else{
        guess=prompt("guess is too large plz try again");
    }
}