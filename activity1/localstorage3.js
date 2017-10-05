function sendNote() {
    nota = document.getElementById("note");
    if(localStorage.getItem("index") === null)localStorage.setItem("index", "0");
    index = parseInt(localStorage.getItem("index"));
    localStorage.setItem(index, nota.value);
    showNote(index);
    localStorage.setItem("index", ++index);
    /*
    li = document.createElement("li");
    li.innerHTML=nota.value;
    li.setAttribute("id", index);
    li.addEventListener("click", function(){
        localStorage.removeItem(li.id);
        li.parentNode.removeChild(li);
    });
    document.getElementById("notas").appendChild(li);
    */
}

function showNotes(){
    document.getElementById("notas").innerHTML='';
    for (var index in localStorage){
        if(index === "index")continue;
        showNote(index);
    }
}
function showNote(index){
        li = document.createElement("li");
        li.innerHTML=localStorage.getItem(index);
        li.setAttribute("id", index);
        li.setAttribute("onclick", "removeNote(\""+index+"\");");
        document.getElementById("notas").appendChild(li);
        /*
        li.addEventListener("click", function(){
            id = li.id;
            localStorage.removeItem(id);
            showNotes();
        });
        */
}
function removeAllNotes(){
    ul = document.getElementById("notas");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    localStorage.clear();
}

function removeNote(index){
    localStorage.removeItem(index);
    li = document.getElementById(index);
    li.parentNode.removeChild(li);
    showNotes();
}