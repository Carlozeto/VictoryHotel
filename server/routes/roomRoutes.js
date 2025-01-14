const Router = require("express");
const {getRooms, createRoom} = require("../controllers/roomController")

const router = Router();

router.get("/", getRooms);

router.post("/", createRoom);

module.exports = router;