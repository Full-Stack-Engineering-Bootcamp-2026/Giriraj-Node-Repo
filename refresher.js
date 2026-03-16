// 1. Variables & Template Literals

const name="Giriraj Thanvi";
const age=21;
const hobby="Cricket";
console.log(`Hi, I'm ${name}, I'm ${age} years old and I love ${hobby}.`);

// 2. Arrow Functions
const square=(n)=>n*n;

const isEven=(n)=>{
  if(n%2==0)
    return true;
  return false;
}
// 3. Arrays

console.log("Square of 5:",square(5));
console.log("Check of 5 for even:",isEven(5));
const fruits=["apple","mango","guava","grapes","watermelon"];
const newarray1=fruits.map((a)=>a.toUpperCase());
const newarray2=fruits.filter((a)=>a.length>5);
console.log(newarray1);
console.log(newarray2);

// 4. Objects
const student={name:"Giriraj Thanvi",
    course:"NodeJs",
    year:2026,
    greet:()=>
    {
        console.log(`Hello from student`);
    }
}

console.log("Student Details Name:"+student.name+" course:"+student.course+" year:"+student.year);
// 5.Bonus (Optional)
// Use array destructuring to extract the first two fruits into named variables
// Add a method to the student object using an arrow function
const [fruit1,fruit2]=fruits;
console.log(fruit1);
console.log(fruit2);
student.greet();