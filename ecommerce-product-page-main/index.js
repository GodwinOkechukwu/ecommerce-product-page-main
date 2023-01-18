'use strict';
//getting the required elements
const toggleBtn = document.querySelector('.menu');
const cartBtn = document.querySelector('.cart');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const addCartBtn = document.querySelector('.addcart');
const closeBtn = document.querySelector('.close-btn');
const toggleContainer = document.querySelector('.toggle-bar');
const overlay = document.querySelector('.overlay');
const cartContainer = document.querySelector('.cart-div');
const cartNum = document.querySelector('.cart-num');
const zero = document.querySelector('.zero');
const cartEmpty = document.querySelector('.empty');
const cartOverall = document.querySelector('.cart-container');
const closeCartBtnEmpty = document.querySelector('.btn-empty');
const picDisplay = document.querySelector('#display-pic');
const cartIndicator = document.querySelector('.cart-indicator');
const cartIndicatorNum = document.querySelector('.indicator-zero');
const thumbnail1 = document.querySelector('.img-1');
const thumbnail2 = document.querySelector('.img-2');
const thumbnail3 = document.querySelector('.img-3');
const thumbnail4 = document.querySelector('.img-4');

//navbar toggle btn
toggleBtn.addEventListener('click', function () {
    toggleContainer.classList.remove('hidden');
    toggleContainer.classList.add('transition');
    overlay.classList.remove('hidden');
});

//collapsing the menu
closeBtn.addEventListener('click', function () {
    toggleContainer.classList.add('hidden');
    overlay.classList.add('hidden');
});

//overlay collapse menu
overlay.addEventListener('click', function () {
    toggleContainer.classList.add('hidden');
    overlay.classList.add('hidden');
});

//minus function  
let minus = 0;
const numDecrease = function () {

    minus--;
    if (minus >= 0) {
        zero.textContent = minus;
    }
    // sum++;
    // if (sum >= 0)
    //     zero.textContent = sum;
    // return cardIndicatorfn;


    return numDecrease;
}

minusBtn.addEventListener('click', numDecrease);


//plus function
let sum;
const numIncrease = function () {

    // minus = sum;
    // if (minus >= 0) {
    //     minus = sum--;
    //     zero.textContent = minus;
    // }

    sum = minus;
    if (sum >= 0){
        sum = minus++;
        zero.textContent = sum;
    }
        
    return cardIndicatorfn;


};
plusBtn.addEventListener('click', numIncrease);


//cart indicator

const cardIndicatorfn = function () {
    if (minus > -1 && sum > -1) {
        cartIndicator.classList.remove('invisible');
        cartIndicatorNum.textContent = zero.textContent;
    }
        else{
            cartIndicator.classList.add('invisible');
        }

};
addCartBtn.addEventListener('click', cardIndicatorfn);

// empty cart display
cartBtn.addEventListener('click', function () {
    cartEmpty.classList.remove('invisible');
});

// close empty cart
closeCartBtnEmpty.addEventListener('click', function () {
    cartEmpty.classList.add('invisible');
});

let classadd;
const addCart = function () {
    classadd = zero.textContent !== '0' ? 'visible ' : '';
    cartOverall.innerHTML = '';
    if (zero.textContent === '0') {
        cartEmpty.classList.remove('invisible');
    }

    if (zero.textContent !== '0') {
        const html = ` 
                        <div class="cart-div ${classadd} filled">
                            <svg id="close" class="close-btn-filled " width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/>
                            </svg>
                            <h2>Cart</h2>
                            <hr>
                            <div class="cart-flex ">
                                <img src="images/image-product-1-thumbnail.jpg">
                                <h3>Fall Limited Edition Sneakers<br>$125.00 * ${Number(zero.textContent)} <span>${'$'+125.00 * Number(zero.textContent)}</span></h3>
                            </div>
                             <button class="cart-btn btn-filled"><h4>Check Out</h4></button>
                        </div>
                    
`;

        cartOverall.insertAdjacentHTML('afterbegin', html);

    }

    document.getElementById('close').addEventListener('click', function () {
        document.querySelector('.filled').classList.add('invisible');
    });
    document.querySelector('.btn-filled').addEventListener('click', function(){
        window.location.href = 'payment.html';
    })

};

cartIndicator.addEventListener('click', addCart);
let activeImage = document.querySelectorAll('.d-block')[0];
let thumcart = document.querySelector('.thumimage');

thumbnail1.style.opacity = 0.5;
thumbnail1.addEventListener('click', function(){
    thumbnail1.style.opacity = 0.5;
    thumbnail2.style.opacity = 1;
    thumbnail3.style.opacity = 1;
    thumbnail4.style.opacity = 1;
    activeImage.setAttribute('src', "images/image-product-1.jpg");
    thumcart.setAttribute('src', "images/image-product-1-thumbnail.jpg");
   });

thumbnail2.addEventListener('click', function(){
    thumbnail2.style.opacity = 0.5;
    thumbnail1.style.opacity = 1;
    thumbnail3.style.opacity = 1;
    thumbnail4.style.opacity = 1;
    activeImage.setAttribute('src', "images/image-product-2.jpg");
    thumcart.setAttribute('src', "images/image-product-2-thumbnail.jpg");
});

thumbnail3.addEventListener('click', function(){
    thumbnail3.style.opacity = 0.5;
    thumbnail2.style.opacity = 1;
    thumbnail1.style.opacity = 1;
    thumbnail4.style.opacity = 1;
    activeImage.setAttribute('src', "images/image-product-3.jpg");
    thumcart.setAttribute('src', "images/image-product-3-thumbnail.jpg");
});

thumbnail4.addEventListener('click', function(){
    thumbnail4.style.opacity = 0.5;
    thumbnail1.style.opacity = 1;
    thumbnail3.style.opacity = 1;
    thumbnail2.style.opacity = 1;
    activeImage.setAttribute('src', "images/image-product-4.jpg");
    thumcart.setAttribute('src', "images/image-product-4-thumbnail.jpg");
});

//const activeImage = document.querySelector('.active');
