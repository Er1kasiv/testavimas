const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let todos = [];
let idCounter = 1;

// Create a new ToDo
// use http mehtod POST
//  http://localhost:3000/todos
app.post('/todos', (req, res) => {
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    const newTodo = { id: idCounter++, title, description: description || '', completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Get all ToDos
// http://localhost:3000/todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Get a single ToDo by ID
// http://localhost:3000/todos/{id}
app.get('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(404).json({ error: 'ToDo not found' });
    }
    res.json(todo);
});

// Update a ToDo
// http://localhost:3000/todos/{id}
app.put('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(404).json({ error: 'ToDo not found' });
    }
    const { title, description, completed } = req.body;
    if (title !== undefined) todo.title = title;
    if (description !== undefined) todo.description = description;
    if (completed !== undefined) todo.completed = completed;
    res.json(todo);
});


// Delete a ToDo
// http://localhost:3000/todos/{id}
app.delete('/todos/:id', (req, res) => {
    const index = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ error: 'ToDo not found' });
    }
    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo);
});

// ()=>{}
//  http://localhost:3000
app.listen(port, () => {
    console.log(`ToDo API is running on http://localhost:${port}`);
});
