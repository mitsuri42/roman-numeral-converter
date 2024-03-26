const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const number = document.getElementById("number");

const checkUserInput = () => {
    const numberInt = parseInt(number.value);

    if (!number.value || isNaN(numberInt)) {
        output.textContent = "Please enter a valid number";
            } else if (number.value >= 4000 ) {
                output.textContent = "Please enter a number less than or equal to 3999";
            } 

    // if (number.value < 0) {
    //     alert("Please enter a number greater than or equal to 1");
    //     return;
    // }

    // if (number.value === 9 ) {
    //     alert("XI");
    //     return;
    // }

    // if (number.value === 16 ) {
    //     alert("XVI");
    //     return;
    // }

    // if (number.value === 649 ) {
    //     alert("DCXLIX");
    //     return;
    // }

    // if (number.value === 1023 ) {
    //     alert("MXXIII");
    //     return;
    // }

    // if (number.value === 3999 ) {
    //     alert("MMMCMXCIX");
    //     return;
    // }

}

convertBtn.addEventListener("click", checkUserInput);