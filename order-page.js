import { data } from "./data.js";

let productsHTML = ``;

attachAddToCartEventListeners();
document.querySelectorAll('.js-food-order').forEach((button)=> {
  button.addEventListener('click',()=> {

    productsHTML = ``;
    data.forEach((item) => {
      if([`${button.dataset.mealOrderType}_data_1`,`${button.dataset.mealOrderType}_data_2`,`${button.dataset.mealOrderType}_data_3`].includes(item.foodTypewithSlide)) {
       productsHTML = productsHTML + `<div class='item-container'>
      <div class='item-order'>${item.name}</div>
     
      <div class='order-img-container'>
        <img id="order-img" src="img/${item.image}.jpg" width="135" height="95">
      </div>
     
      <div class='item-price'>Rs. ${item.price}</div>
     
      <button class="add-to-cart-button js-add-cart" data-item-name="${item.name}">
        Add to Cart
      </button>
     
      </div>
      `
      }
      document.querySelector('.js-order-products').innerHTML = productsHTML;
      console.log(productsHTML);
     });

     attachAddToCartEventListeners();
     addSubtractCart();
     addAdditionCart();
  });
});

let cart = [];

let cartHTML=``;
function attachAddToCartEventListeners() {
  document.querySelectorAll('.js-add-cart').forEach((button) => {
    button.addEventListener('click',()=> {
  
    let productName = button.dataset.itemName;
    let matchingItem;
    cart.forEach((cartItem) => {
      if (productName === cartItem.name) {
      matchingItem = cartItem;
      }
    });
    
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
      name: productName,
      quantity: 1
      });
    }

    let matchingProduct;
  
    cartHTML =`<div class='style-header-order-grid'>
    <div>Item</div>
    <div>Quantity</div>
    <div>Price</div>
    </div>`;

    let total = 0;
    cart.forEach((item) => {
      data.forEach((foodItem) => {
        if (foodItem.name === item.name) {
          matchingProduct = foodItem;
        }
      });
      
      cartHTML += `
        <div class='style-order-grid'>
          <div>${item.name}</div>
          <div class='card-quantity-grid'>
            <button class="subtractButton js-subtractButton" data-item-name="${item.name}">-</button>
            <div>${item.quantity}</div>
            <button class="addButton js-addButton" data-item-name="${item.name}">+</button>
          </div>
          <div>${matchingProduct.price}</div>
        </div>
      `;

      total += Number(item.quantity)*Number(matchingProduct.price);
    });
    cartHTML += `
      <div class='style-total-order-grid'>
          <div>Total</div>
          <div></div>
          <div>${total}</div>
      </div>
    `
    document.querySelector('.js-cart-products').innerHTML = cartHTML;
    addSubtractCart();
    addAdditionCart();
    });
  });
    
}

/*
subtractButton in cart
*/

function addSubtractCart() {
  document.querySelectorAll('.js-subtractButton').forEach((button)=> {
    button.addEventListener('click',()=> {
  
      let itemName = button.dataset.itemName;
      let matchingItem = cart.find((item) => item.name === itemName);

      if (matchingItem) {
        matchingItem.quantity -= 1;
        if (matchingItem.quantity <= 0) {
          cart = cart.filter((item) => item.name !== itemName);
        }
      }

      updateCartHTML();

    });
  })
}

/*
addbutton in cart
*/

function addAdditionCart() {
  document.querySelectorAll('.js-addButton').forEach((button)=> {
    button.addEventListener('click',()=> {
  
      let itemName = button.dataset.itemName;
      let matchingItem = cart.find((item) => item.name === itemName);

      if (matchingItem) {
        matchingItem.quantity += 1;
      }

      updateCartHTML();

    });
  })
}

/*
Update cart html
*/

function updateCartHTML() {
  cartHTML = `<div class='style-header-order-grid'>
    <div>Item</div>
    <div>Quantity</div>
    <div>Price</div>
  </div>`;

  let total = 0;
  cart.forEach((item) => {
    let matchingProduct = data.find((foodItem) => foodItem.name === item.name);

    cartHTML += `
      <div class='style-order-grid'>
          <div>${item.name}</div>
          <div class='card-quantity-grid'>
            <button class="subtractButton js-subtractButton" data-item-name="${item.name}">-</button>
            <div>${item.quantity}</div>
            <button class="addButton js-addButton" data-item-name="${item.name}">+</button>
          </div>
          <div>${matchingProduct.price}</div>
      </div>
    `;

    total += Number(item.quantity)*Number(matchingProduct.price);
  });

  

  cartHTML += `
      <div class='style-total-order-grid'>
          <div>Total</div>
          <div></div>
          <div>${total}</div>
      </div>
  `
  document.querySelector('.js-cart-products').innerHTML = cartHTML;
  addSubtractCart();
  addAdditionCart();
}



