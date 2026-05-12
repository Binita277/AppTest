import Todo from './todo.js';
import { getTodos, saveTodos } from './storage.js';
import { displayTodos } from './ui.js';

const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

let todos = getTodos();

// Display existing todos
displayTodos(todos, todoList);

// Add Todo
addBtn.addEventListener('click', () => {
    const text = todoInput.value.trim();

    if (text === '') return;

    const todo = new Todo(text);

    todos.push(todo);
    saveTodos(todos);
    displayTodos(todos, todoList);

    todoInput.value = '';
});

// Delete Todo
todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const id = Number(e.target.dataset.id);

        todos = todos.filter(todo => todo.id !== id);

        saveTodos(todos);
        displayTodos(todos, todoList);
    }
});