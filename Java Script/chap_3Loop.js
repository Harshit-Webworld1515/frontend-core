// Forward loop for odd numbers up to 15
console.log("Forward loop");
for (let i = 1; i <= 15; i += 2) {
    console.log("odd num is:", i);
}

// Backward loop for odd numbers down from 15
console.log("Backward Loop");
for (let i = 14; i >= 0; i -= 2) {
    console.log("even num is:", i);
}
// printing the table 
n=prompt("give a number: ");
n=parseInt(n);
console.log("Your table is here: ")
for (let i = 1; i <= 10; i ++) {
    console.log(n*i);
}
// nested for loop
for (let i = 1; i <=3; i++) {
    for (let j = 1; j <=3; j++) {
        console.log(j)
    }
}
// while loop
let i=15;
while (i<35) {
    if (i==27) {
        break;
    }
    console.log("ram ram ji",i);
    i+=3;
}
// loops with array
let fruits=["mango","apple","banana","litchi","orange"];
fruits.push("pineapple")
for (let i = 0; i < fruits.length; i++) {
    console.log(i,fruits[i])    ; 
}
// nested loop with nested array
let heroes=[["ironman","spiderman","thor"],["superman","wonderman","flash"]]
for (let i = 0; i < heroes.length; i++) {
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(i,j,heroes[i][j]);
    }
    
}
// for of loop
for (const fruit of fruits) {
    console.log(fruit);
}
sweet=fruits[2];
for (char of sweet) {
    console.log(char)
}
// nested for of rule
for (const list of heroes) {
    for (const hero of list) {
        console.log(hero);
    }
}