
const list = document.querySelectorAll('#close_open');
const open1 = document.getElementById("open1");
const close = document.getElementById("close");
function toggleMenu(e) {
    e.stopPropagation();
    open1.classList.toggle('open');
}           
for(let e of list) {
    e.addEventListener('click', toggleMenu);
}
function closeSub() {
    if(open1.classList.contains("open")) {
        close.addEventListener('click', toggleMenu) 
    }
}
setInterval(closeSub, 500);

