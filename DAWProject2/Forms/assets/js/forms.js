function showDistanceForm(id, stay_form) {
    distanceForm = $('#distance_form');
    stayForm = $('#stay_form');
    if(document.getElementById(stay_form).style.display!=='none') stayForm.hide(250);;
    distanceForm.show(250);
    //document.getElementById(text).style.display = 'none';
    //btn.style.display = 'none';
}

function showStayForm(id, distance_form) {
    stayForm = $('#stay_form');
    distanceForm = $('#distance_form');
    if(document.getElementById(distance_form).style.display!=='none') distanceForm.hide(250);
    stayForm.show(250);
    //document.getElementById(text).style.display = 'none';
    //btn.style.display = 'none';
}