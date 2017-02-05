console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML='Click on the image!';


var img = document.getElementById('madi');

var margin = 0;
function moveRight() {
    margin = margin + 2;
    img.style.marginLeft = margin + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 100);
    // img.style.marginLeft = '100px';
};

var btncount=document.getElementById("btn-count"); // Get button
var count = 0; // Intialize counter value

btncount.onclick = function() {
    count=count+1;
    var displayCount = document.getElementById("count");
    displayCount.innerHTML = count.toString();
};