var itemArray = [];
var removeArray = [];
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newTask input').value.length ==0){
        alert("Please Enter a Task")
    }
    else{
      let item = document.querySelector('#newTask input').value;
      itemArray.push(item);

        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            ${document.querySelector('#newTask input').value}

            <button class="delete">
            <i class="far fa-trash-alt"></i>
            </button>
        </div>
        `;
    }
    let taskValue = document.querySelector('#newTask input').value
    localStorage.setItem("task-" + taskValue, taskValue)

    initializeTaskDelete()
    
    var tasks = document.querySelectorAll(".task");
    for(var i=0; i<tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }
    document.querySelector("#newTask input").value = "";

}

function remove(){
    alert('hi')
    console.log(itemArray)
}

function initializeTaskDelete(){
    var current_tasks = document.querySelectorAll(".delete");
    console.log(current_tasks)
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            var parent = this.parentNode;
            console.log("thisisparent")
            console.log(parent)
            var child = parent.firstChild;
            console.log("thisischild")
            console.log(child);
            removeArray.push(child);
            console.log(removeArray);
            this.parentNode.remove();
            console.log("task-" + child.data.trim())
            localStorage.removeItem("task-" + child.data.trim())            
            //console.log(itemArray+"hi")
        }
    }
}

function initializedTaskList () {
    for (key in localStorage){
        if(key.includes("task-")){
            console.log(key)
            let taskValue = localStorage.getItem(key)
            console.log(taskValue)
            document.querySelector('#tasks').innerHTML += `
            <div class="task">
                ${taskValue}
    
                <button class="delete">
                <i class="far fa-trash-alt"></i>
                </button>
            </div>
            `;
        }
    }
    initializeTaskDelete()
}








//Loop through the array and then you have to add the onClick attribute to that particular array item and do eveyrthing a
