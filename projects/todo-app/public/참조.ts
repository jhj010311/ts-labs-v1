// dom
const dateTitleDiv = <HTMLDivElement>document.getElementById("date-title");
const userInputEl = <HTMLInputElement>document.getElementById("add-input");
const formEl = <HTMLFormElement>document.getElementById("add-form");
const taskCountDiv = <HTMLDivElement>document.getElementById("task-count");
const todoListEl = <HTMLUListElement>document.getElementById("todo-list");

// get Data From LocalStorage
const localStorageTaskList = window.localStorage.getItem("kis-Todo");

// todo var
const tasks: Task[] = JSON.parse(
    localStorageTaskList ? localStorageTaskList : "[]"
);

// if there is Data
if (tasks.length > 0) {
    console.log(tasks);

    for (const task of tasks) {
        todoListEl.prepend(createTodoElement(task));
    }
}

// ### 1. 오늘 날짜 표시
dateTitleDiv.textContent = getTodayString();

renderTaskCount();

todoListEl.addEventListener("change", (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.tagName == "INPUT" && target.type == "checkbox") {
        // 체크박스 클릭
        toggleTask(e);
    }
});

todoListEl.addEventListener("click", (e) => {
    const target = e.target as HTMLButtonElement;
    const targetEl = target.closest("li");

    if (target.closest("button")?.classList.contains("edit-btn")) {
        // 수정 버튼
        const key = targetEl?.getAttribute("key")!;

        const oldTitle = targetEl?.querySelector("span")?.textContent!;

        targetEl!.innerHTML = "";

        const editInput = document.createElement("input") as HTMLInputElement;
        editInput.classList.add("edit-input");
        editInput.value = oldTitle;

        editInput.addEventListener(
            "focusout",
            (e) => {
                const target = e.target as HTMLInputElement;
                const newTitle = target.value;

                updateTask(key, newTitle);
                editInput.remove();

                const task = getTaskByKey(key);

                const newTaskElement = createTodoElement(task);
                targetEl!.replaceWith(newTaskElement);
                storeData();
            },
            { once: true }
        );

        targetEl?.append(editInput);
        editInput.focus();
    }
    if (target.closest("button")?.classList.contains("delete-btn")) {
        // 삭제 버튼
        const key = targetEl?.getAttribute("key")!;
        deleteTaskByKey(key);
        targetEl?.remove();
        storeData();
    }
});

// ### 2. 할 일 추가
formEl.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();

    const newTask: Task = {
        key: String(Math.random()),
        title: userInputEl.value,
        checked: false,
    };
    userInputEl.value = "";

    tasks.push(newTask);

    todoListEl.prepend(createTodoElement(newTask));
    storeData();

    taskCountDiv.textContent = `${countLeftTask()} tasks left`;
});

//
function createTodoElement({ key, title, checked }: Task): HTMLLIElement {
    // <li class="todo-item" key=### KEY(RANDOM NUM)  ###>
    //     <input type="checkbox" class="todo-checkbox">
    //     <span class="todo-title">## TITLE ##</span>
    //     <button class="icon-btn edit-btn">
    //       <svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.1 2.3l2.6 2.6-9.1 9.1-2.7.1.1-2.7 9.1-9.1z"></path></svg>
    //     </button>
    //     <button class="icon-btn delete-btn">
    //       <svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="4" x2="13" y2="13"></line><line x1="13" y1="4" x2="4" y2="13"></line></svg>
    //     </button>
    //   </li>

    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.setAttribute("key", key);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");

    checkbox.checked = checked;

    const todoTitle = document.createElement("span");
    todoTitle.textContent = title;
    todoTitle.classList.add("todo-title");

    const editBtn = document.createElement("button");
    editBtn.classList.add("icon-btn");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML =
        '<svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.1 2.3l2.6 2.6-9.1 9.1-2.7.1.1-2.7 9.1-9.1z"></path></svg>';

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("icon-btn");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML =
        '<svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="4" x2="13" y2="13"></line><line x1="13" y1="4" x2="4" y2="13"></line></svg>';

    li.append(checkbox, todoTitle, editBtn, deleteBtn);

    return li;
}

//utils
function getDayOfWeekString(dayOfWeek: number) {
    if (dayOfWeek == 0) return "일";
    if (dayOfWeek == 1) return "월";
    if (dayOfWeek == 2) return "화";
    if (dayOfWeek == 3) return "수";
    if (dayOfWeek == 4) return "목";
    if (dayOfWeek == 5) return "금";
    if (dayOfWeek == 6) return "토";
}

function getTodayString() {
    // 'YYYY. MM. DD (요일)'
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const dayOfWeek = today.getDay();

    return `${year}. ${month > 10 ? month : "0" + month}. ${
        day > 10 ? day : "0" + day
    } (${getDayOfWeekString(dayOfWeek)})`;
}
function getTaskByKey(key: string) {
    return tasks.find((task) => task.key == key)!;
}
function countLeftTask() {
    return tasks.filter((tasks) => !tasks.checked).length;
}
function renderTaskCount() {
    taskCountDiv.textContent = `${countLeftTask()} tasks left`;
}

function toggleTask(event: Event) {
    const target = event.target as HTMLInputElement;
    const key = target.parentElement?.getAttribute("key");

    const task = getTaskByKey(key!);
    task.checked = !task.checked;

    storeData();
    renderTaskCount();
}

function deleteTaskByKey(key: string) {
    tasks.splice(
        tasks.findIndex((task) => task.key == key),
        1
    );

    renderTaskCount();
}
function updateTask(key: string, newTitle: string) {
    getTaskByKey(key).title = newTitle;
}

function storeData() {
    window.localStorage.setItem("kis-Todo", JSON.stringify(tasks));
}

// type
type Task = {
    key: string;
    title: string;
    checked: boolean;
};
