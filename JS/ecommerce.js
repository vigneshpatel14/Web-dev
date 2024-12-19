const productsDB = [
    {
        id: 1,
        name: 'pis',
        category: 'Electronic',
        subcategory: 'Laptops',
        price: 8000
    },
    {
        id: 2,
        name: 'second',
        category: 'Electronic',
        subcategory: 'mobile',
        price: 8010
    },
    {
        id: 3,
        name: 'third',
        category: 'Books',
        subcategory: 'ff',
        price: 2000
    }
];

function listprod() {
    // Loop through the products and log each one
    for (let product of productsDB) {
        console.log(product);
    }
}

listprod();  // Call the function to list the products

const mycart = [];

function addtocart(id) {
    let product;
    // Loop through the productsDB to find the product by id
    for (let product of productsDB) {
        if (product.id === id) {
            mycart.push(product);  // Add the product to the cart
            console.log(`Product with id ${id} added to the cart.`);
            break;  // Exit the loop once the product is found and added
        }
    }
}

function remove(id) {
    for (let i = 0; i < mycart.length; i++) {
        if (mycart[i].id === id) {  // Corrected the index to `i`
            mycart.splice(i, 1);  // Remove the product from the cart
            console.log(`Product with id ${id} removed from the cart.`);
            break;  // Exit the loop once the product is removed
        }
    }
}

// Function to calculate the total price of all items in the cart
function calculateTotal() {
    let total = 0;
    // Sum up the price of each product in the cart
    for (let product of mycart) {
        total += product.price;
    }
    return total;
}

// Example usage:
addtocart(1);  // Add product with id 1 to the cart
addtocart(2);  // Add product with id 2 to the cart
console.log("Cart before removing:");
console.log(mycart);

remove(1);  // Remove product with id 1 from the cart
console.log("Cart after removing:");
console.log(mycart);

// Calculate the total price of the cart
const total = calculateTotal();
console.log("Total price of the cart:", total);
