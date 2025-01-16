const Router = require("express");
const { getBookings, createBooking, getBooking, updateBooking, deleteBooking } = require("../controllers/bookingController");
const { auth } = require("../middleware/authMiddleware");

const router = Router();

router.get("/", auth, getBookings);

router.get("/:id", auth, getBooking);

router.post("/", createBooking);

router.post("/:id", auth, updateBooking);

router.delete("/:id", auth, deleteBooking);

module.exports = router;