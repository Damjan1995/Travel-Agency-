const changeCurrencyBtn = document.getElementById("changeCurrencyBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalWindowDiv = document.getElementById("modal-window");
const bookNowBtns = document.querySelectorAll(".bookNowBtn");
const changePageLayotBtn = document.getElementById("changePageLayot");

// Search locations
const searchForm = document.getElementById("searchForm");
const locationsInput = document.getElementById("locationsInput");


// Add event listeners
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  performSearch();
  return false;
});
locationsInput.addEventListener("input", performSearch);

const objectOfCards = [
  {
    locationImage: "santorini.jpg",
    locationId: "santorini",
    city: "Santorini",
    country: "Greece",
    days: 7,
    price: 399,
  },
  {
    locationImage: "gozo.jpg",
    locationId: "gozo",
    city: "Gozo",
    country: "Malta",
    days: 6,
    price: 299,
  },
  {
    locationImage: "dubrovnik.jpg",
    locationId: "dubrovnik",
    city: "Croatia",
    country: "Dubrovnik",
    days: 6,
    price: 399,
  },
  {
    locationImage: "amsterdam.jpg",
    locationId: "amsterdam",
    city: "Netherlands",
    country: "Amsterdam",
    days: 5,
    price: 499,
  },
];

function displayErrorMessage(){
  const createP = document.createElement('p');
  createP.innerHTML = 'Serch was not found';
  const divForP = document.createElement('div');
  divForP.style = `font-size: 40px`
  divForP.appendChild(createP);
  document.body.appendChild(divForP)
}

function performSearch() {
  const locationsInputVariable = locationsInput.value.toLowerCase();

  
  const filterdCityLoc = objectOfCards.filter((loc) => {
    if(locationsInputVariable !== loc.city || locationsInputVariable !== loc.country){
      displayErrorMessage();
    };
    return returnLocations(loc.city, locationsInputVariable) || returnLocations(loc.country, locationsInputVariable);


  });
  filterLocations(filterdCityLoc);
}

function returnLocations(city, locationsInputVariable, message){
  const convertCityLocToLowerCase = city.toLowerCase()
  return convertCityLocToLowerCase.includes(locationsInputVariable) && convertCityLocToLowerCase.indexOf(locationsInputVariable) == 0;

}

function createFormWhenBtnClicked(){

};

// Function for the bookNowBtns
closeModalBtn.addEventListener("click", function () {
  modalWindowDiv.style = `display:none`;
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modalWindowDiv.style = `display:none`;
  }
});

changeCurrencyBtn.addEventListener("click", () => {
});

changePageLayotBtn.addEventListener("click", () => {
  inversValue = !inversValue;

  if (inversValue == true) {
    console.log(`Value is ${inversValue}`);
  } else {
    console.log(`Value is ${inversValue}`);
  }
});

const defaultCurrency = objectOfCards.price;
console.log(defaultCurrency); 
let currentCurrency = 'eur'

// function calculateByCurrency(originalPrice) {
//   if (defaultCurrency == currentCurrency) return originalPrice;
//   if (currentCurrency == 'eur') return originalPrice * 1.05;
// }




function filterLocations(arrayValue) {
  const containerDiv = document.getElementById("locations-wraper");

  containerDiv.innerHTML = "";

  arrayValue.forEach((entry) => {
    const createDynamicDiv = document.createElement("div");
    createDynamicDiv.classList.add("cardDiv");
    containerDiv.appendChild(createDynamicDiv);

    // const adjustedPrice = calculateByCurrency(entry.price)
    const html = `
      <img class="cardImage" src="${entry.locationImage}" alt="${entry.locationId}">
      <div class="cardDivInnerContent">
        <p class="location-name">${entry.city} ${entry.country}</p>
        <p class="days">${entry.days} days</p>
        <p class="price">$${entry.price}</p>
        <button type="button" class="bookNowBtn">Book now</button>`;
    createDynamicDiv.insertAdjacentHTML("beforeend", html);
  });
}

filterLocations(objectOfCards);

