//question-1
let multiple=[10,101,30,40,50,120];
let raro=multiple.every(el=>(el%10==0));
console.log(raro);
//qu-2
console.log(multiple.reduce((min,num)=>{
    if (min>num) {
        return num;
    } else {
        return min
    }
}))
