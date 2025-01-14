const Router = require("express");
const {getRooms, createRoom, getRoom, deleteRoom, updateRoom} = require("../controllers/roomController")

const router = Router();

router.get("/", getRooms);

router.get("/:id", getRoom);

router.post("/", createRoom);

router.post("/:id", updateRoom);

router.delete("/:id", deleteRoom);

module.exports = router;