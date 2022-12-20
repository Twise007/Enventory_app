const dotenv = require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const contactRoute = require("./routes/contactRoute");
const errorHandler = require("./middleWare/errorMiddeware");
const cookieParser = require("cookie-parser");
const path = require("path");


const app = express()

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:3000/", "proposeurl"],
    credentials: true
}));


app.use("/uploads", express.static(path.join(__dirname, "uploads")))


// Routes Middleware
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/contactus",contactRoute);

//routes
    app.get("/", (req, res) => {
        res.send("Home page")
    }); 

// Error Middleware
app.use(errorHandler);

//Connect to DB and start server
const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err) => console.log(err));

