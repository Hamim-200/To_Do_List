const lists = [];

const addTodoBtn = document.getElementById("todo-btn");
const todoInput = document.getElementById("todo-text");
const todoList = document.getElementById("todo-list");
const totalItem = document.getElementById("total-item");

addTodoBtn.addEventListener("click", () => {
    startWork();
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        startWork();
    }
})

function startWork() {
    const inputValue = todoInput.value;
    todoInput.value = "";

    if (inputValue) {
        lists.push(inputValue);
        updateDisplay();
    }
}

function updateDisplay() {
    todoList.textContent = "";
    totalItem.innerText = lists.length;

    let index = 0;

    for (const list of lists) {
        const li = document.createElement("li");
        li.setAttribute("class", "list-group-item d-flex justify-content-between shadow-sm mb-1 bg-body rounded");
        li.innerHTML = `<span>${list}</span><span onclick="removeAList('${index}')" class="btn btn-outline-danger btn-sm">Remove</span>`
        todoList.appendChild(li);

        index++;
    }
}

function removeAList(index) {
    lists.splice(index, 1);
    updateDisplay();
}