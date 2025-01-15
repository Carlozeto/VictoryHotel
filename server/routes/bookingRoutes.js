const Router = require("express");
const { getBookings, createBooking, getBooking, updateBooking, deleteBooking } = require("../controllers/bookingController");

const router = Router();

router.get("/", getBookings);

router.get("/:id", getBooking);

router.post("/", createBooking);

router.post("/:id", updateBooking);

router.delete("/:id", deleteBooking);

module.exports = router;