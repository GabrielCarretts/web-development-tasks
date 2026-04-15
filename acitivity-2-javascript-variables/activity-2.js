const studentForm = document.getElementById("student-form");
studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const ageInput = document.getElementById("age").value;
    const age = parseInt(ageInput, 10);
    const heightInput = document.getElementById("height").value;
    const height = parseFloat(heightInput);
    const isStudentInput = document.getElementById("isStudent").value;
    const isStudent = (isStudentInput === "yes");

    console.log(`Value: ${name} | Type: ${typeof name}`);
    console.log(`Value: ${age} | Type: ${typeof age}`);
    console.log(`Value: ${height} | Type: ${typeof height}`);
    console.log(`Value: ${isStudent} | Type: ${typeof isStudent}`);

    let result = `
    <p><strong>Value:</strong> ${name} <span>(${typeof name})</span></p>
    <p><strong>Value:</strong> ${age} <span>(${typeof age})</span></p>
    <p><strong>Value:</strong> ${height} <span>(${typeof height})</span></p>
    <p><strong>Value:</strong> ${isStudent} <span>(${typeof isStudent})</span></p>
    `;

    output.innerHTML = result;
    studentForm.reset();
});