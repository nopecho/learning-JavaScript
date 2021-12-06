const photos = document.querySelector('#photos')
const options = document.querySelectorAll('.options');

let timer = null;
let count = 0;

function removeToggle(){
    for(let option of options){
        option.classList.remove('selcet')
    }
}

function findIndex(target){
    for(i=0;i<options.length;i++){
        if(options[i] === target) return i
    }
}

function changePosition(e){
    removeToggle()
    if(e == null){
        count = count > options.length-2 ? 0 : count+1;
    }else{
        const target = e.target;
        count = findIndex(target)
        clearInterval(timer);
    }
    photos.style.marginLeft = count * -500 + 'px';
    options[count].classList.add('selcet');
}

function startCarousel(){
    timer=setInterval(changePosition,1000);
}

function stopAndGo(){
    if( timer == null){
        timer=setInterval(changePosition,1000);
        return;
    }
    clearInterval(timer);
    timer = null;
}

window.addEventListener('load',startCarousel);
photos.addEventListener('click',stopAndGo);
for(let option of options){
    option.addEventListener('click',changePosition);
}




















const menuContainer = document.querySelector('#menu-container');

function openMenu(e){
    const target = e.target;
    if(target.className === 'title'){
        target.nextElementSibling.classList.toggle('open')
    }
}

menuContainer.addEventListener('click',openMenu)






// const boxs = document.querySelectorAll('.box')
// const item=[]
// for( let box of boxs){
//     item.push(box)
// }
// const moves = [
//     {pos : 'margin-bottom',length:50},
//     {pos : 'margin-bottom', length:0}
// ]
// let prev=0;
// let index=0;
// let select=0;

// function moveBox(){
//     let pos = moves[select].pos;
//     let length = moves[select].length;
//     prev=index;
//     item[prev].style[pos] = length + 'px';
//     select++;
//     item[index].style[pos] = length + 'px';
//     index++;
// }

// function startMove(){
//     setInterval(moveBox,500)
// }

// window.addEventListener('load',startMove)
