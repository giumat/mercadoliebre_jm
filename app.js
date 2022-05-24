const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log("servidor corriendo en el puerto " + PORT);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.get("/register", (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});