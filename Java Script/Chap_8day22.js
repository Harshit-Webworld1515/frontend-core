console.dir(document);
// console.dir(document.all);
console.dir(document.querySelectorAll("*"));
console.dir(document.querySelector("h1"));//pehle ko select karega
console.dir(document.querySelector("h1").innerText);
document.querySelector("h1").innerText = "Peter Parker"
console.dir(document.querySelector("div a").innerText)
// Selecting Elements by id
console.log(" Selecting Elements by id :⇓")
let imgObj = document.getElementById("mainImg");
console.dir(imgObj);
// selecting element by class
let smallImg = document.getElementsByClassName("oldImg");
console.log("getElementsByClassName  :⇓")
for (let i = 0; i < smallImg.length; i++) {
    console.log(`your bottom no.- ${i + 1} has been change`)
    smallImg[i].src = "https://wallpaperaccess.com/full/8263039.jpg";
}
// selecting element by tag name
console.log(" selecting element by tag name :⇓");
console.dir(document.getElementsByTagName("p")[1].innerText);
// using the property method DOM Manupulation
let para = document.querySelector("p");
console.dir(para);
para.innerHTML
para.textContent
console.dir(para.innerText);
para.innerText = "hi I am <b>peter parker </b>";
console.dir(para.innerText);
para.innerHTML = "hi I am <b>peter parker </b>Peter Parker is a fictional character from Marvel Comics, best known as Spider-Man. He was created by Stan Lee and Steve Ditko in 1962. Peter Parker is an ordinary teenager from Queens, New York, who lives with his Aunt May and Uncle Ben.One day, he is bitten by a radioactive spider, which gives him special powers like super strength, the ability to climb walls, and a “spider-sense” that warns him of danger. At first, he uses his powers for fun, but after his Uncle Ben dies because Peter didn’t stop a criminal, he learns the important lesson: “With great power comes great responsibility";
console.dir(para.innerHTML);
console.dir(para.innerText);
let heading = document.querySelector("h1");
heading.innerHTML = `<u>${heading.innerText}</u>`;
console.dir(heading.innerHTML);
console.dir(heading.innerText);
// manipulatinng attribute
console.log("Manipulating Attribute :⇓");
let img = document.querySelector("img");
console.dir(img.getAttribute("id"));
console.dir(img.setAttribute("id", "spiderimage"));
console.dir(img.getAttribute("id"));//all styling will loose
// manipulating style by obj.list
console.log("Manipulating style by obj.list :⇓")
console.dir(img);
console.dir(img.style);
console.dir(heading.style.color = "red");
let change = document.querySelectorAll(".box a");
// for (let i = 0; i < change.length; i++) {
//     console.dir(change[i].style.color="black ");
// }
for (const item of change) {
    console.dir(item.style.color = "white ");
    item.style.backgroundColor = "green";
}
// manipulating style by obj.classList
console.log("Manipulating style by obj.classList :⇓")
console.dir(img.classList);
let head2 = document.querySelector("h2");
head2.classList.add("wavy");
head2.classList.add("unnecessary");
console.dir(head2.classList);
console.log(head2.className); // yahan "wavy unnecessary" aana chahiye
console.log(head2.classList.length); // yahan 2 aana chahiye
console.log([...head2.classList]);   // ["wavy", "unnecessary"]
console.dir(head2.classList.remove("unnecessary"));
console.dir(head2.setAttribute("class", "unnecessary"))
console.dir(head2.classList);
let divva = document.querySelector("div");
console.dir(divva.classList);
console.dir(head2.classList.contains("wavy"));
console.dir(head2.classList.contains("unnecessary"));
console.dir(head2.classList.toggle("wavy"));
console.dir(head2.classList);
console.dir(head2.classList.toggle("unnecessary"));
// Navigation
console.log("Navigation :⇓")
let h4 = document.querySelector("h4");
// console.dir(h4.parentElement.setAttribute("class","mary"))
console.dir(h4.parentElement.style.border = "5px solid black");
console.dir(divva.children);
console.dir(divva.childElementCount);
let ul = document.querySelector("ul");
console.dir(ul);
console.dir(ul.children);
console.dir(ul.children[1]);
console.dir(ul.children[1].previousElementSibling.style.textDecoration = " underline wavy magenta ");
console.dir(ul.childElementCount);
console.dir(ul.children[1].nextElementSibling.style.textDecoration = " underline wavy red ");
head2.nextElementSibling.style.backgroundColor = "lightpink";
console.dir(head2.nextElementSibling.style.backgroundColor);
// Adding element in js dom
console.log("Adding element in js dom :⇓");
let newP = document.createElement("p");
newP.innerText = "Hi I am mohsin nakvi";
console.dir(newP);
let body = document.querySelector("body");
body.appendChild(newP);//yha se newP cut paste hokar divva me chla jayega
divva.appendChild(newP);
let btn = document.createElement("button");
btn.innerText = "click me";
console.dir(btn);
divva.appendChild(btn);
newP.append("this is new chochla. ");
newP.append(btn);
divva.prepend(newP);
divva.append(btn);
newP.prepend("its song about warrior, ");
newP.append("tq");
let p = head2.nextElementSibling;
console.dir(p);
let btn2 = document.createElement("button");
btn2.innerHTML = "subscribe";
p.insertAdjacentElement('beforebegin', btn);
p.insertAdjacentElement('afterbegin', btn2);
p.insertAdjacentElement('beforeend', btn2);
p.insertAdjacentElement('afterend', btn2);
// removing element in js dom
console.log("Removing element in js dom :⇓");
// p.removeChild(btn2);
// btn.remove();//yha se hm directly remove ker sakte
// newP.remove();
