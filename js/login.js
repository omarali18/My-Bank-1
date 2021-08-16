//login-btn , input-email , input-password
document.getElementById("login-btn").addEventListener("click", function () {
    const emailField = document.getElementById("input-email");
    const userEmail = emailField.value;
    const passwordField = document.getElementById("input-password");
    const userPassword = passwordField.value;
    // console.log(userPassword);
    if (userEmail == "omarali1814000@gmail.com" && userPassword == "11223344a") {
        window.location.href = "bank-name.html";
    }
});

