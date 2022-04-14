let todoList=document.getElementById("todo-list")
let addButton=document.getElementById("add-button")
let taskList=[]

addButton.addEventListener("click",addTask)
todoList.addEventListener("focus",blank)

function addTask(){
    let task ={
        id:randomIDGenerate(),
        taskContent:todoList.value,
        isComplete:false
    };
    taskList.push(task);
    console.log(taskList);
    render();
}

function render(){
    let resultHTML = "";
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].isComplete==true){
            resultHTML+=`<div class="task">
            <div class="task-done">${taskList[i].taskContent}</div>
            <div class="icons">
                <i onclick="toggleComplete('${taskList[i].id}')"class="fa-solid fa-check fa-2x"></i>
                <i onclick="deleteTask('${taskList[i].id}')" class="fa-solid fa-trash-can fa-2x"></i>
            </div>
        </div>`;
        }else{
            resultHTML +=`<div class="task">
            <div>${taskList[i].taskContent}</div>
            <div class="icons">
                <i onclick="toggleComplete('${taskList[i].id}')"class="fa-solid fa-check fa-2x"></i>
                <i onclick="deleteTask('${taskList[i].id}')" class="fa-solid fa-trash-can fa-2x"></i>
            </div>
        </div>`;
        }
    }
    document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id){
    console.log("id",id);
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
    console.log(taskList);
}


function deleteTask(id){
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].id==id){
            taskList.splice(i,1)
            break;
        }
    }
    render();
}

function blank(){
    todoList.value=""
}


function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}

    
