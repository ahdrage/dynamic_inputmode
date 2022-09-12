
let array = [];
const inputElem = document.getElementById("input");
inputElem.addEventListener('keydown', (event) => {
  
    let charPressed = event.key;

    if (charPressed >= "a" && charPressed <= "z") {
        array.push(charPressed);
        console.log(array.length);
    }

    if (array.length === 2) {
        inputElem.setAttribute("inputmode", "numeric")
        console.log("now array has two values");
    }


   

})


/* if (charPressed === "Backspace") {
    inputElem.setAttribute("inputmode", "text")

}
 */
