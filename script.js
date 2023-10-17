function checkPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById('cnfrm-password').value;
    let message = document.getElementById("message");

    if (password.trim() !== '' && confirmPassword.trim() !== '') { // Check if passwords are not empty or just whitespace
        if (password === confirmPassword) {
            message.textContent = "Passwords Match";
            message.style.color = "green";
        } else {
            message.textContent = "Passwords Don't Match";
            message.style.color = "red";
        }

        message.style.display = "block"; 
    } else {
        message.textContent = "Enter Password";
        message.style.color = "black"; 
        message.style.display = "block"; 
    }
}
