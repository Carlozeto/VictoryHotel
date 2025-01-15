const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const roomRoutes = require("./routes/roomRoutes")
const bookingRoutes = require("./routes/bookingRoutes")
const userRoutes = require("./routes/userRouter")
const {errorHandler} = require("./middleware/errorHandler")
const cookieParser = require ("cookie-parser");
const { auth } = require("./middleware/authMiddleware");

const port = process.env.PORT || 5000;

//DB Connection
connectDB();

//Middlewares
app.use(cookieParser());
app.use(express.json());

//Authentication
app.use("/auth", auth)

//Routes
app.use("/api/rooms", roomRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`listening on port ${port}`));





