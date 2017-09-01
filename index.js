var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor( Math.random() * 101)
  var v = {[`${item}`]: parseInt(`${price}`, 10)}
  cart.push(v)
  console.log(`${item} has been added to your cart.`)
  return cart;
}

 // viewCart should loop over every item in your cart, printing out the contents as one long, coherent statement in this format: In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.

function viewCart() {

  const cartlength = cart.length

  if(!cartlength) {
    return console.log('Your shopping cart is empty.');
  }

  let stuff = [];

  for (let i = 0; i < cartlength; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    stuff.push(`${item} at \$${price}`);
  }

  switch(stuff.length) {
      case 1:
        break;
      case 2:
        stuff = stuff.join(" and ");
        break;
      default:
        stuff[cartlength-1] = "and ".concat(stuff[cartlength-1]);
        stuff = stuff.join(", ");
  }

  console.log(`In your cart, you have ${stuff}.`)
}


function total() {

  var ans = 0
  for(let i = 0; i < cart.length; i++){
    var v = Object.values(cart)[i]
    ans = ans + v
  }
  return ans
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
