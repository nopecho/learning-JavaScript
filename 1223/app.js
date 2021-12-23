const contents = document.querySelectorAll('.contents')
const section = document.querySelector('#section')


function startAnimation(){
    for(let content of contents){
        content.innerHTML="<img src='data:image/jpeg;base64,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'/>"

        console.log(section.getBoundingClientRect().top)
        if(!content.classList.contains('show') && section.getBoundingClientRect().top < 200 ){
            content.classList.add('show')
        }else if(content.classList.contains('show') && section.getBoundingClientRect().top < 0 || content.getBoundingClientRect().top > 200){
            content.classList.remove('show')
        }
    }
}

window.addEventListener('scroll',startAnimation)

const box = document.getElementById('box');
const gravity = 1;
const FPS = 60;
const limitBottom = 500;
const limitLeft=700;
const limitTop = 300;

let vx = 50;
let vy = 0;
let isJumping = true;
let isDead = false;

function down(){
    const topStyle = window.getComputedStyle(box).top //캐릭터의 y방향
    let top = parseInt(topStyle);
    vy += gravity;
    top += vy;
    if(!isDead && top >= limitBottom){
        top = limitBottom;
        isJumping=true;
    }
    if(top > 2000){
        alert("zzz")
    }
    box.style.top = `${top.toString()}px`
}

const timerId = setInterval(down, 1000/FPS)

function move(e){
    const leftStyle = window.getComputedStyle(box).left;
    const topStyle = window.getComputedStyle(box).top;
    let left = parseInt(leftStyle);
    let top = parseInt(topStyle);

    if(e.keyCode === 39){
        box.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcE9NGEQuAXw1Cg98jbhhhUfM2IpZcWilwHg&usqp=CAU')"
        left += vx;
        if(left > limitLeft){
            isDead=true;
        }
    }
    else if(e.keyCode === 32 || e.keyCode === 38){
        if(isJumping && top >= limitTop){
            vy -= gravity;
            top -= vy;
        }
        if(vy <= 0){
            isJumping = false;
        }
    }
    else if(e.keyCode === 37){
        box.style.backgroundImage= "url('data:image/jpeg;base64,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')"
        if(left>0){
            left-=vx;
        }
    }

    box.style.left=`${left.toString()}px`
    box.style.top = `${top.toString()}px`

}

window.addEventListener('keydown',move)

const fileInput = document.getElementById('file-input');
const imgBox = document.getElementById('img-box');
let num = 0;

function isValid(type){
    return type.split('/')[0] === 'image'
}

function displayImg(src){
    const img = document.createElement('div')
    img.className='img'
    img.innerHTML=`<img src='${src}'/>`
    imgBox.appendChild(img)
}

class file{
    constructor(key){
        this.key = key;
    }
    getkey(){
        return Number(this.key);
    }
}

function rememberImg(e){
    console.log(e.target.result) //reader객체로 읽어온 데이터(이미지 경로)
    console.log(JSON.stringify(e.target.result));
    const key = new file(num);
    localStorage.setItem(key.getkey(),JSON.stringify(e.target.result))
    num++;
}

function uploadImg(e){
    const files = e.target.files
    console.log(files)
    Object.values(files).forEach(f => {
        const reader=new FileReader();
        if(!isValid(f.type)){
                imgBox.innerHTML = "qy"
            return;
        }
        const src = URL.createObjectURL(f)
        displayImg(src)

        reader.onload = rememberImg
        reader.readAsDataURL(f)
    });
}

function renderImg(){
    const fileStored = JSON.parse(localStorage.getItem(num));
    displayImg(fileStored)
}

fileInput.addEventListener('change',uploadImg)
// window.addEventListener('load',renderImg)
prev.addEventListener('click',renderImg);