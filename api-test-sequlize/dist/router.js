"use strict";
const express = require("express");
const router = express.Router();
const Controller = require("./controller");
router
    .get("/health", healthControllers.health)
    .post("/user/signup", signupControllers.signup)
    .get("/user/:email", signupControllers.getByEmail);
module.exports = router;
