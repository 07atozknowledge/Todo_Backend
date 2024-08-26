const express = require("express");
const router = express.Router();

const { getTodos , createTodo , deleteTodo , toggleTodo } =  require("../controllers/todoControllers");

router.get("/todos", getTodos);
router.post("/todo/new", createTodo);
router.delete("/todo/delete/:id", deleteTodo);
router.get("/todo/toggle/:id", toggleTodo);

module.exports = router;