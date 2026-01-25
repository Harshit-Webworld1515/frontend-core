async function greet() {
    // throw  "Some random error";
    return "Mere Pyare";
}
greet()
    .then((res) => {
        console.log("Promise has been resolved", res);
    })
    .catch((err) => {
        console.log("promise was rejected with an error", err);
    })
// we can make a simple arrow function to async function
let hello = async () => {
    // return 55;
    throw "Some random error";
}
console.log(hello)
function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10);
            console.log(num);
            resolve();
        }, 1000);
    })
}
async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}
let h1 = document.querySelector("h1");
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log("your color has been change", color)
            resolve(color);
        }, delay);
    })
}
async function nextColor() {
    let c1 = await changeColor("red", 3000);
    console.log("I changed it to", c1);
    await changeColor("blue", 3000);
    await changeColor("voilet", 3000);
    await changeColor("green", 3000);
    await changeColor("choclate", 3000);
    await changeColor("yellow", 3000);
    await changeColor("brown", 3000);
    await changeColor("blue", 3000);

}
nextColor();
// Handling rejection of async await function
function savetoDbms(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10);
        console.log("Internet Speed:", internetSpeed);

        if (internetSpeed > 4) {
            resolve(`success: Data was saved (${data})`);
        } else {
            reject(`failure: weak connection (${data})`);
        }
    });
}
async function run() {
    try {
        let msg1 = await savetoDbms("apna college");
        console.log(msg1);

        let msg2 = await savetoDbms("hello world");
        console.log(msg2);

        let msg3 = await savetoDbms("javascript");
        console.log(msg3);

    } catch (err) {
        console.log("ERROR:", err);
    }
    let b=4;
    console.log("incremented with 4",b+4)
}

run();
