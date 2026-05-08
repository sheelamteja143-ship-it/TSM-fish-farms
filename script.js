// ===============================
// TSM Fish Farms - JavaScript
// ===============================

// Default Fish Data

let fishes = [

{
name: "Flowerhorn",
price: "₹2500",
size: "5 Inches",
image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
desc: "Premium Flowerhorn aquarium fish"
},

{
name: "Betta Fish",
price: "₹500",
size: "2 Inches",
image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?q=80&w=1200&auto=format&fit=crop",
desc: "Beautiful colorful Betta fish"
},

{
name: "Gold Fish",
price: "₹300",
size: "3 Inches",
image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
desc: "Healthy premium gold fish"
}

];

// ===============================
// LOAD SAVED DATA
// ===============================

if(localStorage.getItem("fishes")){

fishes = JSON.parse(localStorage.getItem("fishes"));

}

// ===============================
// DISPLAY FISHES
// ===============================

function displayFish(){

const container =
document.getElementById("fish-container");

if(!container) return;

container.innerHTML = "";

fishes.forEach((fish,index)=>{

container.innerHTML += `

<div class="fish-card">

<img src="${fish.image}" alt="${fish.name}">

<div class="fish-card-content">

<h3>${fish.name}</h3>

<p>${fish.desc}</p>

<p class="fish-size">
Size: ${fish.size}
</p>

<p class="fish-price">
${fish.price}
</p>

<button class="buy-btn">
Buy Now
</button>

</div>

</div>

`;

});

}

// RUN DISPLAY FUNCTION

displayFish();

// ===============================
// ADD NEW FISH
// ===============================

const addFishForm =
document.getElementById("addFishForm");

if(addFishForm){

addFishForm.addEventListener("submit",

function(e){

e.preventDefault();

// GET VALUES

const fishName =
document.getElementById("fishName").value;

const fishPrice =
document.getElementById("fishPrice").value;

const fishSize =
document.getElementById("fishSize").value;

const fishDesc =
document.getElementById("fishDesc").value;

// IMAGE URL

const fishImage =
"https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=1200&auto=format&fit=crop";

// NEW OBJECT

const newFish = {

name: fishName,
price: fishPrice,
size: fishSize,
image: fishImage,
desc: fishDesc

};

// PUSH DATA

fishes.push(newFish);

// SAVE DATA

localStorage.setItem(
"fishes",
JSON.stringify(fishes)
);

// SUCCESS MESSAGE

alert("Fish Added Successfully!");

// RESET FORM

this.reset();

});

}

// ===============================
// MOBILE MENU
// ===============================

const hamburger =
document.querySelector(".hamburger");

const navMenu =
document.querySelector(".nav-menu");

if(hamburger){

hamburger.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});

}

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click",
function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior: "smooth"

});

});

});

// ===============================
// SIMPLE ANIMATION
// ===============================

window.addEventListener("scroll",()=>{

const cards =
document.querySelectorAll(".fish-card");

cards.forEach(card=>{

const cardTop =
card.getBoundingClientRect().top;

if(cardTop < window.innerHeight - 50){

card.style.opacity = "1";
card.style.transform = "translateY(0px)";

}

});

});
