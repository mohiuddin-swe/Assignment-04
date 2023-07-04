// Create an empty array to store cart items
let cartItems = [];

// Function to add products to the cart
export function addToCart(product, ...quantities) {
  // Loop through the quantities and add each product to the cart
  quantities.forEach(quantity => {
    const item = {
      product,
      quantity,
    };
    cartItems.push(item);
  });
}

// Function to remove all items from the cart
export function clearCart() {
  cartItems = [];
}

// Function to remove an item from the cart based on the product ID
export function removeItem(productId) {
  cartItems = cartItems.filter(item => item.product.id !== productId);
}

// Function to increase the quantity of an item in the cart based on the product ID
export function increaseQuantity(productId) {
  cartItems = cartItems.map(item => {
    if (item.product.id === productId) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
}

// Function to decrease the quantity of an item in the cart based on the product ID
export function decreaseQuantity(productId) {
  cartItems = cartItems.map(item => {
    if (item.product.id === productId && item.quantity > 1) {
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });
}

// Function to calculate the total amount of the cart
export function getTotalAmount() {
  let total = 0;
  cartItems.forEach(item => {
    total += item.product.price * item.quantity;
  });
  return total;
}

// Function to get the cart items
export function getCartItems() {
  return cartItems;
}
