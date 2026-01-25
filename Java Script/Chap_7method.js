let arre = [71, 23, 38, 45, 56];
const print = function (el) {
    console.log(el);
}
arre.forEach(print);
//alternative way
arre.forEach(function (el) {
    console.log(el);
})
// we can use this in arrow function
arre.forEach(el => {
    console.log(el);
})
const arr = [
    {
        name: "Raja Ram",
        residence: "Ayodhya",
        house_num: 121

    },
    {
        name: "Krishna chandra",
        residence: "gokul",
        house_num: 121
    }
]
arr.forEach(student => console.log(student.residence));
// map function
let double = arre.map(
    el => (el + 5)
);
let size = arr.map(el => {
    return el.house_num / 10
});
console.log(size);
console.log(double);
// filter function
let even = arre.filter(el => el % 2 == 0);
console.log(even);
let bhagwan = arr.filter(el => console.log(el.name));
console.log(bhagwan)
//every function
console.log(arre.every(el => (el % 2 == 0)));
//some function
console.log(arre.some(el => (el % 2 == 0)));

// reduce function
console.log(arre.reduce((res, el) => (res + el)));
console.log(arre.reduce((max, ele) => {
    if (max < ele) {
        return ele;
    } else {
        return max;
    }
}))
// Default parameter
function sum(a, b = 3) {
    return a + b;
}
console.log(sum(5));
// order matter
function sam(a = 9, b) {
    return a + b;
}
console.log(sam(7));
// spread function
console.log(...arr);
let arrey = [7, 2, 9, 1, 10, 4, 6, 3, 8, 5];
console.log(arrey);
console.log(...arrey);
console.log(Math.min(arrey));
console.log(Math.min(...arrey));
let newArrey = [...arrey];
console.log(newArrey);//yha copy ker rha
let char = [..."hello"];
console.log(char);
let odd = [1, 3, 5, 7, 9, 11];
let even_num = [2, 4, 6, 8, 10];
let whole = [...odd, ...even_num];//concatenate
console.log(whole);
let obj1 = { ...even_num };
console.log(obj1);//obj1->key:value pair
let obj2 = { ...char };
console.log(obj2);
// rest method 
function sum(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log("you gave us", args[i], "time in sports")
    }
}
console.log(sum(2, 3, 2, 1, 4, 5, 5, 6));
function min() {
    console.log(arguments);
    console.log(arguments.length);
    // arguments.push(9);//isliye we use rest concept to work on array method
}
console.log(min(2, 7, 4, 9, 1));
function addition(...args) {
    return args.reduce((sum, el) => sum + el);
}
console.log(addition(2, 3, 2, 1, 4, 5, 5, 6));
// clone of Math.min function
function minimum(msg, ...args) {
    console.log(msg)
    return args.reduce((smallest, num) => {
        if (smallest < num) {
            return smallest;
        } else {
            return num;
        }
    })
}
console.log(minimum("your min num is: ", 2, 7, 4, 9, 12));
// destructuring array
let fruit = ["apple", "banana", "cherry", "mango", "orange"];
let [kashmeer, bhusawal, ...others] = fruit;
console.log(kashmeer, ...others)
// destructring object
const student = {
    name: "karan",
    age: 14,
    class: 9,
    subject: ["hindi", "eng", "math", "science"],
    username: "karan123",
    password: "abcd",
};
let { username: user, password: secretcode, city: place = "mumbai" } = student
console.log(user);
console.log(place);
console.log(secretcode);