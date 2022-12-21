function addTask() {
    
    let task = document.getElementById("Task").value;
    let list = document.getElementById("MyList").innerHTML;

    list += "<li>" +task+ "</li>"

    document.getElementById("MyList").innerHTML = list;
}
