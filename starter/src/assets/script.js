// Create 3 or more product objects using object literal notation

let prodOne = {
  name: "cherry",
  price: 3,
  quantity: 0,
  productId: 10,
  image: "images/cherry.jpg",
};
let prodTwo = {
  name: "orange",
  price: 5,
  quantity: 0,
  productId: 20,
  image: "images/orange.jpg",
};
let prodThree = {
  name: "strawberry",
  price: 10,
  quantity: 0,
  productId: 30,
  image: "images/strawberry.jpg",
};

//Create an array named products which you will use to add all of your product object
let products = [prodOne, prodTwo, prodThree];

/* Declare an empty array named cart to hold the items in the cart */

let cart = [];

//Create a function named addProductToCart that takes in the product productId as an argument
function addProductToCart(productId) {
  let prod = getProductId(productId);
  if (prod) {
    prod.quantity += 1;
    if (!cart.includes(prod)) {
      cart.push(prod);
    }
  }
}

//Create a function named increaseQuantity that takes in the productId as an argument
function increaseQuantity(productId) {
  let prod = getProductId(productId);
  if (prod) {
    prod.quantity += 1;
  }
}

//Create a function named decreaseQuantity that takes in the productId as an argument
function decreaseQuantity(productId) {
  let prod = getProductId(productId);
  if (prod) {
    prod.quantity--;
    if (prod.quantity === 0) {
      removeProductFromCart(productId);
    }
  }
}

// Create a function named removeProductFromCart that takes in the productId as an argument
function removeProductFromCart(productId) {
  let index = cart.findIndex(item => item.productId === productId);
  if (index !== -1) {
    cart[index].quantity = 0;
    cart.splice(index, 1);
  }
}

//find a product by it's productId
function getProductId(productId) {
  return products.find((product) => product.productId === productId) || null;
}

// Create a function named cartTotal that has no parameters
function cartTotal() {
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCost += cart[i].quantity * cart[i].price;
  }
  return totalCost;
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart = [];
}

// Create a function named pay that takes in an amount as an argument
let total = 0;

function pay(amount) {
  total += amount;
  let remainBalance = total - cartTotal();
  return remainBalance;
}

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};
