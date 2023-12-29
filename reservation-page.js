import { orderDetails } from "./data.js";

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

// Retrieve the cookie value
const cookieValue = document.cookie
 .split('; ')
 .find((row) => row.startsWith('myObject='));

// Deserialize the JSON string to an object
const retrievedObject = JSON.parse(cookieValue.split('=')[1]);

// Create an instance of the class from the retrieved object
const restoredObject = new MyClass(
 retrievedObject.name,
 retrievedObject.phone
);

document.querySelector(".js-name").innerHTML = restoredObject.getName();
document.querySelector(".js-phone").innerHTML = restoredObject.getPhone();

