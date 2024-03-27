const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const number = document.getElementById("number");

const checkUserInput = () => {
    const numberInt = parseInt(number.value);

    if (!number.value || isNaN(numberInt)) {
        output.textContent = "Please enter a valid number";
        } else if (number.value >= 4000 ) {
                output.textContent = "Please enter a number less than or equal to 3999";
        } else {
            output.textContent = toRoman(number);
        }
}

const toRoman = () => {

}

convertBtn.addEventListener("click", checkUserInput);