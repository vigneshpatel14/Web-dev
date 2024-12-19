let userDB = [
    { id :1 , email:'vignesh@gmail.com' , password:'hello123' , role : 'admin' , username : 'vignesh'},
    { id :2 , email:'Aimerz@gmail.com' , password:'dfsa23' , role : 'user' , username : 'Mithun'}
]

let productsDB = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000, stock: 10 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 500, stock: 20 },
    { id: 3, name: 'Book', category: 'Books', price: 20, stock: 100 }
]


let ordersDB = []
let cartDB = []

//Lets make user authentaction
function addemail(email , password , name)
{
    const user = userDB.filter(kk => kk.email === email)
    if(user.length > 0) console.log(`${email} Kya bhai Used EMAIL hai`);
    else{
        let newid = userDB.length + 1;
        const newemail = {id:newid , email:email , password:password , username:name , role :'user'}
        userDB.push(newemail);
        console.log("Email added sucessfully");
    }
}

function loginuser(email , password)
{
    const user = userDB.filter(kk => kk.email === email)[0];
    if(!user) console.log(`Bhai Email Dekh lo wrong hai ${email}`);
    else{
        if(user.password === password) return user;

        else console.log("Password Dekh lo");
    }
}


function listproducts()
{
    return productsDB;
}

function searchforprod(pname)
{
    const p = productsDB.filter(pp => pp.name === pname)[0];
    if(!p){
        console.log("Product not found");
        return;
    }
    console.log(`${p.stock} are left`);
    return p;
}

function addtocart(userid , productid)
{
    let cart = cartDB.filter(cc => cc.userid === userid)[0];
    if(!cart){
        cart = {userid:userid , products : []}
        cartDB.push(cart)
    }

    //Now find product
    const prod = productsDB.filter(p => p.id === productid)[0];
    if(!prod){
        console.log("Invalid product id");
        return;
    }
    if(prod.stock <= 0) console.log("No items left");
    else{
        cart.products.push({productid:productid , name : prod.name})
        prod.stock--;
        console.log(`Item added sucessfully ${prod.name}`);
        return;
    }
}


function removefromcart(userid , productid)
{
    let cart = cartDB.filter(cc => cc.userid === userid)[0];
    if(!cart){
        console.log("Cart not found");
        return;
    }

    cart.products = cart.products.filter(p => productid !== p.productid)
    //It gives whole array except that and adds it into that specific object then in main cart the changes happened
}

function viewcart(userid)
{
    let cart = cartDB.filter(cc => cc.userid === userid)
    console.log(cart);
    return;
}


function order(userid)
{
    let cart = cartDB.filter(cc => cc.userid === userid)[0];
    if(!cart || cart.length === 0){
        console.log("The cart is empty please check karo");
        return;
    }

    //Now we need to push into orders data
    //Lets create one object and push into that array
    const ord = {
        orderid : ordersDB.length + 1,
        userid,products:cart.products,
    }

    ordersDB.push(ord)
    //After ordering we can clear our cart or no need optional
    cart.products = [];
    console.log(`Ordered sucessfully ${cart.products}`);
    return;
}

function vieworders(userid)
{
    const vao = ordersDB.filter(o => o.userid === userid)
    console.log(vao);
    return;
}

//Now this are only for admin
function displayallpersons(){
    console.log(userDB);
}

function productsadddelupd(action ,  productid , name , category , price , stock)
{
    if(action === 'add')
    {
        const newprod = {id:productsDB.length + 1 , name:name , category:category , price:price , stock:stock};
        productsDB.push(newprod);
        console.log("Product added sucessfully");
        return;
    }
    else if(action === 'update')
    {
        //First we need to find it 
        const p = productsDB.filter(pp => pp.id === productid)[0];
        if(!p) console.log("Product not found");
        else{
            p.name = name;
            p.category = category;
            p.price = price;
            p.stock = stock;
            console.log("Updated Sucessfully");
            return;
        }
    }
    else{
        //delete
        let i;
        for(i = 0 ; i < productsDB.length ; i++)
        {
            if(productid === productsDB[i].id)
                break
        }
        productsDB.splice(i , 1);
        console.log("Sucessfully Deleted");
    }
}

//-----------------------------------------------------------------------------------------------------------------------------------------//



//Inputs
console.log("____________________________Adding MAil_________________________________________________")
addemail('vishwa@gmail.com', 'vishwa123', 'vishwa');
//Duplicated email

console.log("____________________________________________________________________________________________")
addemail('vignesh@gmail.com', 'ojnfsk', 'hdk');



//Here user will be logined sucessfully

console.log("____________________________LOGGING IN_________________________________________________")
loginuser('vignesh@gmail.com', 'hello123');

//This is using wrong pasword

console.log("_____________________________________________________________________________")
loginuser('vignesh@gmail.com', 'wrongpassword');
//not existing email

console.log("_____________________________________________________________________________")
loginuser('rishabpant@gmail.com', 'racer');

//To display all the products

console.log("____________________________ALL PRODUCTS_________________________________________________\n\n")
console.log(listproducts());


//To search for product

console.log("____________________________SEARCJING FOR LAPTOP_________________________________________________")
searchforprod('Laptop');

console.log("____________________________SEARCHING FOR BOTTLE_________________________________________________")
searchforprod('Bottle');
//Not existing product


console.log("____________________________ADDING ITEMS_________________________________________________")
addtocart(2, 1);
addtocart(2, 4);
addtocart(2, 2);

console.log("------------------------------This is user 2 cart ----------------------------------------------------------------------------");

viewcart(2);

//This is user 2's Cart
console.log("------------------------------------------------------------------------------------------------");

removefromcart(2, 1);
console.log("This is user 2 cart after removing---------------------------------------------------------------");

viewcart(2);

//This is user 2's Cart
console.log("------------------------------------------------------------------------------------------------");

order(2);

console.log("USer 2 has been ordered ------------------------------------------------------------------------");

vieworders(2);


console.log("________________________________________________________________________________________________");


console.log("Displaying all the person");

displayallpersons();

console.log("______________________________Add update delete products____________________________________________");

productsadddelupd('add', null, 'Tablet', 'Electronics', 300, 30);

productsadddelupd('update', 1, 'Laptop Pro', 'Electronics', 1200, 10);


productsadddelupd('delete', 2, null, null, null, null);


console.log("_______________________________________________________All done__________________________________________________________________________")