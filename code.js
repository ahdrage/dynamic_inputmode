
let array = [];
const inputElem = document.getElementById("input");
inputElem.addEventListener('keydown', (event) => {
  
    let charPressed = event.key;

    const isLetter = /^[a-z]$/i.test(event.key)

    if (isLetter) {
        array.push(charPressed);
       
    }

    if (array.length === 2) {
        inputElem.setAttribute("inputmode", "numeric")
        console.log("now array has two values");
    }

    
    

})





/* if (charPressed === "Backspace") {
    inputElem.setAttribute("inputmode", "text")

}



 const input = document.querySelector('input');

  let keyCount = 0;

  input.addEventListener('keyup', ({ key }) => {
     ? keyCount++ : keyCount = 0;

    if (keyCount === 2) {
      input.type = 'number';
    }
  });


 */


