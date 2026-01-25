// qu-1
let arr=[1,3,5,7,9];
let sqr=arr.map(el=>el*el);
let avg=sqr.reduce((sum,el)=>{
    return sum+el;
})
console.log(avg/arr.length);
// qu2
let incre=arr.map(el=>el+5);
console.log(incre);
// qu-3
let god=["Shriram","Shrikrishna","jaganath prabhu"]
let upper=god.map(el=>(el.toUpperCase()))
console.log(upper);
// qu-4
 function doubleAndReturnArgs(arr,...args){
    let merged=[...arr,...args]
    for (let i = arr.length; i <merged.length; i++) {
        merged[i]*=2
    }
    return merged;
    // return [...arr, ...args.map(num => num * 2)];
 }
 console.log(doubleAndReturnArgs(arr,11,22,33,44));
//  qu-5
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

let a = { name: "india", capital: "new delhi" };
let b = { economy: 3, population: "1.4B" };

console.log(mergeObjects(a, b));
// Output: { name: 'india', capital: 'new delhi', economy: 3, population: '1.4B' }
