const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const roomRoutes = require("./routes/roomRoutes")
const {errorHandler} = require("./middleware/errorHandler")

const port = process.env.PORT || 5000;

//DB Connection
connectDB();

//Middlewares
app.use(express.json())

//Routes
app.use("/api/rooms", roomRoutes)

app.use(errorHandler);

app.listen(port, () => console.log(`listening on port ${port}`));





