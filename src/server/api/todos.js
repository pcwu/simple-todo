import Router from 'express';
import Todo from '../models/Todo';

const router = Router();

const getAllTodos = (req, res) => {
  Todo.find((err, todos) => {
    if (err) return res.status(500).send({ message: err });
    return res.status(200).json({ todos });
  });
};

const addTodo = (req, res) => {
  const { text } = req.body;
  const newTodo = new Todo({ text });
  newTodo.save((err, todo) => {
    if (err) return res.status(500).send({ message: 'Add todo failed.' });
    return res.status(200).json({ todo });
  });
};

const clearCompleted = (req, res) => {
  Todo.remove({ completed: true }, (err) => {
    if (err) return res.status(500).send({ message: 'Delete completed todos failed.' });
    return res.status(200).json({ message: 'success' });
  });
};

const getTodo = (req, res) => {
  Todo.findOne({ _id: req.params.id }, (err, todo) => {
    if (err) return res.status(500).send({ message: err });
    return res.status(200).json({ todo });
  });
};

const updateTodo = (req, res) => {
  Todo.update({ _id: req.params.id }, req.body, (err, todo) => {
    if (err) return res.status(500).send({ message: 'Update todo failed.' });
    return res.status(200).json({ todo });
  });
};

const deleteTodo = (req, res) => {
  Todo.remove({ _id: req.params.id }, (err) => {
    if (err) return res.status(500).send({ message: 'Delete todo failed.' });
    return res.status(200).json({ message: 'success' });
  });
};

router.get('/', getAllTodos);
router.post('/', addTodo);
router.delete('/', clearCompleted);

router.get('/:id', getTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
