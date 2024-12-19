const person = {
    name : 'pip',
    greet : function(greeting){
        console.log(`Hello ${greeting} , How are you ${this.name}`);
    }
}

person.greet("good mrng");

const anotherperson = {
    name:'pop' //Ante eh name ah this.name ki eltadi
}

person.greet.call(anotherperson , 'Good mrng')

const arguments = ['Good morning' , 'Good evng']
person.greet.apply(anotherperson , arguments)


//Bind

const newfun = person.greet.bind(anotherperson)
newfun('Good Evening')