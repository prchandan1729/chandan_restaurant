import { orderDetails } from "./data.js";
const orderButton = document.getElementById('js-scroll-bttn');

class MyClass {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  getName() {
    return `Name: ${this.name}`;
  }
 
  getPhone() {
   return `Phone: ${this.phone}`;
 }
}

if(orderButton) {
  orderButton.addEventListener('click',() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth' // Optional: Add smooth scrolling effect
    });
  
  });
}

const submitBttn = document.querySelector('.js-submit-bttn');

if(submitBttn) {
  //console.log(orderDetails);
  submitBttn.addEventListener('click',() => {
    
    addOrder();
    //window.location.replace("reservation-page.html");
    window.location.href = 'reservation-page.html';
  });
}

function addOrder() {
  const myObject = new MyClass(document.querySelector('.js-name-input').value, document.querySelector('.js-phone-input').value);

  // Serialize the object to JSON string
  const jsonString = JSON.stringify(myObject);

  // Save the JSON string in a cookie
  document.cookie = `myObject=${jsonString}; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/`;
  /*
  orderDetails.push({
    name: document.querySelector('.js-name-input').value,
    phone: document.querySelector('.js-phone-input').value
  });
  */
}




