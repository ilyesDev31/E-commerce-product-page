const burger = document.querySelector('.burger');
const menu = document.querySelector('header ul');
const overlay = document.querySelector('.overlay');
// menu in small screen
burger.onclick = function(){
    this.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
}

// cart
const cartIcon =document.querySelector('.profile svg');
const cart = document.querySelector('.cart');
const count = document.querySelector('.count');
const plusMinBtn = document.querySelectorAll('.add-rem svg');
const addBtn = document.querySelector('.btn');
const images = Array.from(document.querySelectorAll('img')).slice(1,2);
const images2 = Array.from(document.querySelectorAll('img')).slice(2);
const imagesSrc = ["./images/image-product-1.jpg","./images/image-product-2.jpg","./images/image-product-3.jpg","./images/image-product-4.jpg"]
let countUpdate = 0;

// change images 
images2.forEach((img ,indx)=>{
    img.onclick = function(){
        removeActive(images2);
        images[0].src =imagesSrc[indx];
        img.classList.add('active');

    }
})

cartIcon.onclick = function(){
    cart.classList.toggle('active');
}
plusMinBtn[0].onclick = function(){
    countUpdate > 0 && countUpdate--;
    count.innerHTML = countUpdate;
}
plusMinBtn[1].onclick = function(){
    countUpdate++
    count.innerHTML = countUpdate;
}
let product = document.querySelector('.product');

addBtn.onclick = function(){
if(countUpdate === 0){
    alert('please add a quantity');
    return;
}
    product.innerHTML = "";
    const p = document.createElement('div');
    p.classList.add('p')
    const img = document.createElement("img");
    img.src= imagesSrc[0];
    const text = document.createElement("div");
    text.classList.add('text');
const h1 = document.querySelector('h1');
const price = document.querySelector('.prize');
const txt1 = `x ${countUpdate} <span class="bold-price">$${+price.innerText.slice(1) * countUpdate}.00</span>`;
const txt2 = ""
text.innerHTML = `<p>${h1.innerText} ${price.innerText} ${countUpdate > 1 ? txt1 : txt2}</p>`;
const icon = document.createElement("div");
icon.classList.add('icon');
icon.innerHTML = '<i id="delete" class="fa-solid fa-trash"></i>';
p.appendChild(img);
p.appendChild(text);
p.appendChild(icon);
product.appendChild(p);
cart.parentElement.classList.add('active');
}

// remove active
function removeActive(list){
list.forEach(li =>{
    li.classList.remove('active');
});
}

cart.addEventListener('click', removeProduct);

function removeProduct(e){
if(e.target.getAttribute('id',"delete") === "delete"){
    product.innerHTML = '<p class="cart-body">Your cart is empty</p>';
    cart.parentElement.classList.remove('active');
}
}

