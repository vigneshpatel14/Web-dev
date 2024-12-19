const arr = [1,2,3,4,5]
console.log(...arr);


nums1 = [1 ,2 , 3]
nums2 = [4 , 5 ,6]
const combined = [...nums1 , ...nums2]

console.log(combined);
 //Rest

 function addnums(...nums)
 {
    let sum = 0;
    for(let i = 0 ; i < arguments.length ; i++)
    {
        sum += arguments[i];
    }
    return sum;
 }

 function addnumber()
 {
    let sum = 0;
    for(let i =0 ; i < arguments.length; i++)
    {
        sum += arguments[i];
    }
    return sum;
 }
 console.log(addnums(1,2,3,4,5));
 console.log(addnumber(1,2,3,4,5));
 
 //Destructing
 const nums = [1,2,3,4]
 let [a,b,c,d] = nums
 console.log(a,b,c,d);
 let [e,f,...g] = nums
 console.log(g);
 

 //On Object

 const obj = {
    name:'msdnf',
    place:'asd'
 }

 const{name , place , age = 10} = obj;
 console.log(name , place , age);