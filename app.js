const express = require("express");

const HOST = "10.2.5.177";
const PORT = 3000;

// Create the express server instance
const app = express();


app.get("/", (req, res) => {
    console.log("request received");
    res.send("ok");
});


// Get a grid picture from the mobile app
app.post("/grid", (req, res) => {
    console.log(req.body);
    res.json({
        status: "success"
    })
});


// Get a grid structure from the grid recognition service
app.post("/grid_recognition", (req, res) => {
    console.log(req.body);
    res.json({
        status: "success"
    })
});


// Get the digits from the digit recognition service
app.post("/digit_recognition", (req, res) => {
    console.log(req.body);
    res.json({
        status: "success"
    })
});


// Get the grid solved from the solver service
app.post("/solver", (req, res) => {
    console.log(req.body);
    res.json({
        status: "success"
    })
});



app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);