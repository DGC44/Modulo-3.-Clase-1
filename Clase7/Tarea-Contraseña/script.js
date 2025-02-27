const passwordField = document.getElementById("password");
const copyButton = document.getElementById("copy");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateButton = document.getElementById("generate");
const strengthIndicator = document.getElementById("strength");

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
    let strength = "Débil";
    if (length >= 12 && numbersCheckbox.checked && symbolsCheckbox.checked) {
        strength = "Fuerte";
    } else if (length >= 10) {
        strength = "Media";
    }
    strengthIndicator.textContent = `Seguridad: ${strength}`;
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
