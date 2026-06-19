let fishes = JSON.parse(localStorage.getItem("fishes")) || [];

const addFishForm =
document.getElementById("addFishForm");

if(addFishForm){

addFishForm.addEventListener("submit",function(e){

e.preventDefault();

const file =
document.getElementById("fishImage").files[0];

if(!file){

alert("Please select image");

return;

}

const reader = new FileReader();

reader.onload = function(){

const newFish = {

name:
document.getElementById("fishName").value,

price:
document.getElementById("fishPrice").value,

size:
document.getElementById("fishSize").value,

desc:
document.getElementById("fishDesc").value,

image:
reader.result

};

fishes.push(newFish);

localStorage.setItem(
"fishes",
JSON.stringify(fishes)
);

alert("Fish Added Successfully");

addFishForm.reset();

};

reader.readAsDataURL(file);

});

}
