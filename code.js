


let numberEntered = "";
let arrayTest = [];






const inputElem = document.getElementById("input");

// Looping through all divs and adding listener to change display when a button is clicked

inputElem.addEventListener('keydown', (event) => {
    // Showing more than one digit at a time in display

    let name = event.key;


    arrayTest.push(name);

  /*   if (name >= "a" && name <= "z") {
        console.log("hi there");
        

       
    } */

   
    if (arrayTest.length === 1) {
        inputElem.setAttribute("inputmode", "numeric")
        console.log("success");

    }




    if (name === "Backspace") {
        inputElem.setAttribute("inputmode", "email")

    }


})


