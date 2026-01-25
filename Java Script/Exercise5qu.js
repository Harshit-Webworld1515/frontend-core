function getLargerElements(arr, number) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > number) {
            result.push(arr[i]);
        }
    }
    return result;
}

const arr = [28, 25, 44, 31, 39, 49];
console.log(getLargerElements(arr, 35));
// qu=2
let str = "abcdabcdefgggh";
let ans = "abcdabcdefgggh";
console.log(ans.length)
function removeDuplicate() {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < ans.length; j++) {
            if (ans[i] == ans[j]) {
                ans = ans.slice(0, j) + ans.slice(j + 1);
                j--;
            }
        }
    }
    return ans;
}
console.log(removeDuplicate());
// qu-3
country = ["Australia", "Germany", "United States of America"];
let arry=[]
function largestWord(country) {
    for (let i = 0; i < country.length; i++) {
        arry[i]=country[i].length;
    }
    let longnum=Math.max(...arry);
    for (let i = 0; i < arry.length; i++) {
        if (longnum==arry[i]) {
            return country[i];
        }        
    }
}
console.log(largestWord(country));
// qu-4
let stir="navodayans";
function numofVowel(stir){
    let count=0
    for (let i = 0; i < stir.length; i++) {
        if (stir[i] == 'a' || stir[i] == 'e' || stir[i] == 'i' || stir[i] == 'o' || stir[i] == 'u') {
            count++
        }
    }
    return count;
}
console.log(numofVowel(stir));
// qu-5
let random=28;
function rangeRandom(random){
    return Math.floor(Math.random()*random)+1;
}
console.log(rangeRandom(random))
