import products from './product.js';
import {
  addToCart,
  clearCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  getTotalAmount,
  getCartItems
} from './cart.js';


// Function to display the product list
function displayProductList() {
  const productListElement = document.getElementById('product-list');
  productListElement.innerHTML = '';

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('border', 'rounded', 'p-4');

    const imageElement = document.createElement('img');
    imageElement.src = `images/${product.image}`;
    imageElement.classList.add('w-24', 'h-auto');

    const nameElement = document.createElement('h3');
    nameElement.textContent = product.name;
   

    const priceElement = document.createElement('p');
    priceElement.textContent = `৳${product.price}`;

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.classList.add('px-4', 'py-2', 'bg-blue-500', 'text-white', 'rounded');

    addToCartButton.addEventListener('click', () => {
      const quantity = parseInt(prompt('Enter quantity:', '1'));
      if (quantity > 0) {
        addToCart(product, quantity);
        displayCartItems();
      }
    });

    productElement.appendChild(imageElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);
    productElement.appendChild(addToCartButton);

    productListElement.appendChild(productElement);
  });
}









// Function to display the cart items
function displayCartItems() {


  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  const cartItems = getCartItems();

  cartItems.forEach(item => {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('border', 'rounded', 'p-4', 'mb-2');

    const nameElement = document.createElement('h3');
    nameElement.textContent = item.product.name;

    const quantityElement = document.createElement('p');
    quantityElement.textContent = `Quantity: ${item.quantity}`;

    const priceElement = document.createElement('p');
    priceElement.textContent = `Price: ৳${item.product.price}`;

    const totalElement = document.createElement('p');
    totalElement.textContent = `Total: ৳${item.product.price * item.quantity}`;

    const increaseButton = document.createElement('button');
    increaseButton.innerHTML = `<i class="fa-solid fa-plus" ></i> &nbsp;`;

    increaseButton.addEventListener('click', () => {
      increaseQuantity(item.product.id);
      displayCartItems();
    });

    const decreaseButton = document.createElement('button');
    decreaseButton.innerHTML = `&nbsp; <i class="fa-solid fa-minus"></i>`;
    decreaseButton.addEventListener('click', () => {
      decreaseQuantity(item.product.id);
      displayCartItems();
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('ml-2', 'px-2', 'py-1', 'bg-red-500', 'text-white', 'rounded');
    removeButton.addEventListener('click', () => {
      removeItem(item.product.id);
      displayCartItems();
    });

    cartItemElement.appendChild(nameElement);
    cartItemElement.appendChild(quantityElement);
    cartItemElement.appendChild(priceElement);
    cartItemElement.appendChild(totalElement);
    cartItemElement.appendChild(increaseButton);
    cartItemElement.appendChild(decreaseButton);
    cartItemElement.appendChild(removeButton);

    cartItemsElement.appendChild(cartItemElement);
  });

  const totalAmountElement = document.createElement('h3');
  totalAmountElement.textContent = `Total Amount: ৳${getTotalAmount()}`;

  cartItemsElement.appendChild(totalAmountElement);


  
}

document.getElementById('clear-cart').addEventListener('click', () => {
  clearCart();
  displayCartItems();
});

displayProductList();
displayCartItems();
