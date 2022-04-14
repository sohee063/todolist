let todoList=document.getElementById("todo-list")
let addButton=document.getElementById("add-button")
let taskList=[]
let clickall=document.getElementById("all")
let clicking=document.getElementById("ing")
let clickfinished=document.getElementById("finished")
let taskAll=[]
let taskIng=[]
let taskFinished=[]

addButton.addEventListener("click",addTask)
todoList.addEventListener("focus",blank)
clickall.addEventListener("click",render)
clicking.addEventListener("click",alling)
clickfinished.addEventListener("click",allfinished)


function addTask(){
    let task ={
        id:randomIDGenerate(),
        taskContent:todoList.value,
        isComplete:false
    };
    taskList.push(task);
    taskFinished.push(task)
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
            taskIng.push(taskList[i])
            
            break;
        }
    }
    
    
    console.log(taskIng);
    render();
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


function alling(){
    let resultHTML = "";
    for(let i=0;i<taskIng.length;i++){
        resultHTML+=`<div class="task">
        <div>${taskIng[i].taskContent}</div>
        <div class="icons">
            <i onclick="toggleComplete('${taskIng[i].id}')"class="fa-solid fa-check fa-2x"></i>
            <i onclick="deleteTask('${taskIng[i].id}')" class="fa-solid fa-trash-can fa-2x"></i>
        </div>
    </div>`;
    console.log(`id는${taskIng[i].id}`);
    }
    
    document.getElementById("task-board").innerHTML = resultHTML;
    
}

function allfinished(){
    let resultHTML = "";
    for(let i=0;i<taskList.length;i++){
        if(!taskList[i].isComplete){
            taskFinished.push(taskList[i]);
            resultHTML+=`<div class="task">
            <div>${taskFinished[i].taskContent}</div>
            <div class="icons">
                <i onclick="toggleComplete('${taskFinished[i].id}')"class="fa-solid fa-check fa-2x"></i>
                <i onclick="deleteTask('${taskFinished[i].id}')" class="fa-solid fa-trash-can fa-2x"></i>
            </div>
        </div>`;
        console.log(`id는${taskFinished[i].id}`);
        }
       
    
    }
    
    document.getElementById("task-board").innerHTML = resultHTML;

}

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}