console.log("Ram Ram ji!")
console.log("apna college")
a=10;
b=5;
console.log("on adding a+b is :",a+b);
let output=`total age of a and b is: ${a+b} respectively ${a},${b}`;
console.log(output);
// arithmatic operator
console.log(a+b)
console.log(a-b)
console.log(a/b)
console.log(a%b)
console.log(a*b)
console.log(a**b)
// unary operator
console.log(a++ * ++b)
console.log(a)
console.log(a*3);
console.log(a);
console.log(a*=3)
let price=100;
console.log(price>200);
console.log(3<2);
console.log(55<=55);
// Unicode
console.log('a' < 'Z');
console.log('s' < 'S');
console.log('e' < 'f');
// Conditional statement
console.log("code before if");
let age=27.5;
if (age<19) {
    console.log("you are minor boy");
    console.log("you are looking good",age*2);
}
if (age>23) {
    console.log("right to marry")
}
console.log("code after if");
// practice qs
console.log("traffic light");
let color="red";
if (color=="red") {
    console.log("please stop")
}
if (color== "yellow") {
    console.log("get ready");
}
if (color=="green") {
    console.log("go forward");
}
// elseif statement
let marks=33;
if (marks>80) {
    console.log("A++");
} else if(marks>60){
    console.log("A");
}
else if(marks>33){
    console.log("B");
}
else if(marks<33){
    console.log("FAIL");
}
else{
    console.log("no fail no pas you top")
}
// nested if else stement
let trophy=1;
if (trophy>0) {
    if (trophy>2) {
        console.log("you are superking")
    } else {
        console.log("RCB Shame on you!! you are mass murderer")
    }   
} else {
    console.log("better luck next time")
}
// Logical Operator
let rupees=60
if (rupees>30 && rupees<60 ) {
    console.log("enough money");
}
else if (rupees>60||rupees==60) {
    console.log("you are rich")
}else{
    console.log("need more money for gb")
}
// truthy and falsy value
if (true) {
    console.log("this is true value");
} else {
    console.log("not true");
}
// Switch Statement
let Status= "no declared";
switch (Status) {
    case "pass":
        console.log("congrat you are short-listed")
        break;
    case "fail":
        console.log("sorry! you are fail");
        break;
    default:
        console.log("result not declared yet")
        break;
}
// Alert and Prompt
alert("this is alert massage");
console.log("simple print statemnt");
console.error("error massage print");
console.warn(" warning message print here");
First_name=prompt("Enter you sex");
console.log(First_name);

