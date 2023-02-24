
// CARD IMAGE CHANGE
"use strict"
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");


function updateCardSrc(){
    if (window.innerWidth > 1059){
        card1.src = "images/bg-card-front.png";
        card2.src = "images/bg-card-back.png";
    } else{
        card1.src = "images/bg-card-back.png";
        card2.src = "images/bg-card-front.png";
    }
}

updateCardSrc();
window.addEventListener("resize", updateCardSrc)


// ERROR MESSAGE CREATOR FUNCTION
function createErrorMessage(element, message){
    element.style.borderColor = "red";
    const newParagraph = document.createElement("p");
    newParagraph.style.position = "relative";
    newParagraph.innerHTML = message;
    newParagraph.style.color = "hsl(0, 100%, 66%)";
    newParagraph.style.fontSize = "0.6rem";
    newParagraph.style.position = "absolute";
    newParagraph.style.textTransform = "capitalize"
    element.insertAdjacentElement('afterend', newParagraph);
}

// CARD NUMBER 4 DIGITS EVENT LISTENER
const inputCardNumber = document.querySelector(".inputCardNumber");

inputCardNumber.addEventListener("input", function() {
  // Remove any existing spaces from the input value
  let value = inputCardNumber.value.replace(/ /g, '');

  // Add a space after every 4 characters
  if (value.length > 0) {
    value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
  }

  // Set the formatted value as the input value
  inputCardNumber.value = value;
});


// ACTIVE STATE
function activeState(){
    const form = document.querySelector("form");
    const inputName = document.querySelector(".inputName");
    const inputCardNumber = document.querySelector(".inputCardNumber");
    const inputMonth = document.querySelector(".inputMonth");
    const inputYear = document.querySelector(".inputYear");
    const inputCVC = document.querySelector(".inputCVC");
    const elements = [inputName, inputCardNumber, inputMonth, inputYear, inputCVC]

    const completedStateContainer = document.querySelector(".completedStateContainer");
    const cardImageNumber = document.querySelector(".cardImageNumber");
    const cardImageName = document.querySelector(".cardImageName");
    const cardImageDate = document.querySelector(".cardImageDate");
    const cardImageCVC = document.querySelector(".cardImageCVC");
    
    // INPUTNAME CHECKS
    if (!inputName.value){
        createErrorMessage(inputName, "Can't be blank")
    } else if (!isNaN(inputName.value)){
        createErrorMessage(inputName, "Wrong format, letters only")
    } else if (inputName.style.borderColor = "red"){
        inputName.style.borderColor = "hsl(270, 3%, 87%)";
    }

    // INPUTCARDNUMBER CHECKS
    if (!inputCardNumber.value){
        createErrorMessage(inputCardNumber, "Can't be blank")
    } else if (isNaN(inputCardNumber.value.replace(/ /g, ''))){
        createErrorMessage(inputCardNumber, "Wrong format, numbers only")
    } else if (inputCardNumber.value.replace(/ /g, '').length != 16){
        createErrorMessage(inputCardNumber, "Card number should be 16 digits")
    } else if (inputCardNumber.style.borderColor = "red"){
        inputCardNumber.style.borderColor = "hsl(270, 3%, 87%)";
    }

 
    // INPUTDATE CHECKS
    if (!inputYear.value || !inputMonth.value ){
        inputYear.style.borderColor = "red";
        createErrorMessage(inputMonth, "Can't be blank")
    } else if (isNaN(inputYear.value) || isNaN(inputMonth.value)){
        inputYear.style.borderColor = "red";
		inputMonth.style.borderColor = "red";
        createErrorMessage(inputMonth, "Wrong format, numbers only")
    } else if (inputYear.style.borderColor === "red" || inputMonth.style.borderColor === "red" ){
        inputYear.style.borderColor = "hsl(270, 3%, 87%)";
        inputMonth.style.borderColor = "hsl(270, 3%, 87%)";
    }

    // INPUTCVC CHECKS
    if (!inputCVC.value){
        createErrorMessage(inputCVC, "Can't be blank")
    } else if (isNaN(inputCVC.value)){
        createErrorMessage(inputCVC, "Wrong format, numbers only")
    } else if (inputCVC.style.borderColor === "red"){
        inputCVC.style.borderColor = "hsl(270, 3%, 87%)";
    }

    // FINAL ALL INPUT CHECK & ACTIVE STATE INITIALIZATION
    let okFields = 0;
    for (let i = 0; i < elements.length; i++){
        
        if (elements[i].style.borderColor != "red"){
            okFields += 1
        }
    }
    if (okFields === 5){
            form.style.visibility = "hidden";
            completedStateContainer.style.visibility = "visible";
            cardImageNumber.innerHTML = inputCardNumber.value;
            cardImageName.innerHTML = inputName.value;
            cardImageDate.innerHTML = `${inputMonth.value}/${inputYear.value}`;
            cardImageCVC.innerHTML = inputCVC.value;
    } 
}

