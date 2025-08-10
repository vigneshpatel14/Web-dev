import Card from "../card/Card";

function Info({ActiveTab , SearchQuery}){

const data = {
        Pizzas: {
            title: "Veg Momo Delight Pizza",
            description:
            "Indulge in our special Veg Momo Delight Pizza with a crispy crust topped with spicy Schezwan sauce, veggies, and gooey mozzarella.",
            products: [
            {
                img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/momo-mia-veg.4e51f4733bea47a514c107c9fd2341e3.1.jpg?width=251",
                title: "Momo Veg Supreme",
                description:
                "A fusion of juicy Veg Momos, capsicum, onions, sweet corn, and melted mozzarella cheese, topped with spicy Schezwan sauce.",
            },
            {
                img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/momo-mia-veg.4e51f4733bea47a514c107c9fd2341e3.1.jpg?width=251",
                title: "Momo Fusion Veg",
                description:
                "A tempting Veg Momos pizza with spicy Schezwan sauce, crispy onions, capsicum, and sweet corn, blended with rich mozzarella.",
            },
            {
                img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/momo-mia-veg.4e51f4733bea47a514c107c9fd2341e3.1.jpg?width=251",
                title: "Spicy Momo Veg Pizza",
                description:
                "Satisfy your cravings with a perfect combination of spicy Veg Momos, capsicum, onions, and mozzarella cheese baked to perfection.",
            },
            {
                img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/momo-mia-veg.4e51f4733bea47a514c107c9fd2341e3.1.jpg?width=251",
                title: "Veg Momo Feast",
                description:
                "Experience a mouth-watering pizza loaded with Veg Momos, spicy Schezwan sauce, onions, sweet corn, and a rich layer of mozzarella.",
            },
            {
                img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/momo-mia-veg.4e51f4733bea47a514c107c9fd2341e3.1.jpg?width=251",
                title: "Momo Veg Supreme",
                description:
                "A fusion of juicy Veg Momos, capsicum, onions, sweet corn, and melted mozzarella cheese, topped with spicy Schezwan sauce.",
            },
            {
                img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/momo-mia-veg.4e51f4733bea47a514c107c9fd2341e3.1.jpg?width=251",
                title: "Momo Fusion Veg",
                description:
                "A tempting Veg Momos pizza with spicy Schezwan sauce, crispy onions, capsicum, and sweet corn, blended with rich mozzarella.",
            },
            {
                img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/momo-mia-veg.4e51f4733bea47a514c107c9fd2341e3.1.jpg?width=251",
                title: "Spicy Momo Veg Pizza",
                description:
                "Satisfy your cravings with a perfect combination of spicy Veg Momos, capsicum, onions, and mozzarella cheese baked to perfection.",
            },
            {
                img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/momo-mia-veg.4e51f4733bea47a514c107c9fd2341e3.1.jpg?width=251",
                title: "Veg Momo Feast",
                description:
                "Experience a mouth-watering pizza loaded with Veg Momos, spicy Schezwan sauce, onions, sweet corn, and a rich layer of mozzarella.",
            },
           ],
        },
        Sides: {
            title: "Crispy Veg Sides",
            description:
            "Enhance your pizza experience with our crunchy, savory, and flavorful side options.",
            products: [
            {
                img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/loaded-veggie-bbq-single.f947c28d2a08a955238dd425a783b01c.1.jpg?width=251",
                title: "Crispy Veg BBQ",
                description:
                "Enjoy a crunchy veggie BBQ delight with onion, green capsicum, red bell pepper, and a generous drizzle of signature barbecue sauce.",
            },
            ],
        },
        Desserts: {
            title: "Sweet Treats",
            description:
            "Indulge in our heavenly range of delicious desserts that are perfect to end your meal.",
            products: [
            {
                img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/brow-wow-nie-single.93a614f61b39d976b4ef5d1265676500.1.jpg?width=251",
                title: "Choco Brownie Bliss",
                description:
                "Satisfy your chocolate cravings with a moist, rich, and indulgent choco brownie.",
            },
            ],
        },
        Drinks: {
            title: "Chilled Refreshments",
            description: "Beat the heat with our refreshing range of chilled drinks.",
            products: [
            {
                img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/pepsi-600ml.f762b89387ea5612f4d109778efc280e.1.jpg?width=251",
                title: "Pepsi Refreshment - 475ml",
                description: "Cool off with a refreshing Pepsi, packed with caffeine and flavor.",
            },
            ],
        },
        Deals: {
            title: "Special Meal Deals",
            description: "Explore amazing deals for an unbeatable pizza experience.",
            products: [
            {
                img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/momo-mia-meal-for-1-veg.bfb5f5e59e080933cfaf8f1adcc3b194.1.jpg?width=251",
                title: "Veg Momo Mia Meal Combo",
                description:
                "Savor a combo of Veg Momo Mia! pizza and a refreshing Pepsi for a delightful meal.",
            },
            ],
        },
    };
          

    const filproducts = data[ActiveTab].products.filter((product) =>
        product.title.toLowerCase().includes(SearchQuery.toLowerCase())
      );
    return(
        <div>
            <h1 className="text-center text-4xl my-5">Our {data[`${ActiveTab}`].title}</h1>
            <p className="text-center text-md">{data[`${ActiveTab}`].description}</p>
            <div className="my-5 flex flex-wrap gap-5">
                {filproducts.map((dat , index) =>(
                    <Card key={index} image={dat.img} title={dat.title} description={dat.description}/>
                ))}
            </div>
        </div>
    )
}


export default Info;