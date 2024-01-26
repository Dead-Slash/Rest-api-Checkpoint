const express = require("express");
const {
  creatUser,
  getuser,
  delete_user,
  updateuser,
} = require("../Controller/Controller");
const { deleteOne, users } = require("../Model/Model");

const user_router = express.Router();
user_router.post("/create", creatUser);
user_router.get("/get", getuser);
user_router.delete("/delete/:id", delete_user);
user_router.put("/update/:id", updateuser);

module.exports = user_router;
