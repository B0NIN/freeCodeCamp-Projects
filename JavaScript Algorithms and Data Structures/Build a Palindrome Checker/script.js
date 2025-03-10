const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
let isError = false;

function cleanInputString(str) {
    return str.replace(/[^a-zA-Z0-9]/g, "");
}

function formatInputString(str) {
    return str.toLowerCase();
}

function checkError(input) {
    if (input === "") {
        isError = true;
    } else {
        isError = false;
    }
}

function isPalindrome(input) {
    result.style.backgroundColor = "green";
    result.style.display = "block";
    result.innerText = `${input} is a palindrome`;
}

function isNotPalindrome(input) {
    result.style.backgroundColor = "red";
    result.style.display = "block";
    result.innerText = `${input} is not a palindrome`;
}

function checkInput(event) {
    event.preventDefault();
    result.style.display = "none";
    result.innerText = "";
    const input = document.forms["palindrome-form"]["text-input"].value; // input is here so that it can change.
    checkError(input);
    if (isError === true) {
        alert("Please input a value");
    } else {
        const cleanedInput = cleanInputString(input); // removes non alphanumerics
        const finalInput = formatInputString(cleanedInput);
        const inputArray = finalInput.split(""); // splits each character to become an item in the array.
        const reversedArray = [...inputArray].reverse();
        const res = JSON.stringify(inputArray) === JSON.stringify(reversedArray) ? isPalindrome(input) : isNotPalindrome(input);
    }
}

checkBtn.addEventListener("click", checkInput);