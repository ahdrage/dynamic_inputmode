
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
    }

  

    if (charPressed === "Backspace") {
        inputElem.setAttribute("inputmode", "text")
    }


})

