var p1 = document.getElementsByClassName('page1');
var p2 = document.getElementsByClassName('page2');

var startingX;

function p1touchStart(evt,i) {
    startingX = evt.touches[0].clientX;
};

function p1touchMove(evt,i) {
    var touch = evt.touches[0];
    var change = startingX - touch.clientX;
    if (change < 0) {
        return;
    }
    p1[i].style.left = '-' + change + 'px';
    p2[i].style.display = 'block';
    p2[i].style.left = (screen.width - change) + 'px';
    evt.preventDefault();
};

function p1touchEnd(evt, i) {
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if (change < threshold) {
        p1[i].style.left = 0;
        p2[i].style.left = '100%';
        p2[i].style.display = 'none';
    } else {
        p1[i].style.transition = 'all .3s';
        p2[i].style.transition = 'all .3s';
        p1[i].style.left = '-100%';
        p2[i].style.left = '0';
        p2[i].style.display = 'block';
    }
};

function p2touchStart(evt,i) {
    startingX = evt.touches[0].clientX;
    p1[i].style.transition = '';
    p2[i].style.transition = '';
    p1[i].style.display = "none";
};

function p2touchMove(evt,i) {
    var touch = evt.touches[0];
    var change = touch.clientX - startingX;
    if (change < 0) {
        return;
    }
    p1[i].style.display = 'block';
    p1[i].style.left = (change - screen.width) + 'px';
    p2[i].style.left = change + 'px';
    evt.preventDefault();
};

function p2touchEnd(evt,i) {
    var change = evt.changedTouches[0].clientX - startingX;
    var half = screen.width / 4;
    if (change < half) {
        p1[i].style.left = '-100%';
        p1[i].style.display = 'none';
        p2[i].style.left = '0';
    } else {
        p1[i].style.transition = 'all .3s';
        p2[i].style.transition = 'all .3s';
        p1[i].style.left = '0';
        p2[i].style.left = '100%';
        // p2.style.display = 'none';
    }
};