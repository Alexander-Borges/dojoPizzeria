//Practice making JS objects
//Practice using Math.random()

// Create a function called pizzaOven. We should feel free to customize what information we keep track of for our pizza, but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

let p1 = pizzaOven("deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"])
console.log(p1)
console.log("||||||||||||||||||||||||||||||||||||||||||")

let p2 = pizzaOven("hand-tossed", "marinara", ["mozzarella", "feta"], ["mushrooms","olives","onions"])
console.log(p2)
console.log("||||||||||||||||||||||||||||||||||||||||||")

let p3 = pizzaOven("garlic", "alfredo", ["mozzarella", "parmesan"], ["chicken","basil","peppers"])
console.log(p3)
console.log("||||||||||||||||||||||||||||||||||||||||||")

let p4 = pizzaOven("cheese-stuffed", "vodka", ["mozzarella", "jack"], ["ground beef","chili","speck"])
console.log(p4)

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}