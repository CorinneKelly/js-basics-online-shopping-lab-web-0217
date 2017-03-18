var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function addToCart(item) {
	const price = Math.floor(Math.random() * 100)
	cart.push({[item]: price})
	console.log(`${item} has been added to your cart.`)
	return cart
}

function getCart() {
	return cart
}

function viewCart() {
	if (cart.length === 0) {
		console.log("Your shopping cart is empty.")
	} else {

		var stringArray = []

		for (var item in cart) {
			stringArray.push(`${cart[item]} at \$${item}`)
		}
		console.log(`In your cart, you have ${stringArray.join(", ")}.`)
	}
}

function removeFromCart(item) {
	for (var i = 0; i < cart.length; i++) {
		if (cart[i] === item) {
			cart.splice(i, 1)
		}
	}
}
