let student = {
    name: "Hari Anant",
    klass: 10,
    rollnum: 34,
    marks: 100,
    movies: ["3ediot", "dj", "Bahubali", "temporary pyar"],
    11: "gyarah",
    null: "khali"
};
let post = {
    username: "Harshit",
    content: "the way you studying plz change it bcoz this is not so effective so not depend on will power depend on daily making routine",
    likes: 85,
    repost: 4,
    tags: ["@delta", "@alpha"]
}
console.log(post["username"]);
console.log(post.content);
console.log("Method to access a value", post.tags[1]);
console.log(student.null);
console.log("get value always in string: ", student[11]);//here is 11 js convert it into a string
console.log(student["null"]);//now null is also
// add/update in object literels
post.comment = 5;
post.community = "most viewd content on X";
post.repost = 14;
student.marks = [100, 67, 89];
// delete any property
delete student[11]; // fixed
//Object of objects
const classInfo = {
    Harshit: {
        degree: "B.Tech",
        game: "Cricket",
        pin_code: 224141,
    },
    Sakshi: {
        degree: "B.sc",
        game: "Badminton",
        pin_code: 224041,
    },
    Pandey: {
        degree: "ma",
        game: "Ludo",
        pin_code: 930890

    }
};
classInfo.Pandey.game = "puzzle";
classInfo.Pandey.relation = "my world";
console.log(classInfo.Pandey);
//Array of object
const classInfor = [
    {
        naam: "Aman",
        stetus: "fail",
        date: 12.3
    },
    {
        naam: "anand",
        stetus: "not declare yet",
        date: 12.3
    },
    {
        naam: "Aryan",
        stetus: "pass",
        date: 12.3
    }
]
console.log(classInfor[1].stetus)