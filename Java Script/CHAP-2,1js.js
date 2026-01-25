let students=["aman","archna","arun","anay"];
console.log(students);
let nums=[2,4,6,8]
console.log(nums);
let user="Shradhha";
console.log("2nd index of user",user[2]);
let info=["shradhha",342,334.56];
    console.log(info);
 console.log("length of info: ",info.length);
 console.log("oth index of array info's 4th position",info[0][4]);
let fruits=["Apple","Mango","Orange"];
console.log("print of fruit: ",fruits);
fruits[1]="Pineapple";
console.log(fruits);
fruits[10]="date";
// Methods of addition and deletion
fruits.push("litchi");
console.log("empty index of fruits: ",fruits);
fruits.pop();
fruits.unshift("Avacado");
fruits.unshift("guvava");
fruits.shift();
console.log("Addition and deletion: ",fruits);
// index Of method and includes method
primary=["red","yellow","blue"];
sky=primary.indexOf("blue");
anger=primary.indexOf("vlack");
search=primary.includes("blue")
// concat method
merge=primary.concat(fruits);
// reverse  method
primary.reverse();
merger=merge.slice(0,7).concat(merge.slice(14));
console.log("Slice & concat",merger);
// splice method
let cars = ['audi', 'bmw', 'xuv', 'maruti'];
console.log("Initial:", cars);

// Remove element from index 3
cars.splice(3);  
console.log("After splice(3):", cars);

// Remove element from index 0
cars.splice(0, 1); 
console.log("After splice(0,1):", cars);

// Add elements at the end
cars.push("maruti");
cars.push("ferrari");
console.log("After push:", cars);

// Remove 2 elements from index 1
cars.splice(1, 2);
console.log("After splice(1,2):", cars);

// Insert elements at index 0 without removing
cars.splice(0, 0, "toyota", "xuv", "maruti");
console.log("After splice(0,0,...):", cars);

// Insert elements at index 1 only removing 
cars.splice(1, 1, "mercedes");
console.log(" After splice 1,0,......",cars);
// Sort Method: it sort alphabetically to a string
cars.sort();
console.log("sort method is applied",cars);
// constant variable and constant array
const g=10;
const rollnum=[23,34,54,21];
rollnum[3]=33;
// nested array
matric=[[2,4],[3,6],[4,8]];