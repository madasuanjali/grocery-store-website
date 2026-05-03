// script.js

let products = [
    {name:"Apple", price:50},
    {name:"Banana", price:30},
    {name:"Milk", price:40},
    {name:"Rice", price:60},
    {name:"Tomato", price:25},
    {name:"Potato", price:20},
    {name:"Eggs", price:70},
    {name:"Bread", price:35}
];

let total = 0;

function showProducts(items){
    let data = "";

    items.forEach(function(item){
        data += `
        <div class="box">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button onclick="addCart('${item.name}', ${item.price})">
                Add
            </button>
        </div>
        `;
    });

    document.getElementById("products").innerHTML = data;
}

showProducts(products);

function addCart(name, price){
    let li = document.createElement("li");
    li.textContent = name + " - ₹" + price;

    document.getElementById("cart").appendChild(li);

    total = total + price;
    document.getElementById("total").textContent = total;
}

document.getElementById("search").addEventListener("keyup", function(){

    let value = this.value.toLowerCase();

    let filtered = products.filter(function(item){
        return item.name.toLowerCase().includes(value);
    });

    showProducts(filtered);
});
function addCart(name, price){

    let li = document.createElement("li");

    li.innerHTML = `
        ${name} - ₹${price}
        <button onclick="removeItem(this, ${price})">X</button>
    `;

    document.getElementById("cart").appendChild(li);

    total = total + price;
    document.getElementById("total").textContent = total;
    count++;
document.getElementById("count").textContent = count;
}

function removeItem(button, price){
    button.parentElement.remove();

    total = total - price;
    document.getElementById("total").textContent = total;
    count--;
document.getElementById("count").textContent = count;
}
function clearCart(){
    document.getElementById("cart").innerHTML = "";
    total = 0;
    document.getElementById("total").textContent = total;
}
function darkMode(){
    document.body.classList.toggle("dark");
}
let count = 0;
function checkout(){
    alert("Order Placed Successfully!");
}