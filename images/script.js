// CARD IMAGE CHANGE

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




// ACTIVE STATE
function activeState(){
    const input = document.querySelectorAll(".input");
    const inputCardNumber = document.querySelector(".inputCardNumber");
    const form = document.querySelector("form");
    const completedStateContainer = document.querySelector(".completedStateContainer");

    // checks for empty fields

        // red border
    for (let i = 0; i < input.length; i++){
        if (!input[i].value){
            input[i].style.borderColor = "hsl(0, 100%, 66%)"
        }
    }


         // empty field error message
    for (let j = 0; j < input.length; j++){
        if (!input[j].value){
            const newParagraph = document.createElement("p");
            newParagraph.style.position = "relative";
            newParagraph.innerHTML = "Can't be blank";
            newParagraph.style.color = "hsl(0, 100%, 66%)";
            newParagraph.style.fontSize = "0.6rem";
            newParagraph.style.position = "absolute";
            newParagraph.style.textTransform = "capitalize"
            input[j].insertAdjacentElement('afterend', newParagraph);
        } 
        // COMPLETE STATE
        else{ 
            form.style.visibility = "hidden";
            completedStateContainer.style.visibility = "visible";
            
        }
        
        
    
    
    
    // checks for letter in cardNumber
    for (let k = 0; k < inputCardNumber.value.length; k++){
        if (isNaN(inputCardNumber.value[k])){
            const newParagraph = document.createElement("p")
            newParagraph.style.position = "relative";
            newParagraph.innerHTML = "Wrong format, numbers only";
            newParagraph.style.color = "hsl(0, 100%, 66%)";
            newParagraph.style.fontSize = "0.6rem";
            newParagraph.style.position = "absolute";
            newParagraph.style.textTransform = "capitalize"
            inputCardNumber.insertAdjacentElement('afterend', newParagraph)
            break;
        } 
    }





    // REMOVAL OF EMPTY FIELD MESSAGE 
    // console.log(errorContainerCardNumber[2]);
    // if (errorContainerCardNumber.childElementCount > 3){
    //     errorContainerCardNumber.children[3].remove()
    // }
    
    
}
}
