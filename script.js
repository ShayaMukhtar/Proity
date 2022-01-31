var itemArray = []
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newTask input').value.length ==0){
        alert("Please Enter a Task")    
    }
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newTask input').value}
            </span>
            <button class="delete">
            <i class="far fa-trash-alt"></i>
            </button>
        </div>
        `;
        var item = document.querySelector('#newTask input').value;
 
        itemArray.push(item);
        
        console.log(itemArray)
    }
    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
            remove()
            //console.log(itemArray+"hi")
        }
    }
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

//Loop through the array and then you have to add the onClick attribute to that particular array item and do eveyrthing a
