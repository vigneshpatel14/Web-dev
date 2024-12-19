class person{
    constructor(name , secret)
    {
        this.name = name
        this._secret = secret
    }

    introduce()
    {
        console.log(`Hi this is ${this.name}`);    
    }

    get getsecret(){
        return this._secret;
    }

    set setsecret(newe)
    {
        this._secret = newe;
    }
}

const mithun = new person('pip' , 'hell')
mithun.introduce()

console.log(mithun.getsecret);


class student extends person
{
    constructor(name,age)
    {
        super(name);
        this.age = age
    }

    showage()
    {
        console.log(this.age);
    }

    static test()
    {
        console.log("This is static");
        
    }
}


const na = new student('pop' , 21)
na.showage()
na.introduce()
console.log(na._secret);
student.test()