let students=[
    {
        "s1":{
            "name": "Laiba",
            "rollno": 38,
        },
      "s2":{
        "name": "saman",
        "rollno": 101,
      },
      "s3":{
        "nane":"Ayesha",
        "rollno": 34,
      }
    }
    {
        "marks1":{
            "marks":85
        },
        "marks2":{
            "marks":70
        },
        "marks3":{
            "marks":66
        }
    }
]
console.log(students[0].s1.rollno );
console.log(students[0].s2.rollno);
console.log(students[0].s3.rollno);


console.log(students)
console.log(students[0].s2.name,students[1].marks2.marks);



let date=new Date();
let hh= date.getHours();
let mm=date.getMinutes();
let ss= date.getSeconds();
let day=date.getDay();
let dat= date.getDate();
console.log(hh,mm,ss,day,dat);


let setInterval 
let setTimeout

function print(){
    console.log("hello");
}
setInterval(print,10000);
setTimeout(print,4000);
    

