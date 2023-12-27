//if local storage is empty, create a new array
if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify([]))
}


function getUser(email) {
    let users = JSON.parse(localStorage.getItem("users"))
    let user = users.find(user => user.email === email)
    return user
}

function emailExists(email) {
    let users = JSON.parse(localStorage.getItem("users"))
    let user = users.find(user => user.email === email)
    return user !== undefined
}

function login(form) {
    let email = form.elements["email"].value
    let password = form.elements["password"].value

    let user = getUser(email)
    if (user && user.password === password) {
        localStorage.setItem("currentUser", JSON.stringify(user.username))
        localStorage.setItem("currentEmail", JSON.stringify(user.email))
        localStorage.setItem("currentType", JSON.stringify(user.useType))
        window.location.href = "index.html"
    } else {
        alert("Invalid credentials")
    }
 }

 function register(form) {
    let username = form.elements["username"].value
    let email = form.elements["email"].value
    let password = form.elements["password"].value
    let repeatPassword = form.elements["password_repeat"].value
    let useType = form.elements["useType"].value // get the use type from the form

    if (emailExists(email)) {
        alert("Email already exists")
        return
    }

    if (password !== repeatPassword) {
        alert("Passwords do not match")
        return
    }

    let users = JSON.parse(localStorage.getItem("users"))
    users.push({username, email, password, useType}) // include the use type in the user object

    localStorage.setItem("users", JSON.stringify(users))
    localStorage.setItem("currentUser", JSON.stringify(username))
    localStorage.setItem("currentEmail", JSON.stringify(email))
    localStorage.setItem("currentType", JSON.stringify(useType)) // store the use type in the local storage
    window.location.href = "index.html"
}

function logout() {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentEmail')
    localStorage.removeItem('currentType')
    
    window.location.href = "login.html"
}


window.onload = function() {
    let currentType = localStorage.getItem("currentType");

    if (currentType && currentType !== "undefined") {
        currentType = JSON.parse(currentType);

        if (currentType === "Professional") {
            // Mostrar elementos para uso profissional
            document.getElementById("professionalElements").style.display = "block";
            document.getElementById("personalElements").style.display = "none";
        } else {
            // Mostrar elementos para uso pessoal
            document.getElementById("professionalElements").style.display = "none";
            document.getElementById("personalElements").style.display = "block";
        }
    } else {
        // Handle the case where currentType is not set in localStorage
        console.log('currentType is not set in localStorage');
    }
}