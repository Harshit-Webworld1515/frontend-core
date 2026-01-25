let favMovie="border";
guess=prompt("guess my fav movie");
while ((guess!=favMovie)&&(guess!="quit")) {
    guess=prompt("wrong guess try again");
}
    if (guess==favMovie) {
        console.log("yes you got it");
    }else{
        console.log("you quit");

    }
