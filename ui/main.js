console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML='Click on the image!';


var img = document.getElementById('madi');

var marginLeft = 0;
function moveRight() {
    var marginLeft = marginLeft + 2;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 40);
};

var btncount=document.getElementById("btn-count"); // Get button
var count = 0; // Intialize counter value

btncount.onclick = function() {
    count=count+1;
    var displayCount = document.getElementById("count");
    displayCount.innerHTML = count.toString();
};