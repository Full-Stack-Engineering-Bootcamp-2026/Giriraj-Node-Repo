//Part1
const original={
    name:"Giriraj",
    age:21,
    sport:"Cricket"
};
console.log(original);
const copy={...original};
console.log("Copy object before",copy);
/*The value of sport changed from Cricket to Hockey as we changed it using . operator*/
copy.sport="Hockey";
console.log("Copy object after",copy);
//Part2
const arr1=[1,2,3];
const arr2=[4,5,6];
const mergerarray=[...arr1,...arr2];
const star1={
    fname:"Narendra",
    age:39,
    nationality:"Indian"
};
const star2={
    lname:"Modi",
    homecity:"Vadnagar"
};

const mergedstars={...star1,...star2};
console.log(mergedstars);
const nums=[1,2,3,4,5,6,7,8,9];


function avg(...nums){
    var sum=0;
    for(let v of nums)
    {
      sum=sum+v;
    }
    let avg=(sum/nums.length);
    return nums.length==0?0:sum/nums.length;
}


//Part3
console.log(avg(...nums));
const {fname,age,nationality}=star1;
console.log(fname);
console.log(age);
console.log(nationality);

const[first,,third]=nums;
console.log("First Element:",first);
console.log("Second Element:",third);
//Part4
function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve
        },ms);
    });
}
  
delay(1000).then(()=>{
    console.log("Done waiting!");
});


