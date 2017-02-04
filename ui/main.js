console.log('Loaded!');

var btncount=document.getElementById("btn-count"); // Get button
var count = 0; // Intialize counter value

btncount.onClick = function() {
    count=count+1;
    var displayCount = document.getElementById("count");
    displayCount.innerHTML = count.toString();
};