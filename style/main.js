let drone = document.querySelector('.drone');
document.body.onmousemove = function(e) {
    let X = e.pageX;
    let Y = e.pageY;
    drone.style.left = X + 'px';
    drone.style.top = Y + 'px';
}