function updateRating() {
    document.getElementById('rating-value').textContent = document.getElementById('rating').value;
}
document.getElementById("confirm-password").addEventListener("input", function () {
    let password = document.getElementById("password").value;
    let confirmPassword = this.value;
    let errorMessage = document.getElementById("password-error");
    if (password !== confirmPassword) {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
    }
});