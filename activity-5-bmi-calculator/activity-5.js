const output = document.getElementById("calc-output");

const name = prompt("Enter the person's name:");
const heightCmInput = prompt("Enter the height in centimeters:");
const weightKgInput = prompt("Enter the weight in kilograms:");

const heightCm = parseFloat(heightCmInput);
const weightKg = parseFloat(weightKgInput);

if (!name || isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0) {
    output.textContent = "Invalid data. Please reload the page and try again.";
} else {
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);

    let classification;

    if (bmi < 16) {
        classification = "Very severe underweight";
    } else if (bmi < 17) {
        classification = "Severe underweight";
    } else if (bmi < 18.5) {
        classification = "Underweight";
    } else if (bmi < 25) {
        classification = "Normal weight";
    } else if (bmi < 30) {
        classification = "Overweight";
    } else if (bmi < 35) {
        classification = "Obesity class I";
    } else if (bmi < 40) {
        classification = "Obesity class II";
    } else {
        classification = "Obesity class III";
    }

    const message = `${name} has a body mass index of ${bmi.toFixed(2)}, classified as: ${classification}.`;

    output.textContent = message;
    alert(message);
}