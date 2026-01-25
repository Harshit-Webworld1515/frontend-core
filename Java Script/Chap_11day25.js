// call Stack
function one() {
    return 1;
}
function two() {
    return one() + one();
}
function three() {
    let ans = one() + two();
    console.log(ans);
}
three();
// callback hell
let h1 = document.querySelector("h1");
// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay)
// }
// changeColor("red", 5000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("magenta", 1000);
//             })
//         })
//     });
// });
// fake function which help to store database
function savetoDb(data, success, failure) {
    let netSpeed = Math.floor(Math.random() * 10);
    console.log(netSpeed);
    console.log(data);
    if (netSpeed > 4) {
        success();
    } else {
        failure();
    }
}
savetoDb("Mrs. Manju Tiwari", () => {
    console.log("success:your data has been saved");
    savetoDb("Mr. Janardan Tiwari", () => {
        console.log("success2:your data has been saved");
        savetoDb("Raunak Thakur", () => {
            console.log("our last callback hell");
        }, () => {
            console.log("sorry your Last Failure");
        })
    }, () => {
        console.log("failure2}: sorry your data not saved");
    })
}, () => {
    console.log(`failure}: sorry your data not saved`);
    savetoDb("Harshit tiwari", () => {
        console.log("tera bap hun mai");
    })
});
// Promises to avoid this call back hell
function savetoDbms(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10);
        console.log(internetSpeed);
        if (internetSpeed > 4) {
            resolve(`success: Data was saved (${data})`);
        } else {
            reject(`failure: weak connection (${data})`);
        }
    });
}

// Promise chaining (no callback hell 😎)
savetoDbms("apna college")
.then((msg) => {
    console.log(msg);
    return savetoDbms("hello world");
})
.then((msg2) => {
    console.log(msg2);
    return savetoDbms("javascript");
})
.then((msg3) => {
    console.log(msg3);
})
.catch((err) => {
    console.log(err);
});
function changeColor(color,delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color=color;
            resolve(`your color has been change ${color}`);
        }, delay)
    })
}
changeColor("red",1000)
.then(
    (msg)=>{
        console.log(msg);
        return changeColor("orange",1000);
    }
)
.then(
    (msg2)=>{
        console.log(msg2);
        return changeColor("blue",1000)
    }
)
.then(
    (msg3)=>{
        console.log(msg3);
        return changeColor("magenta",1000)
    }
)
.then(
    (msg4)=>{
        console.log(msg4);
    }
)
.catch(()=>{
    console.log("okay bye")
})
