import fetch from "node-fetch"
import express from "express"
import FormData from "form-data"

const PORT = 50000

const IP_GRID = "localhost"
const PORT_GRID = 50001
const ROUTE_GRID = "grid"

const IP_DIGIT = "localhost"
const PORT_DIGIT = 50002
const ROUTE_DIGIT = "digit"

const IP_SOLVER = "localhost"
const PORT_SOLVER = 50003
const ROUTE_SOLVER = "solver"


// Create the express server instance
const app = express()

// Allow to get body of a request
app.use(express.json())

// Test route
app.get("/", (req, res) => {
    console.log("request received")
    res.send("ok")
})


// Get a grid picture from the mobile app
app.post("/grid", async (req, res) => {

    console.log(req.body)

    // The url of the grid recognition service
    let url_grid = "http://" + IP_GRID + ":" + PORT_GRID + "/" + ROUTE_GRID
    let url_digit = "http://" + IP_GRID + ":" + PORT_GRID + "/" + ROUTE_GRID
    let url_solver = "http://" + IP_GRID + ":" + PORT_GRID + "/" + ROUTE_GRID

    if(req.body) {

        let formData = new FormData()
        formData.append("photo_b64", req.body.image)

        // GRID RECOGNITION
        let response = await fetch(url_grid, {
            method: "POST",
            body: formData
        });
    
        let json_grid =  await response.json()

        // DIGIT RECOGNITION
        let response = await fetch(url_digit, {
            method: "POST",
            body: formData
        });
    
        let json_digit =  await response.json()

        // SOLVER
        let response = await fetch(url_solver, {
            method: "POST",
            body: formData
        });
    
        let json_solver =  await response.json()

    } else {

        // TODO : ERROR HANDLING

    }

})


app.listen(PORT)

console.log(`Running on port ${PORT}`)