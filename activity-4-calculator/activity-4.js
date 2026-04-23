const form = document.getElementById("calc-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    let result;
    let operatorSymbol;

    if (operation === "add") {
        result = num1 + num2;
        operatorSymbol = "+";
    } else if (operation === "subtract") {
        result = num1 - num2;
        operatorSymbol = "-";
    } else if (operation === "multiply") {
        result = num1 * num2;
        operatorSymbol = "×";
    } else if (operation === "divide") {
        if (num2 === 0) {
            result = "Cannot divide by zero.";
            operatorSymbol = "÷";
        } else {
            result = num1 / num2;
            operatorSymbol = "÷";
        }
    }

    const output = document.getElementById("calc-output");
    if (result === "Cannot divide by zero.") {
        output.classList.add("error");
        output.textContent = "Cannot divide by zero.";
    } else {
        output.classList.remove("error");
        output.textContent = `${num1} ${operatorSymbol} ${num2} = ${result}`;
    }
});