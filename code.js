


let numberEntered = "";
let arrayTest = [];






const inputElem = document.getElementById("input");

// Looping through all divs and adding listener to change display when a button is clicked

    inputElem.addEventListener('keydown', (event) => {
        // Showing more than one digit at a time in display

        console.log(arrayTest);

        let name = event.key; 
        
        
        arrayTest.push(name); 

        console.log(arrayTest.length);

       
        
        if (arrayTest.length === 2) {
             inputElem.setAttribute("inputmode", "numeric")
             console.log("two array");
            
        }

      /*   if (name === "Backspace") {
            inputElem.setAttribute("inputmode", "text")

        } */
      

    })


    