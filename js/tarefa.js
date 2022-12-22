

function createTask (){
    const elementList = document.getElementById("ul");
    const elementInput = document.getElementById("input");
    const valueTask = elementInput.value;
    console.log("ola", valueTask)
    elementList.innerHTML += `<li id="${valueTask}">${valueTask}<button onclick={taskDelete(${valueTask})}>X</button></li>`
}

function taskDelete(idTask) {
    console.log('delete',idTask)
    document.getElementById(idTask).remove();
}