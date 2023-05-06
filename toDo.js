const form = document.querySelector("#addTask");
const input = document.querySelector("#task");
const taskList = document.querySelector("#task-list");


form.addEventListener("submit", function (event){
    event.preventDefault();
    console.log(input.value)
    const newTask = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'x';
    newTask.innerText = input.value;
    newTask.appendChild(removeBtn);
    input.value = '';
    taskList.appendChild(newTask);
})
 taskList.addEventListener('click', function(event){
    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove()
    } else if 
        (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed-task')
    }
 });