const passwordField = document.getElementById("password");
const copyButton = document.getElementById("copy");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateButton = document.getElementById("generate");
const strengthIndicator = document.querySelector(".strength-indicator");

const characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+[]{}|;:,.<>?"
};

function generatePassword() {
    let charSet = "";
    let password = "";
    
    if (uppercaseCheckbox.checked) charSet += characters.uppercase;
    if (lowercaseCheckbox.checked) charSet += characters.lowercase;
    if (numbersCheckbox.checked) charSet += characters.numbers;
    if (symbolsCheckbox.checked) charSet += characters.symbols;
    
    for (let i = 0; i < lengthSlider.value; i++) {
        password += charSet[Math.floor(Math.random() * charSet.length)];
    }
    
    passwordField.value = password;
    updateStrengthIndicator();
}

function updateStrengthIndicator() {
    const length = lengthSlider.value;
    let strengthWidth = "25%";
    let color = "red";
    
    if (length >= 12 && numbersCheckbox.checked && symbolsCheckbox.checked) {
        strengthWidth = "100%";
        color = "green";
    } else if (length >= 10) {
        strengthWidth = "75%";
        color = "yellow";
    } else if (length >= 8) {
        strengthWidth = "50%";
        color = "orange";
    }
    
    strengthIndicator.style.width = strengthWidth;
    strengthIndicator.style.background = color;
}

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
    updateStrengthIndicator();
});

generateButton.addEventListener("click", generatePassword);

copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordField.value);
    alert("Contraseña copiada");
});