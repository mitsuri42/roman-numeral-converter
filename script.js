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
    const romanNumerals = [
        {value: 1000, numeral: 'M'},
        {value: 900, numeral: 'CM'},
        {value: 500, numeral: 'D'},
        {value: 400, numeral: 'CD'},
        {value: 100, numeral: 'C'},
        {value: 90, numeral: 'XC'},
        {value: 50, numeral: 'L'},
        {value: 40, numeral: 'XL'},
        {value: 10, numeral: 'X'},
        {value: 9, numeral: 'IX'},
        {value: 5, numeral: 'V'},
        {value: 4, numeral: 'IV'},
        {value: 1, numeral: 'I'}
    ]
}

convertBtn.addEventListener("click", checkUserInput);