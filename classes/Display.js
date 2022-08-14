class Display {
    constructor(displayPreviousValue, displayCurrentValue) {
        this.displayPreviousValue = displayPreviousValue;
        this.displayCurrentValue = displayCurrentValue;

        this.calculator = new Calculator();
        this.operationType = undefined;

        this.previousValue = "";
        this.currentValue = "";

        this.signs = {
            add: "+",
            subtract: "-",
            multiply: "x",
            divide: "/"
        };
    }

    addNumber(number) {
        if(number === "." && this.currentValue.includes(".")) {
            return;
        }

        this.currentValue = this.currentValue.toString() + number.toString();
        this.showValues();
    }

    remove() {
        this.currentValue = this.currentValue.toString().slice(0, -1);
        this.showValues();
    }

    removeAll() {
        this.previousValue = "";
        this.currentValue = "";
        this.operationType = undefined;
        this.showValues();
    }

    compute(oType) {
        this.operationType !== "equal" && this.calculate();
        this.operationType = oType;
        this.previousValue = this.currentValue || this.previousValue;
        this.currentValue = "";
        this.showValues();
    }

    calculate() {
        const pValue = parseFloat(this.previousValue);
        const cValue = parseFloat(this.currentValue);

        if(isNaN(pValue) || isNaN(cValue)) {
            return;
        }

        this.currentValue = this.calculator[this.operationType](pValue, cValue);
    }

    showValues() {
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.signs[this.operationType] || ""}`;
        this.displayCurrentValue.textContent = this.currentValue;
    }
}
