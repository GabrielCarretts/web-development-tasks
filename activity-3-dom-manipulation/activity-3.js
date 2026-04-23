const button = document.getElementById("edit-btn");
const vipTitle = document.getElementById("vip-name");
const userName = prompt("What is your name?")
button.addEventListener("click", function () {
    const userName = prompt("What is your name?");
    if (userName) {
        vipTitle.textContent = userName;
    }
});
if (userName) {
    vipTitle.textContent = userName;
}