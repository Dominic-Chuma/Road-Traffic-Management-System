const router = require("express").Router();
// Bring in the User Registration function
const {
    userAuth,
    userLogin,
    checkRole,
    userRegister,
    serializeUser
} = require("../utils/Auth");

// Users Registeration Route
router.post("/register", async(req, res) => {
    await userRegister(req.body, "user", res);
});

// Users Login Route
router.post("/login", async(req, res) => {
    await userLogin(req.body, "user", res);
});

// Profile Route
router.get("/profile", userAuth, async(req, res) => {
    return res.json(serializeUser(req.user));
});

// Users Protected Route
router.get(
    "/user-protectd",
    userAuth,
    checkRole(["user"]),
    async(req, res) => {
        return res.json("Hello User");
    }
);

module.exports = router;