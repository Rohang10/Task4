document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "user" && password === "password") {
        window.location.href = "secured.html";
    } else {
        document.getElementById("error").innerHTML = "Invalid credentials. Please try again.";
    }
});
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('login-system'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login-system/index.html');
});

app.get('/secured', (req, res) => {
    res.sendFile(__dirname + '/login-system/secured.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        document.getElementById("error").innerHTML = "Passwords do not match. Please try again.";
    } else {
        document.getElementById("error").innerHTML = "Registration successful!";
    }
});
