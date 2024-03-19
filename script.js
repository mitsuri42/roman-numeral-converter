const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const number = document.getElementById("number");

const checkUserInput = () => {
    const numberInt = parseInt(number.value);

    if (!number.value || isNaN(numberInt)) {
        alert("Please enter a valid number");
        return;
    }

    if (number.value < 0) {
        alert("Please enter a number greater than or equal to 1");
        return;
    }

    if (number.value >= 4000 ) {
        alert("Please enter a number less than or equal to 3999");
        return;
    }

    if (number.value === 9 ) {
        alert("XI");
        return;
    }
}

convertBtn.addEventListener("click", checkUserInput);