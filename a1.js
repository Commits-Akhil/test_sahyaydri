let arr=[
    {id:1,name:"Amit Sharma",age:20,course:"Computer Science",marks:85,feesPaid:true},
    {id:2,name:"Priya Singh",age:22,course:"Information Technology",marks:92,feesPaid:false},
    {id:3,name:"Ravi Kumar",age:19,course:"Electronics",marks:76,feesPaid:true},
    {id:4,name:"Neha Verma",age:21,course:"Mechanical",marks:88,feesPaid:true},
    {id:5,name:"Sohan Lal",age:23,course:"Civil Engineering",marks:65,feesPaid:false},
    {id:6,name:"Anjali Mehta",age:20,course:"Computer Science",marks:95,feesPaid:true},
    {id:7,name:"Vikas Gupta",age:22,course:"Information Technology",marks:58,feesPaid:false},
    {id:8,name:"Pooja Mishra",age:19,course:"Mechanical",marks:80,feesPaid:true},
    {id:9,name:"Rajesh Khanna",age:21,course:"Electronics",marks:70,feesPaid:false},
    {id:10,name:"Sneha Kapoor",age:22,course:"Civil Engineering",marks:90,feesPaid:true},
];
console.log(arr);
//  Return an array containing only the names of all students.
let arr1=arr.map((el)=>{
    return el.name;
});
console.log(arr1);

//Create a new array of objects that contains only name and course
let arr2=arr.map((el)=>{
    return { name:el.name,course:el.course};
});
console.log(arr2);
//add a new property  status to each student:
let arr3=arr.map((el)=>{
    return{
        id:el.id,
        name:el.name,
        age:el.age,
        course:el.course,
        marks:el.marks,
        feesPaid:el.feesPaid,
        status:el.marks>=60?"pass":"fail",
    };
});
console.log(arr3);

//Create an array of strings like "Amit Sharma Computer Science" 
let arr4=arr2.map((el)=>{
    return el.name+" - "+el.course;
});
console.log(arr4);

//Increase marks of all students by 5 and return the updated array
let arr5=arr3.map((el)=>{
    return{
        id:el.id,
        name:el.name,
        age:el.age,
        course:el.course,
        marks:el.marks+5,
        feesPaid:el.feesPaid,
        
    }
});
console.log(arr5);
const a=arr.filter((el)=>el.course=="Computer Science");
console.log(a);
const marks=arr.filter((el)=>el.marks>=80);
console.log(marks);
const feepend=arr.filter((el)=>el.feesPaid==false);
console.log(feepend);
const b=arr.filter((el)=>el.age>20 && el.marks>70);
console.log(b);
const c=arr.filter((el)=>el.course=="Mechanical" && el.marks<=85);
console.log(c);
const d=arr.map((el)=>el.marks).reduce((acc,curr)=>acc+curr);
console.log(d);
console.log(85+92+76+88+65+95+58+80+70+90);
const e=arr.map((el)=>el.marks).reduce((acc,curr)=>(acc+curr));
console.log(e/arr.length);
const f=arr.reduce((acc,curr)=>{return acc+(curr.feesPaid?1:0);},0);
console.log(f);
const g=arr.reduce((acc,curr)=>{ return (curr.marks>acc?acc=curr.marks:acc=acc);},0);
console.log(g);
    const group = arr.reduce((acc,curr) => {
      const course = curr.course;
      if (!acc[course]) {
        acc[course] = [];
      }
      acc[course].push(curr);

      return acc;
    }, {}); 
    console.log(group);