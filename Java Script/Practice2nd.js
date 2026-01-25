let msg="    ApnaCollege    ";
massege = msg.trim().toUpperCase();
console.log(massege);
console.log(msg.trim().slice(4,11).replace('l','t').replace('l','t'));
// Array practice
let months=["january","july ","march","august"];
console.log(months);
// months[0]="july ";
// months[1]="june";
// months[2]=" March";
// months[3]="August";
months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
console.log("By shift and unshift method: ",months);
let monthly=["january","july ","march","august"];
monthly.splice(0,2, "july","june");
console.log("by splice method",monthly);
// qu-2
let language=['c','c++','html','javaScript','Python','JAVA','c#','sql'];
language.reverse();
console.log("reverse array of index: ",language.indexOf("javaScript"));
// last question
let tic_tac=[['*',null,'o'],[null,'*',null],['o',null,'*']];
tic_tac[0][1]='o';

