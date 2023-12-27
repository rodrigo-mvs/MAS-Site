// Define a function to register a new user
function registeruser() {
    // Get the value of the username input field
    username = $('usernameSignUp').val()
    // Get the value of the password input field
    password = $('passwordSignUp').val()
    // Get the value of the second password input field
    passwordr = $('passwordrSignUp').val()

    // Get the current list of users
    var users = getUsers()

    // Check if any of the input fields are empty
    if (username == '' || password == '' || passwordr == '') {
        // If any field is empty, alert the user and return false
        alert('Missing Input!')
        return false
    }
    // Check if the two password fields match
    if (passwordr != password) {
        // If they don't match, alert the user and return false
        alert('Passwords do not match!')
        return false
    }

    // Create a new user object
    var newUser = {
        'Username': username,
        'Password': password,
        'Email': email
    }

    // Get the user object with the same username
    var user = getUserByUsername(username)
    // Check if the user already exists
    if (user != undefined) {
        // If the user exists, alert the user and return false
        alert('Username already exists!')
        return false
    }
    // If the user does not exist, add the new user to the list of users
    else {
        // Update the list of users in local storage
        users.push(newUser)
        // Return true to indicate successful user registration
        return true
    }

}
 
 // Define a function to remove a user
 function removeUser(u) {
    // Get the current list of users
    us = getUsers()
    // Remove the specified user from the list
    newUsers = removeItem(us,u)
    // Update the list of users in local storage
    setUsers(newUsers)
 }
 
 // Define a function to validate user sign in
 function validateSignIn() {
    // Get the value of the username input field
    var username = $('#usernameSignIn').val()
    // Get the value of the password input field
    var password = $('#passwordSignIn').val()
 
    // Get the user object with the specified username
    var u = getUserByUsername(username)
 
    // Check if the user exists
    if (u == undefined) {
        // If the user does not exist, alert the user and return false
        alert('User not found!')
        return false
    }
 
    // Check if the password matches the user's password
    if (u.Password != password) {
        // If the password does not match, alert the user and return false
        alert('Incorrect Password')
        return false
    }
 
    // Store the active user in local storage
    localStorage.setItem('activeAccount', JSON.stringify(u))
    // Return true to indicate successful sign in
    return true
 }
 
 // Define a function to sign out a user
 function singOut() {
    // Remove the active user from local storage
    localStorage.setItem('activeAccount', null)
 }
 
 // Define a function to get the active user
 function getActiveAccount(){
    // Return the active user from local storage
    return JSON.parse(localStorage.getItem('activeAccount'))
 }
 
 // Define a function to get the list of users
 function getUsers() { 
    // Get the list of users from local storage
    var users = localStorage.getItem('users')
    
    // If the list of users is not found, initialize it
    if (users == null) {
        setUsers([])
        return []
    }
 
    // If the list of users is found, return it
    else {
        return JSON.parse(users)
    }
 }
 
 // Define a function to get a user by username
 function getUserByUsername(u) { 
    // Return undefined if no users with the specified username are found
    return getUsers().filter(value => {return value.Username == u})[0]
 }
 
 // Define a function to set the list of users
 function setUsers(newUsersList) {
    // Update the list of users in local storage
    localStorage.setItem('users',JSON.stringify(newUsersList))
 }
 
 // Define a function to check if an item is in an array
 function isInArray(item,array) {
    // Return true if the item is in the array, false otherwise
    return JSON.stringify(array).includes(JSON.stringify(item))
 }
 
 // Define a function to compare two arrays
 function compareArrays(a,b) {
    // Return true if the arrays are the same length and contain the same elements, false otherwise
    return a.length === b.length && JSON.stringify(a) == JSON.stringify(b)
 }
 
 // Define a function to remove an item from an array
 function removeItem(arr, item) {
    // Return a new array that does not contain the specified item
    return arr.filter(function (element) { 
        return !compareArrays(item,element) 
    })
 }
 
 // When the document is ready```
 

