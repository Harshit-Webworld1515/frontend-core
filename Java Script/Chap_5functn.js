function print1To5() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
}
function nameCompany() {
    console.log("Apna College");
    console.log("Shradha Khapra")
}
function isAdult(age) {
    if (age > 18) {
        console.log("you are adult");
    } else {
        console.log("you are not adult");
    }
}
function printPoem() {
    console.log("Even so my sun one early morn did shine,")
    console.log("With all triumphant splendour on my brow")
    console.log("But out, alack, he was but one hour mine,")
    console.log("The region cloud hath mask’d him from me now …")
}
function rollDice() {
    for (let i = 0; i < 4; i++) {
        const rand = Math.floor(Math.random() * 6) + 1;
        console.log(rand);
    }
}
rollDice();
printPoem();
print1To5();
nameCompany();
isAdult(17);
// Function with Argument
function printInfo(name, age) {
    console.log(`A girl's name ${name} whose age is ${age} got success in his life`);
}
printInfo("shradhha khapra", 24);
function multiplyPower(a, b) {
    return (a ** b);
}
console.log(multiplyPower(2, (multiplyPower(2, 3))));
//scope
let sum = 34
function sumFirstn(n) {
    let sum = 0;//function scope
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    console.log("function scope", sum)
    return sum;
}
console.log("global scope", sum);
console.log("fxn call", sumFirstn(10));
// block scope
function print1To5() {
    for (let i = 0; i < 5; i++) {
        console.log("Inside block statement: ", i)
    }
    // console.log(i);//outside from blockscope not define error
}
print1To5();
// lexical Scope
function outerFxn() {
    function innerFxn() {
        let a = 2
        console.log(x);
        console.log(y)
    }
    let x = 5
    let y = 6;
    // console.log(a);//but opposite is not true
    innerFxn()
}
outerFxn();
// Function expression
let Summation = function (p, q) {
    return p + q
}
console.log(Summation(22, 89));
let greet = function () {
    console.log("Namaste from the grat nation : Bharat ")
}
greet()
// higher order function
function multiGreet(func, count) {
    for (let i = 0; i < count; i++) {
        func()
    }
}
let Greet = function () {
    console.log("Ram Ram ji")
}
multiGreet(Greet, 7);
// high order function with return a value
function evenoddFactory(request){
    if (request == "even") {
        return function (n) {
            console.log("Is your num is even: ", n % 2 == 0);
        }
    } else {
        return function (n) {
            console.log("is num odd: ", n % 2 != 0);

        }
    }
}
request="even";
let checker=evenoddFactory(request);
console.log(checker(80))
// Methods
const calculator={
    add(a,b){
        return a+b;//method shorthand
    },
    sub:function(a,b){
        return a-b;
    },
    mull(a,b){//method shorthand
        return a*b;
    }
}
calculator.sub(34,19);

