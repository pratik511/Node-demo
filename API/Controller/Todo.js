const Todo = require("../Model/Todo.js");

const getTodos = (req, res) => {
  res.send("I am the get todos route");
};

const createTodo = (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
  });

  todo.save((err, todo) => {
    if (err) {
      res.send(err);
    }
    res.json(todo);
  });
};

module.exports = {
  getTodos,
  createTodo,
};
