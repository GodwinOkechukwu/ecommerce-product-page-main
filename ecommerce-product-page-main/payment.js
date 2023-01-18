
'use strict';

//### The challenge
//
//Users should be able to:
//
//- Fill in the form and see the card details update in real-time
//- Receive error messages when the form is submitted if:
//  - Any input field is empty
//  - The card number, expiry date, or CVC fields are in the wrong format
//- View the optimal layout depending on their device's screen size
//- See hover, active, and focus states for interactive elements on the page

//getting the neccessary elements


const holderName = document.querySelector('.name');
const cardNumber = document.querySelector('.card-number');
const expDate = document.querySelector('.month');
const mmYY = document.querySelector('.year');
const cvcc = document.querySelector('.number');
const emptyName = document.querySelector('.name-h6');
const emptyCard = document.querySelector('.cardnum-h6');
const emptyMonth = document.querySelector('.exp-h6');
const emptyCvc = document.querySelector('.cvc-h6');
const numText = document.querySelector('.zero-text');
const nameText = document.querySelector('.name-text');
const dateText = document.querySelector('.month-text');
const yearText = document.querySelector('.year-text');
const cvcText = document.querySelector('.cvc');
//

const strArrange = function(name){
    const strName = name.toLocaleLowerCase().split(' ');
    const nameUpper = [];
    for(const n of strName){
        nameUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    return nameUpper.join(' ');
};

console.log(strArrange('godwin ekene yomi'));

// storing the value of each input 
const nameInput = holderName.value;
const cardInput = Number(cardNumber.value);
const cardLength = cardNumber.value.length;
const monthInput = expDate.value;
const yearInput = mmYY.value;
const cvcInput = cvcc.value;


//export function str (){
//    return nameInput;
//}
localStorage.setItem('name', nameInput);
localStorage.setItem('cardnum', cardInput);
localStorage.setItem('month', monthInput);
localStorage.setItem('year', yearInput);
localStorage.setItem('cvc', cvcInput);

// checkers for accessing complete page
let checker1 = false;
let checker2 = false;
let checker3 = false;
let checker4 = false;
let checker5 = false;
let checker6 = false;

 
document.querySelector('.btn').addEventListener('click', function(){
    //conditional statement for each input
// no input
    
    if (!nameInput){
        emptyName.classList.remove('hidden');
    } else{
        checker1 = true;
        strArrange(nameInput);
        nameText.textContent = strArrange(nameInput);
    }
    
    
    //card number empty and numbers only
    if (!cardInput || cardInput !== 'Number'){
        emptyCard.classList.remove('hidden');
        emptyCard.textContent ='please input your card number. Contains numbers only';
    }
    
    else{
        checker2 = true;
        numText.textContent = cardInput;
    }
    
     if(cardLength !== 16){
        emptyCard.classList.remove('hidden');
         emptyCard.textContent ='number must be 16 digits!';
    }
   
    else{
        checker6 = true;
        numText.textContent = cardInput;
         console.log(cardInput.length);
    }
    
    
    //exp date ----month
    if (!monthInput){
        emptyMonth.classList.remove('hidden');
    } else{
        checker3 = true;
        dateText.textContent = monthInput;
    }
    
    //year
    if (!yearInput){
        emptyMonth.classList.remove('hidden');
    } else{
        checker4 = true;
        yearText.textContent = yearInput;
    }
    
    //cvc
    if (!cvcInput){
        emptyCvc.classList.remove('hidden');
    } else{
        checker5 = true;
        cvcText.textContent = cvcInput;
    }
    
    if (checker1 === true && checker2 === true && checker3 === true && checker4 === true && checker5 === true  && checker6 === true){
        window.location.href="complete.html";
      
    }
    
    
});




////complete.html elements needed
//const completeNameText = documnet.querySelector('.name-text-complete');
//const completeNumText = documnet.querySelector('.zero-text-complete');
//const completeMonthText = documnet.querySelector('.month-text-complete');
//const completeYearText = documnet.querySelector('.year-text-complete');
//const completeCvcText = documnet.querySelector('.cvc-complete');
//
//// storing the value of each input 
//const nameInput = holderName.value;
//const cardInput = Number(cardNumber.value);
//const cardLength = cardNumber.value.length;
//console.log(cardLength);
//const monthInput = expDate.value;
//const yearInput = mmYY.value;
//const cvcInput = cvcc.value;
//completeNameText.textContent = nameInput;




