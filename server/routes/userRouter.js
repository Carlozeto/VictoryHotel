const Router = require("express");
const { getUsers, getUser, createUser, updateUser, deleteUser, loginUser } = require("../controllers/userController");

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", createUser);

router.post("/login", loginUser);

router.post("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;