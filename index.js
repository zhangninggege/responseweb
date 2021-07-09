var menu = document.querySelector('.menu');
var navList = document.querySelector('.nav-list')
var display = false
menu.onclick = function(){
    display = !display
    navList.style.height = display ? '250px' :0;
    
    
}

var oul = document.querySelector('#pic ul');
var pic = document.getElementById('pic');
var head = oul.firstElementChild.cloneNode(true);
oul.appendChild(head);
var lis = oul.children;
oul.style.width = lis.length*40 + 'vw';

var cn = 0;
function move(){
    oul.style.transition = 'left 0.5s'
    oul.style.left = -cn *40 + 'vw'
}

function autoPlay(){
    cn++;
    if(cn >lis.length -1){
        cn = 0;  
    };
    move()
}

var timer = setInterval(() => {
    autoPlay()
}, 1000);

oul.addEventListener('transitionend',function(){
    if(cn == lis.length -1){
        oul.style.left = 0;
        oul.style.transition = ''
    }
})

pic.onmouseenter = function(){
    clearInterval(timer);
    timer = null;
};
pic.onmouseleave = function(){
    timer = setInterval(() => {
        autoPlay()
    }, 1000);
}