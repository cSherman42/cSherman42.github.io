function getLastDate(){
    var last = new Date(document.lastModified);
    var result = (last.getMonth()+1).toString() + "/"+ last.getDate().toString() + "/" + last.getFullYear().toString();
    return result;
}

//main
document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById("dateModified").innerHTML = getLastDate();
    console.log(getLastDate());
    
});

