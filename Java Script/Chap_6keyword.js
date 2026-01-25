const student={
    name:"shradha",
    class:12,
    phy:45,
    eng:46,
    math:45,
    getAvg(){
        console.log(this);
        Avg=(this.phy+this.eng+this.math)/3;
        console.log(`A Girl ${this.name} has got :${Avg}`);
    }
}
// Try catch statement
console.log("ram ram ji");
console.log("ram ram ji");
try {
    console.log(a);
} catch (err){
    console.log("caught an error of not define");
    console.log(err);
}
console.log("Jay Jagannath prabhu");
console.log("Jay Jagannath prabhu");
console.log("Jay Jagannath prabhu");
// Arrow function
const pow = (a) => {
    console.log(a * a);        // a ka square
    console.log((a + 2) * (a + 2)); // (a+2) ka square
};
pow(3);
const cube=(a,b)=>{
    console.log(a**b)
}
cube(2,9);
const greet=()=>{
    console.log("jai mahakal");
}
greet();
// Arrow function with implicit button
const multip=(a,b)=>(a*b);
console.log(multip(23,12));
// Set timeout
console.log("Hi There");
setTimeout(()=>{
    console.log("apna coolege")
},1000);
console.log("welcome to");
// set Interval
let id=setInterval(()=>{
    console.log("bharat mata ki jai");
},2000);
console.log(id);
let id2=setInterval(()=>{
    console.log("Sita Maiya ki jai");
},3000);
console.log(id2);
// this with arrow function
const Scholar={
    name:"aman",
    marks:96,
    prop:this,//global scope
    getName:function(){
        console.log(this);
        return this.name;
    },
    getMarks:()=>{
        console.log(this);//parent scope->window
        return this.marks;
    },
    getInfo1:function(){
        setTimeout(
            ()=>{console.log(this);
            },2000
        );
    },
    getInfo2:function(){
        setTimeout(function
            (){console.log(this);
            },2000
        );
    },
};