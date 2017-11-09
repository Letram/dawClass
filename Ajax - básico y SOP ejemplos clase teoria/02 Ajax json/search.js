// global variable to manage the timeout
var t;
// Start a timeout with each keypress
function StartSearch() {
if (t) window.clearTimeout(t);
t = window.setTimeout("LiveSearch()",200);
}
// Perform the search
function LiveSearch() {
	// assemble the PHP filename
	query = document.getElementById("searchlive").value;
	filename = "http://serdis.dis.ulpgc.es/~gii-daw/ajax/search.php?query=" + query;
	// DisplayResults will handle the Ajax response
	ajaxCallback = DisplayResults;
	// Send the Ajax request
	ajaxRequest(filename);
}
// Display search results
function DisplayResults() {
// remove old list
	lista = document.getElementById("list");
	div = document.getElementById("results");
	div.removeChild(lista);
// make a new list
	lista = document.createElement("div");
	lista.id="list";
  console.log('resp: ' + ajaxreq.responseText);
	names = JSON.parse(ajaxreq.responseText);

	for (i = 0; i < names.length; i++) {
		op = document.createElement("option");
		name = names[i].nombre;
		op.setAttribute("value",name);
		op.innerHTML=name;
		lista.appendChild(op);
	}
// display the new list
	div.appendChild(lista);
}

// set up event handler
obj=document.getElementById("searchlive");
obj.onkeydown = StartSearch;
