const showLine = document.getElementById("generateBtn");
const length = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const upperCase = document.getElementById("uppercase");
const lowerCase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const tooltip = document.getElementById("tooltip");

const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "^!$%&|[](){}:;.,*+-#@<>~",
};

length.addEventListener("input", () => {
  lengthValue.innerHTML = length.value;
});

function generateRandomString(length, options) {
  let characterPool = "";

  if (options.lowercase) characterPool += characters.lowercase;
  if (options.uppercase) characterPool += characters.uppercase;
  if (options.numbers) characterPool += characters.numbers;
  if (options.symbols) characterPool += characters.symbols;

  if (characterPool === "") return "No options selected"; // Prevent empty pool

  let randomString = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    randomString += characterPool[randomIndex];
  }
  return randomString;
}

generateBtn.addEventListener("click", () => {
  const options = {
    lowercase: lowerCase.checked,
    uppercase: upperCase.checked,
    numbers: numbers.checked,
    symbols: symbols.checked,
  };

  const lengthVal = length.value;

  const randomString = generateRandomString(lengthVal, options);

  showLine.innerHTML = `${randomString}`;

  if (showLine.innerHTML === randomString) {
    showLine.addEventListener("click", () => {
      navigator.clipboard.writeText(randomString);
    });

    showLine.addEventListener("mouseover", () => {
      tooltip.style.opacity = "1";
    });

    showLine.addEventListener("mouseout", () => {
      tooltip.style.opacity = "0";
    });
  }
});
