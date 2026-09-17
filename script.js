const form =document.getElementById("budget-form")
const list =document.getElementById("budget-list")

let totalIncome=0;
let totalExpenses=0;

form.addEventListener("submit", function(event) {
    event.preventDefault();


const description= document.getElementById("description").value;
const amount= document.getElementById("amount").value;
const type= document.getElementById("type").value;
const category= document.getElementById("category").value;


const item = document.createElement ("li");
if (type === "income") {
    item.textContent = description + " - " + category + " : + " + amount + "kr";
    item.style.color = "green"
} else{
        item.textContent = description + " - " + category + " : - " + amount + "kr"
        item.style.color = "red";
}
list.appendChild(item)

if (type=== "income") {
    totalIncome += Number (amount);
} else {
    totalExpenses += Number (amount);
}
 document.getElementById("total-income").textContent =
 totalIncome + "kr";

 document.getElementById("total-expenses").textContent =
 totalExpenses + "kr";

 const balance = totalIncome - totalExpenses

 document.getElementById("balance").textContent =
 balance + "kr";

 if(balance < 0) {
    document.getElementById("balance").style.color = "red"
 } else {
    document.getElementById("balance").style.color = "green"
 }

 form.reset ();
 });