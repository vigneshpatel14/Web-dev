const person = ['a' , 1 , 'dgfs' , 34]

for(let i of person)
{
    console.log(i);
}

console.log(person.length);
console.log(person.push('jds'));
console.log(person.pop());
console.log(person);
person.unshift('Hello')

console.log(person);

person.splice(0,2)
console.log(person);

person.reverse()
console.log(person);


person.join('');
console.log(person);

console.log(person.includes(34));
console.log(person.indexOf(34));

person.sort()
console.log(person);


person.map((data , index) => (console.log(`${index} : ${data}`)))

person.filter((data , index) => data < 10)

const res = person.reduce((acc , data) => acc + data)

console.log(res);


person.forEach(element => {
    console.log(element);
});