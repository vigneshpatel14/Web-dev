function addTwonum(a,b){
    return a+b;
}
const value = addTwonum(1,2)
console.log(value);


const addTwonum2 = function(a,b){return a+b}
const value2 = addTwonum2(1,3);
console.log(value2)


const addTwonum3 = (a,b) => { return a+b }
const value3 = addTwonum3(5,6)
console.log(value3)




const person = {
    name : 'Ajay',

    sayName: function(){
        console.log(this.name);
    }
}


const person1 = {
    name:'Rahul',
    sayName: function() {
        console.log(this.name);
    }
}

person.sayName()
person1.sayName()



const createCounter = () => {
    let count = 0;
    return () => count++;
  };
  
  const counter1 = createCounter();
  const counter2 = createCounter();
  console.log(counter1() , counter2() , counter1())
  

  const counter = function(){
    let count = 0;
    return function() { return count++; }
  }

  const counter3 = counter();
  const counter4 = counter();
  console.log(counter3() , counter3() , counter4())



  const sayHello = (name) =>{
    console.log(`Hello ${name}`);
  }

  sayHello('Vignesh')

  console.log(typeof sayHello);
  console.log(typeof value2);
  