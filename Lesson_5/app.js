const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const textElement = document.getElementById('text');

let counterValue = parseInt(textElement.textContent, 10);

minusButton.addEventListener('click', () => {
	counterValue--;
	textElement.textContent = counterValue;
});

plusButton.addEventListener('click', () => {
	counterValue++;
	textElement.textContent = counterValue;
});