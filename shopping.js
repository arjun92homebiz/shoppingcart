"use strict";

let shoppingCart = [];

let itemList = [
    {Name: "Purina", Price: 7},
    {Name: "Blue Wilderness", Price: 16},
    {Name: "Sheba", Price: 12},
    {Name: "Hill's Science Diet", Price: 10},
    {Name: "Acana", Price: 11},
    {Name: "Beyond", Price: 13}, ];

function addItem(itemName, itemPrice) {
    shoppingCart = [...shoppingCart, {name: itemName, price: itemPrice}];
    console.log(`You have added ${itemName} which cost ${itemPrice} to your shoping cart`)
};

function removeItem(itemName) {
    let index = shoppingCart.findIndex(element => element.name ===itemName);
    shoppingCart = [...shoppingCart.slice(0, index), ...shoppingCart.slice(index + 1)]
    console.log(`You have removed ${itemName} from your shopping cart`)
};

function editItem(itemName, itemPrice) {
    let index = shoppingCart.findIndex(element => element.name === itemName);
    shoppingCart = [...shoppingCart.slice(0, index), {name: newItem, price: shoppingCart[index].price}, ...shoppingCart.slice(index + 1)]
    console.log(`You have changed ${oldItem} to ${newItem}`)
};

function printTotal() {
    let total = 0;
    for (let cartTotal of shoppingCart) {
    total += (cartTotal.price) + (cartTotal.price * 6/100);
};
console.log(`You total price is ${total}`);
};

addItem("Blue Wilderness", 16);
addItem("Acana", 11);
addItem("Beyond", 13);
addItem("Sheba", 12);
addItem("Hill's Science Diet", 10);