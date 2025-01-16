const Router = require("express");
const { getUsers, getUser, createUser, updateUser, deleteUser, loginUser, logoutUser } = require("../controllers/userController");
const { auth } = require("../middleware/authMiddleware");

const router = Router();

router.get("/", auth, getUsers);

router.get("/:id", getUser);

router.post("/", createUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

router.post("/:id", updateUser);

router.delete("/:id", auth, deleteUser);

module.exports = router;