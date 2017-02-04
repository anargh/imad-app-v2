console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML('Click on the image!');
var img = document.getElementById('madi');

function moveRight() {
    var marginLeft = marginLeft + 2;
    img.style.marginLeft = marginLeft + 'px';
}
img.onClick = function() {
    var interval = setInterval(moveRight, 40);
}