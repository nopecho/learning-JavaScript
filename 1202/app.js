// function popup(e){
//     alert('팝업')
//     const target = e.target;
//     target.classList.add('circle')
// }
// function setBtnColor(){
//     popUpBtn.style.background = 'orange';

// }
// function unsetBtnColor(){
//     popUpBtn.style.background = '';
// }

// function move(e){
//     const X = e.clientX
//     const Y = e.clientY
//     popUpBtn.style.left = X+'px'
//     popUpBtn.style.top = Y+'px'
// }

// const popUpBtn = document.querySelector('.popup');
// popUpBtn.addEventListener('click',popup);
// popUpBtn.addEventListener('mouseover',setBtnColor);
// popUpBtn.addEventListener('mouseout',unsetBtnColor);

// window.addEventListener('click',move)


// function login(e){
//     if(id.value === '' || password.value === ''){
//         e.preventDefault()
//         p.innerText="아이디 비밀번호 확인"
//     }
//     alert("login is processing.....")
// }

// function setSubmitColor(e){
//     console.log(e.target);
//     e.target.style.background = 'skyblue';
// }

// function unsetSubmitColor(e){
//     e.target.style.background = '';
// } 

// function subBtn(e){
//     e.target.classList.add('cricle');
// }

// const form = document.querySelector('form')
// const id  = document.querySelector('#user-id')
// const password = document.querySelector('#user-password')
// const sub = document.querySelector('.user-submit')
// const p = document.querySelector('p')

// sub.addEventListener('click',subBtn)
// sub.addEventListener('mouseover',setSubmitColor)
// sub.addEventListener('mouserout',unsetSubmitColor)
// form.addEventListener('submit',login)

// const instantMsg = document.querySelector('.instant-msg');

// function showMsg(){
//     instantMsg.classList.add('show');
// }
// function hideMsg(){
//     instantMsg.classList.remove('show');
// }

// setTimeout(showMsg,1000);
// setTimeout(hideMsg,3000);



function changeFormat(t){
    return t < 10 ? `0${t}` : t ;
}

function getTime(){
    const time = new Date();
    const hours = time.getHours(); //시
    const min = time.getMinutes(); //분
    const sec = time.getSeconds(); // 초
    clock.innerText=`${changeFormat(hours)}:${changeFormat(min)}:${changeFormat(sec)}`
}

function move(e){
    const X = e.clientX;
    const Y = e.clientY;
    clock.style.left = X+'px';
    clock.style.top = Y+'px';
}

const clock = document.getElementById('clock')

window.addEventListener('mousemove',move)
setInterval(getTime,1000)

const ledContainer = document.getElementById('led-container')
const sidebar = document.querySelector('.sidebar')

function lightOn(e){
    const target = e.target;
    if(target.className === 'led'){
        target.classList.add('on')
    }else if(target.className === 'led on'){
        target.classList.remove('on')
    }
    if(sidebar.className === 'sidebar'){
        sidebar.classList.add('show')
    }else if(sidebar.className === 'sidebar show'){
        sidebar.classList.remove('show')
        
    }
}
ledContainer.addEventListener('click',lightOn)


function getRandColor(){
    const R = Math.floor(Math.random()*255);
    const G = Math.floor(Math.random()*255);
    const B = Math.floor(Math.random()*255);
    return `rgb(${R},${G},${B})`
}
function changeBg(e){
    const target = e.target;
    target.style.background = getRandColor();
}

function randOn(){
    if(randBox.className === 'rand'){
        randBox.classList.add('zoom')
        menu[0].innerText='ZOOM OUT & CLEAR'
    }else if(randBox.className === 'rand zoom'){
        randBox.classList.remove('zoom')
        menu[0].innerText='ZOOM IN'
        clearInterval(interval);
        for(let tile of tiles){
            tile.style.background='rgba(0,0,0,0)';
        }
    }
}

function createElementDIVofClass(classs){
    const value = document.createElement('div');
    value.className=classs;
    return value;
}

function autoChangeColor(){
    for(let tile of tiles){
        tile.style.background = getRandColor();
    }
}

function autoChangeColorOnOff(){
    if(menu[2].innerText === 'AUTO COLOR START'){
        menu[2].innerText='STOP'
        interval =setInterval(autoChangeColor,100);
    }else if(menu[2].innerText === 'STOP'){
        menu[2].innerText='AUTO COLOR START'
        clearInterval(interval);

    }
}

const randBox = document.querySelector('.rand')
const menu = document.querySelectorAll('.menu')


for(i=0; i < 9; i++){
    const randTile = createElementDIVofClass('rand-tile');
    randBox.appendChild(randTile);
}
const tiles = document.querySelectorAll('.rand-tile')


for(let tile of tiles){
    tile.addEventListener('click',changeBg)
}
var interval = null;
menu[0].addEventListener('click',randOn)
menu[2].addEventListener('click',autoChangeColorOnOff)

