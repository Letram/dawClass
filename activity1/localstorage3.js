function sendNote() {
    nota = document.getElementById("note");
    if(localStorage.getItem("index") === null)localStorage.setItem("index", "0");
    index = parseInt(localStorage.getItem("index"));
    localStorage.setItem(index, nota.value);
    localStorage.setItem("index", ++index);
    li = document.createElement("li");
    li.innerHTML=nota.value;
    li.setAttribute("id", index);
    li.addEventListener("click", function(){
        localStorage.removeItem(li.id);
        li.parentNode.removeChild(li);
    });
    document.getElementById("notas").appendChild(li);
}

function showNotes(){
    for (var index in localStorage){
        if(index.value == "index")continue;
        li = document.createElement("li");
        li.innerHTML=localStorage.getItem(index);
        li.setAttribute("id", index);
        document.getElementById("notas").appendChild(li);
        li.addEventListener("click", function(){
            localStorage.removeItem(li.getAttribute("id"));
            li.parentNode.removeChild(li);
        });
    }
}

function removeAllNotes(){
    ul = document.getElementById("notas");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    localStorage.clear();
}