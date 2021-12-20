const colorBox = document.querySelector('.color-box')
const colorInput = document.querySelector('#color-input')
const colorList = document.querySelector('.color-list')
const body = document.body;

const colors = [
    'orange',
    'blue',
    'brown',
    'green',
    'red',
    'skyblue'
]

let index = -1;
let prevIndex = -1;

function displayColor(colors){
    for(let color of colors){
        const item = `<div class='color-item'>${color}</div>`
        colorList.innerHTML += item;
    }
}

function typeColor(e){
    if(e.target.value !== ''){
        colorList.classList.add('show')
    }else{
        colorList.classList.remove('show')
    }
}

function setColor(e){
    if(e.target.className === 'color-item'){
        const pick = e.target.innerHTML;
        setBackground(pick);
    }
}

function setBackground(color){
    colorInput.value = color;
    colorList.classList.remove('show')
    colorBox.style.background = color;
}

function selectColor(e){
    console.log(e.keyCode)
    if(e.keyCode && colorList.className === 'color-list show'){
        changeItem(e.keyCode)
        unsetHighLightColor()
        highLightColor()
    }
}

function changeItem(key){
    prevIndex = index;
    if(key === 40){
        index++;
        if(index > colors.length-1){
            index = 0;
        }
    }else if( key === 38){
        index--;
        if(index < 0){
            index = colors.length-1;
        }
    }else if (key === 13){
        const colorItem = document.querySelectorAll('.color-item')[index];
        const pick = colorItem.innerHTML;
        setBackground(pick);
    }
}

function highLightColor(){
    if(index >= 0){
        const colorItem = document.querySelectorAll('.color-item')[index];
        colorItem.classList.add('highlight')
    }
}

function unsetHighLightColor(){
    if(prevIndex >=0){
        const colorItem = document.querySelectorAll('.color-item')[prevIndex];
        colorItem.classList.remove('highlight')
    }
}

function randSetColor(){
    let R = Math.floor(Math.random()*255);
    let G = Math.floor(Math.random()*255);
    let B = Math.floor(Math.random()*255);
    body.style.background = `rgb(${R},${G},${B})`;
}

displayColor(colors);
colorInput.addEventListener('input',typeColor)
colorInput.addEventListener('keyup', selectColor)
colorList.addEventListener('click',setColor)
colorInput.addEventListener('input',randSetColor)



const prev = document.getElementById('prev')
const next = document.getElementById('next')
const cardContainer = document.getElementById('card-container')

function moveToRight(){
    const cards = document.querySelectorAll('.card')
    cardContainer.removeChild(cards[cards.length-1])
    cardContainer.insertBefore(cards[cards.length-1],cardContainer.childNodes[0])
}

function moveToLeft(){
    const cards = document.querySelectorAll('.card')
    cardContainer.removeChild(cards[0])
    cardContainer.appendChild(cards[0])
}

prev.addEventListener('click',moveToRight)
next.addEventListener('click',moveToLeft)