export function displayTodos(todos, todoList) {
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');

        li.innerHTML = `
            ${todo.text}
            <button class="delete-btn" data-id="${todo.id}">
                Delete
            </button>
        `;

        todoList.appendChild(li);
    });
}