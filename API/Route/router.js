const { getTodos, createTodo } = require("../Controller/Todo");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});
router.get("/todos", getTodos);
router.post("/todos", createTodo);


module.exports = router;
