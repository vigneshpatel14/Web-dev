const mp = new Map();
console.log(typeof mp);

mp.set('name' , 'pip')
mp.set('age' , 250)
mp.set('adult' , true)

console.log(mp);

console.log(mp.has('name'));

mp.delete('name')

console.log(mp.size);

console.log(mp.keys());
console.log(mp.values());
console.log(mp.entries());

mp.clear()