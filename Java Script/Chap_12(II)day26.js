let jsonres = `{"fact":"Cats bury their feces to cover their trails from predators.","length":59}`;
console.log(jsonres);
// to accessing json data in string form to object form we use method
let validRes = JSON.parse(jsonres);
console.log(validRes);
// let do reverse thing
let lastLaugh = JSON.stringify(validRes);
console.log(lastLaugh);
// 
let name = "harshit";
let age = 20;

let url = `https://api.example.com/users?name=${name}&age=${age}`;
console.log(url);
// go and read about http header 
// Our First api request
let link = "https://dog.ceo/api/breeds/image/random";
fetch(link)
    .then((res) => {
        console.log("Your Response: ", res);
        return res.json();
    })
    .then((data) => {
        console.log(data.message);
        return fetch(link)
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("error: ", err);
    })
let url2="https://catfact.ninja/fact";
async function getReady() {
    try {
        let rej=await fetch(url2);
        let data1=await rej.json()
        console.log(data1.fact);
        let rej1=await fetch(url2);
        let data2=await rej1.json()
        console.log(data2.fact);
    } catch (e) {
        console.log("error occured",e)
    }
}
getReady();