const changeCurrencyBtn = document.getElementById("changeCurrencyBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalWindowDiv = document.getElementById("modal-window");
const bookNowBtns = document.querySelectorAll(".bookNowBtn");
const changePageLayotBtn = document.getElementById('changePageLayot');

// Search locations 

const searchbarButton = document.getElementById('searchbarButton');
const locationsInput = document.getElementById('locationsInput');
const locationNamesParagraph = document.querySelectorAll('.location-name');


// Payment inputs
const paymentCssClass = document.getElementById('paymentLandingPage');
const firstNameInput = document.getElementsByClassName('fName');
const lastNameInput = document.getElementsByClassName('lName');
const dateOfBirthInput = document.getElementsByClassName('dob');
const cardNumberInput = document.getElementsByClassName('cardNumber');
const ccvNumber = document.getElementsByClassName('ccvNumber');
const expiryDate = document.querySelector('#expiryDate').value;
const payNowButton = document.getElementById('payNowButton');



// Add event listeners
searchbarButton.addEventListener('click', performSearch);
document.addEventListener('keydown', handleKeyPress);

// Event handlers
function performSearch() {
  const locationsInputVariable = locationsInput.value;
  const arrayOflocationsNames = Array.from(locationNamesParagraph).map(item => item.innerHTML);

  if (arrayOflocationsNames.includes(locationsInputVariable)){
    console.log(true);
  } else {
    console.log(false);
  }
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    performSearch();
  }
}

function hasWhiteSpace(str) {
  console.log(str.indexOf(' ') >= 0);
}

// hasWhiteSpace('My String');






for (let i = 0; i < bookNowBtns.length; i++) {
  bookNowBtns[i].onclick = function () {
    console.log([i]);

    if (bookNowBtns[i] === bookNowBtns[0]) {
      paymentCssClass.classList.remove('hide');
      // validationsForInputs();

    } else if (bookNowBtns[i] === bookNowBtns[1]) {
     
      paymentCssClass.classList.remove('hide');
    } else if (bookNowBtns[i] === bookNowBtns[2]) {
     
      paymentCssClass.classList.remove('hide');
    } else if (bookNowBtns[i] === bookNowBtns[3]) {
    
      paymentCssClass.classList.remove('hide');
    } else {
      console.log(`nah`);
    }
  };
}

// Function for the bookNowBtns
closeModalBtn.addEventListener("click", function () {
  modalWindowDiv.style = `display:none`;
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modalWindowDiv.style = `display:none`;
  }
});


// FUNKCIJA ZA VALIDACIJA
// function validateExpiryDate(event) {
//   const digits = [];
//   if (digits.length === 4) {
//     return;
//   }
//   digits.push(event.key);
// }

let inversValue = false;

changeCurrencyBtn.addEventListener('click', () =>{

  const prices = document.getElementsByClassName('price');

  inversValue = !inversValue;

  if(inversValue == true){
    console.log(`Value is ${inversValue}`)
    for(let i = 0; i < prices.length; i++){
      prices[0].innerHTML = '€366';
      prices[1].innerHTML = '€274';
      prices[2].innerHTML = '€366';
      prices[3].innerHTML = '€457';
    }
  } else{
    console.log(`Value is ${inversValue}`)
    for(let i = 0; i < prices.length; i++){
      prices[0].innerHTML = '$399';
      prices[1].innerHTML = '$299';
      prices[2].innerHTML = '$399';
      prices[3].innerHTML = '$499';
    
    }}
})


changePageLayotBtn.addEventListener('click', () =>{
 
  inversValue = !inversValue;

  if(inversValue == true){
    console.log(`Value is ${inversValue}`);
    }else{
    console.log(`Value is ${inversValue}`);
    }
})