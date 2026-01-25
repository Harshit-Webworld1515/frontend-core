let todo=[];
let req= prompt("please enter your request");
console.log("your request is",req);
while (true) {
    if (req=="quit") {
        console.log("you are quitted");
        break;
    } 
    if(req=="list"){
        console.log("------------")
        for (let i=0;i<todo.length;i++) {
            console.log(i,todo[i]);
        }
        console.log("------------")

    }else if(req=="add"){
       let Event=prompt("please enter your request want to add: ");
       todo.push(Event);
       console.log("task added"); 
    }else if(req=="delete"){
       let idx=prompt("please enter your task index");
       todo.splice(idx,1);
       console.log("task deleted");
    }
    req=prompt("please enter your request");
}