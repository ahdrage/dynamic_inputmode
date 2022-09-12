


let numberEntered = "";
let arrayTest = [];






const inputElem = document.getElementById("input");

// Looping through all divs and adding listener to change display when a button is clicked

    inputElem.addEventListener('keydown', (event) => {
        // Showing more than one digit at a time in display

        let name = event.key; 
        
        
        arrayTest.push(name); 

        console.log(arrayTest.length);

       
        
        if (arrayTest.length === 3) {
             inputElem.setAttribute("inputmode", "numeric")
            
        }

        if (name === "Backspace") {
            inputElem.setAttribute("inputmode", "text")

        }
      

    })


    