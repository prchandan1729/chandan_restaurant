import { data } from "./data.js";

const rightButton = document.querySelector('.js-right-arrow');
const leftButton = document.querySelector('.js-left-arrow');
const img = document.getElementById("menu-img");

let foodType = 'starters';
let imgCount = 1;

let overlayText = '';
let dataName ='';

function menuOverlayHTML(dataName) {
 overlayText = '';
 data.forEach((item) => {
  if(item.foodTypewithSlide === dataName) {
   overlayText = overlayText + `
   <div class="style-food-name">${item.name}</div>
   <div class="style-food-details">${item.description}</div>
   <br>
  `;
  }
  
 });
 document.querySelector('.js-overlay-text').innerHTML = overlayText;
}

document.querySelectorAll('.js-food').forEach((button)=> {
 button.addEventListener('click',()=> {

  foodType = button.dataset.mealType;
  imgCount = 1;
  img.src = `img/platter_background_image_${foodType}_${imgCount}.jpg`;
  
  dataName = `${foodType}_data_${imgCount}`;

  menuOverlayHTML(dataName);
 });
});


rightButton.addEventListener('click',()=> {
 imgCount +=1;
 if (imgCount === 4) {
  imgCount = 1
 }
 img.src = `img/platter_background_image_${foodType}_${imgCount}.jpg`;
 dataName = `${foodType}_data_${imgCount}`;
 menuOverlayHTML(dataName);
});

leftButton.addEventListener('click',()=> {
 imgCount -=1;
 if(imgCount === 0) {
  imgCount = 3
 }
 img.src = `img/platter_background_image_${foodType}_${imgCount}.jpg`;
 dataName = `${foodType}_data_${imgCount}`;
 menuOverlayHTML(dataName);
});
