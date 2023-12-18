document.getElementById('submit-button').addEventListener('click', function() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (firstName == "") {
        alert("First name cannot be empty");
        return false;
    }

    if (lastName == "") {
        alert("Last name cannot be empty");
        return false;
    }

    if (email == "") {
        alert("Email cannot be empty");
        return false;
    }

    if (password == "") {
        alert("Password cannot be empty");
        return false;
    }

    if (confirmPassword == "") {
        alert("Confirm password cannot be empty");
        return false;
    }

    if (password != confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    alert("Account created successfully!");
});