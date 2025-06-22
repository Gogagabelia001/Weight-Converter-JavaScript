const converterInput = document.getElementById('converter-input');
const convertedNumber = document.getElementById('converted-number');
const errorMessage = document.getElementById('error');
let errorTime;
let resultTime;

function updateResults() {
  const inputValue = Number(converterInput.value);

  if (isNaN(inputValue) || inputValue <= 0) {
    errorMessage.innerHTML = "Please enter a valid number!";
    clearTimeout(errorTime);
    errorTime = setTimeout(()=> {
      errorMessage.innerHTML = " ";
      converterInput.value = " ";
    }, 2000)
  } else {
    convertedNumber.innerHTML = (converterInput.value / 2).toFixed(2);
    clearTimeout(resultTime);
    resultTime = setTimeout(()=> {
      convertedNumber.innerHTML = " ";
      converterInput.value = " ";
    }, 10000)
  }
}

converterInput.addEventListener("input", updateResults);