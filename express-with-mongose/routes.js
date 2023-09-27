const express = require("express");
const router = express.Router();
const { health } = require("./controllers/health") 
const { getAllUsersFromMongo, createUserInMongo } = require("./controllers/users");
router
  .get("/health", health)
  .get("/", (req, res)=>{
    res.redirect("/health");
  })
  .get("/users", getAllUsersFromMongo)
  .post("/user", createUserInMongo);

module.exports = router;
