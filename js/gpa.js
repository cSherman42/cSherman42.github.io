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


function gpa() {    
    
    var boxesChecked = [];
    if (document.getElementById("c1").checked) { boxesChecked[0] = true; }
    if (document.getElementById("c2").checked) { boxesChecked[1] = true; }
    if (document.getElementById("c3").checked) { boxesChecked[2] = true; }
    if (document.getElementById("c4").checked) { boxesChecked[3] = true; }
    if (document.getElementById("c5").checked) { boxesChecked[4] = true; }
    if (document.getElementById("c6").checked) { boxesChecked[5] = true; }
    if (document.getElementById("c7").checked) { boxesChecked[6] = true; }
    
    var grades = [];
    
    grades[0] = document.getElementById("t1").value;
    grades[1] = document.getElementById("t2").value;
    grades[2] = document.getElementById("t3").value;
    grades[3] = document.getElementById("t4").value;
    grades[4] = document.getElementById("t5").value;
    grades[5] = document.getElementById("t6").value;
    grades[6] = document.getElementById("t7").value;
    var sum = 0;
    var gradesChecked = 0;
    for(var i=0; i<7;i++){
        if(boxesChecked[i] && grades[i] > 0) {
            sum += (grades[i] / 10) -4;
            gradesChecked++;
        } else if(!boxesChecked[i] && grades[i] > 0) {
            sum += (grades[i] / 10) - 5;
            gradesChecked++;
        } else {
            continue;
        }
    }
    sum /= gradesChecked;
    
    sum = (sum * 100) / 100;
    document.getElementById("d").value = "GPA: " + Number(sum).toFixed(3);
       
}

