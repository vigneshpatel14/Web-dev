const arr = ['a','b','c','d'];

for(let i in arr)
{
    console.log(i);
    
}


const pip = {
    'a' : 1,
    'b' : 2
}

for(let i in pip)
{
    console.log(pip[i])
}

for(let i of arr)
{
    console.log(i);
}

// for(let i of pip)
// {
//     console.log(i);
// }