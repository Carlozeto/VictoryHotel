const Router = require("express");
const {getRooms, createRoom, getRoom, deleteRoom, updateRoom} = require("../controllers/roomController")
const {auth} = require("../middleware/authMiddleware")

const router = Router();

router.get("/", getRooms);

router.get("/:id", getRoom);

router.post("/", auth, createRoom);

router.post("/:id", auth, updateRoom);

router.delete("/:id", auth, deleteRoom);

module.exports = router;