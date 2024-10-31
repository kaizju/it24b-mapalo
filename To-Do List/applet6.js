class TodoList {
    constructor() {
        this.editingIndex = -1;
        this.addButton = document.getElementById('addButton');
        this.todoInput = document.getElementById('todoInput');
        this.todoList = document.getElementById('todoList');

        this.addButton.addEventListener('click', () => this.addOrUpdateTask());
        this.todoList.addEventListener('click', (e) => this.handleListClick(e));
    }

    handleListClick(event) {
        const target = event.target;
        if (target.classList.contains('removeButton')) {
            this.removeTask(target);
        } else if (target.classList.contains('editButton')) {
            this.editTask(target);
        } else if (target.classList.contains('doneButton')) {
            this.doneTask(target);
        }
    }
