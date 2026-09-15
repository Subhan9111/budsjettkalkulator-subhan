const form =document.getElementById("budget-form")
const list =document.getElementById("budget-list")

let totalincome=0;
let totalexpenses=0;

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("knappen fungerer!")
});

const description= document.getElementById("description").value;
const amount= document.getElementById("amount").value;
const type= document.getElementById("type").value;
const category= document.getElementById("category").value;

console.log(description);
console.log(amount);
console.log(type);
console.log(category);

