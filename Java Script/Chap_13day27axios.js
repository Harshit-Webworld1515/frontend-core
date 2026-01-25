let url2="https://catfact.ninja/fact";
let p1=document.querySelector("#fact");
let p2=document.querySelector(".p")
async function getReady() {
    try {
        let rej=await axios(url2);
        console.log(rej)
        p1.innerText=rej.data.fact;
        let rej2=await axios(url2);
        p2.innerText=rej2.data.fact;
    } catch (err) {
        console.log("error found go back",err);
    }
}
let btn=document.querySelector("button");
btn.addEventListener("click",getReady);
// 2nd api call of dog.ceo

let img=document.querySelector("img");
let btn2=document.querySelector(".bton");
let h2=document.querySelector("h2");
async function yourImg(){
    try {
        let random=await axios("https://dog.ceo/api/breeds/image/random");
        console.log(random)
        h2.innerText="Mai Dileep ka 👇KOILA hun"
        img.src=random.data.message;
    } catch (error) {
        console.log("photos glitch")
    }
}
btn2.addEventListener("click",yourImg);
// pass header in our axios
let link="https://icanhazdadjoke.com/";
async function withHeader() {
    try {
        let head={headers:{Accept:"application/json"}}
        let goal= await axios.get(link,head);
        console.log(goal.data.joke);
    } catch (er) {
        console.log("wrong syntax try again",er);
    }
}
withHeader();
// update query string in our url
// let url = new URL("http://universities.hipolabs.com/search");
let url="http://universities.hipolabs.com/search";
let input=document.querySelector("input");
let bten=document.querySelector(".bton2");
let para=document.querySelector("ol");
async function searchHere(state_province) {
    try {
        // url.searchParams.set("name",state_province);
        // url.searchParams.set("country","United States of America");
        let search= await axios.get(url,{
            params:{
                name:state_province,
            }
        });
        console.log(search);
        para.innerText="";
        search.data.forEach((uni,idx)=>{
            let rows=document.createElement("li");
            rows.innerText=`${idx+1}. ${uni.name} ${uni.country}\n`;
            para.append(rows);
        })
    } catch (erro) {
        console.log("failed server")
    }
}
bten.addEventListener("click",()=>{
   let state_province=input.value;
    searchHere(state_province);
})



//     try {
//         let rej=await fetch(url2);
//         let data1=await rej.json()
//         console.log(data1.fact);
//         let rej1=await fetch(url2);
//         let data2=await rej1.json()
//         console.log(data2.fact);
//     } catch (e) {
//         console.log("error occured",e)
//     }
// }
// getReady();