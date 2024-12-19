// const str = 'pip pop pip'
// const pattern = new RegExp('pip');

// const res = pattern.test(str)
// console.log(res);


//Methods

const str = 'Hello im under the water pip pop piip'

const pattern = /^[A-Z]/
const res = pattern.test(str)
console.log(res);



//Email Validator
const s = 'pip@domain.com'

const pat = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]+$/

const r = pat.test(s)
console.log(r);



//String Methods


const ss = new String('PiP')
console.log(typeof name);

console.log(ss.length);

console.log(ss.slice(1 , 2));

console.log(ss.substring(0 , 2));

console.log(ss.replace('i' , 'o'));

console.log(ss.replaceAll('P' , 'A'));

console.log(ss);

console.log(ss.startsWith('P'));

console.log(ss.endsWith('P'));

console.log(ss.toUpperCase());

console.log(ss.toLowerCase());

console.log(ss.concat('HHH'));

console.log(ss.split('i'));

console.log(ss.indexOf('i'));


const sss = '   hfgh   yu   '
console.log(sss.trim());