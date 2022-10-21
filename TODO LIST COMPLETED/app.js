const listApp = document.querySelector(".list-app")
const inputValue = document.querySelector(".list-app input")
const taskBox = document.querySelector(".task-box")

let todo = JSON.parse(localStorage.getItem("todo-list"))

listApp.addEventListener("keyup", (e) => {
    let userTask = inputValue.value.trim();
    if (e.key == "Enter" && userTask) {
        if (!todo) {
            todo = [];
        }
        inputValue.value = ""
        todo.push(userTask)
        localStorage.setItem("todo-list", JSON.stringify(todo))
        crearapp();
    }
})

function crearapp(){
    let li=""
    if(todo){
        todo.map((item,id)=>{
            li += ` <li class="task">
            <label for="${id}">
            <input type="checkbox" id="${id}" onclick="updateStatus(this)">
            <p>${item}</p>
            </label>
            <i class="fa-solid fa-trash-can" onclick="deleteTask(${id})"></i>
            </li>
            `
        })
    }
    taskBox.innerHTML=li
}
crearapp();
//line-through
function updateStatus(elementTask){
let taskUpdate= elementTask.parentElement.lastElementChild
    if(elementTask.checked){
        taskUpdate.classList.add("line-through");
    }
    else{
        taskUpdate.classList.remove("line-through")
    }
}


//delete task

function deleteTask(deleteUp){
    todo.splice(deleteUp,1);
    localStorage.setItem("todo-list", JSON.stringify(todo))
    crearapp();
}
