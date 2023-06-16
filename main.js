// line 7 on the README file
const input = document.querySelector("#task-input");
const list = document.querySelector("#tasks");
const form = document.querySelector("#task-form");

// 8
let todos = [];

// 9
form.addEventListener("submit", (e) => {
    // 10
    e.preventDefault();

    // 11
    const todo = input.value;

    // 12
    if (todo === "") {
    alert("Option cannot be empty");
    } else {

    // 13
    todos.push(todo);

    // 14
    input.value = "";

    // 15
    renderTodos(todos);
}
});

// 16
const renderTodos = (arr) => {
  list.innerHTML = ""; // 17

    // 18
    arr.forEach((todoItem) => {
        // 19
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("task");

    // 21
    const li = document.createElement("li");
    li.classList.add("content");
    li.textContent = todoItem;
    todoDiv.appendChild(li);

    // 23
    const todoAction = document.createElement("div");
    todoAction.classList.add("actions");

    // 25
    const checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa fa-check"></i>';
    checkButton.classList.add("check");
    checkButton.addEventListener("click", toggleTodo);
    todoAction.appendChild(checkButton);

    // 27
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", deleteTodo);
    todoAction.appendChild(deleteButton);

    // 29
    todoDiv.appendChild(todoAction);

    // 30
    list.appendChild(todoDiv);
    });
};

// 32
function toggleTodo() {
    // 33
    this.parentElement.parentElement.classList.toggle("toogle");
}

// 35
function deleteTodo() {
    // 36
    const todoItem = this.parentElement.parentElement;
    // 37
    const todoText = todoItem.querySelector(".content").textContent;
    //38
    const index = todos.indexOf(todoText);
//    39
    if (index !== -1) {
    // 40
    todos.splice(index, 1);
    //41
    renderTodos(todos);
}
}
