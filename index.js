var taskInput = document.getElementById("task-input");
var taskForm = document.getElementById("task-form");
var taskList = document.getElementById("task-list");

taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var taskTitle = taskInput.value.trim();
    
if(taskTitle === ""){
    alert("Please enter a task")
    return;
}
    var listItem = document.createElement("li");
    listItem.innerHTML = taskTitle;
    taskList.append(listItem);
    var span = document.createElement('span')
    span.innerHTML =`&times`;
    listItem.appendChild(span)
    taskInput.value = "";

});
taskList.addEventListener('click' , function(e){
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("checked")
    }
    if (e.target.tagName == "SPAN"){
        var li = e.target.parentElement;
        li.remove();
        saveListData();

    }
});
function showListData(){
    taskList.innerHTML = localStorage.getItem('listitem')
}
function saveListData(){
    localStorage.setItem("listItem", taskList.innerHTML);
}
showListData();
