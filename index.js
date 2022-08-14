const displayPreviousValue = document.getElementById("previousValue");
const displayCurrentValue = document.getElementById("currentValue");
const numberButtons = document.querySelectorAll(".cNumber");
const operatorButtons = document.querySelectorAll(".cOperator");

const display = new Display(displayPreviousValue, displayCurrentValue);

numberButtons.forEach(button => {
	button.addEventListener("click", () => {
		display.addNumber(button.innerHTML);
	});
});

operatorButtons.forEach(button => {
	button.addEventListener("click", () => {
		display.compute(button.value);
	});
});
