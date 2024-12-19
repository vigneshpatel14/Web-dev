const s = new Set();
s.add(1)
s.add(3)
s.add(2)
s.add(234329)
s.add(2)


console.log(s);

const iter = s.values()
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)

console.log(s.has(3));
s.delete(3)
console.log(s);

console.log(s.size);

s.forEach((data) => {
    console.log(data);
})

s.clear();
console.log(s.size);