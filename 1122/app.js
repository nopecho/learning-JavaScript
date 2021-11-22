/* 1.기본적인 DOM객체 생성
const div = document.createElement('div')
div.className="container"
div.innerText="Hello world"
div.innerHTML="<img src='' alt=''/> <p>you have happy</p>"

console.log(div) //요소(element) 출력
console.dir(div) //DOM의 전체 프로퍼티 출력

const input = document.createElement('input')
input.className="search-img"
input.type="text"
input.placeholder="search..."

console.log(input)

const img = document.createElement('img')
img.src="https://localhost:3000"
img.alt="javascript"
console.log(img)
*/

/* 2.부모 자식 요소 추가
//div(부모) 요소 생성
const div = document.createElement('div');
div.className='parent';
div.innerText="hello world!"

//img(자식) 요소 생성
const img = document.createElement('img');
img.className='child'
img.src='https://127.0.0.1:5500'
img.alt='photo'

const p = document.createElement('p')
p.className='nopecho'
p.innerText='this is summary'


//부모 요소에 자식 요소 추가 (img, p 순서로 요소 추가)
// div.appendChild(img)
// div.appendChild(p)
div.append(img,p)

console.log(div)
*/


/* 3.마운트
//마운트 할 DOM객체 생성하기
const div = document.createElement('div');
div.className='child';
div.innerText='Hello World'

//HTML문서에 생성한 DOM 객체 실제로 마운트
const root = document.getElementById('root')
console.log(root)
root.appendChild(div)//부모요소인 root DOM객체에 자식 div객체 마운트
*/


/* 4.id 값이 photo인 img 요소 검색하기
const img = document.getElementById('photo')
console.log(img) //img : DOM 객체 
*/


/* 5.마운트 및 getElementById()메소드로 DOM객체 검색
const div = document.createElement('div') //부모 요소
div.className='parent'
div.innerText="Hello World"

const img = document.createElement('img') //자식 요소1
img.id = 'photo'
img.src="http://127.0.0.1:5500"
img.alt='photo'

const p = document.createElement('p') //자식 요소2
p.className="summary"
p.innerText="this is summary"

div.append(img,p) //부모 요소에 자식요소 1,2 추가

const photo = document.getElementById('photo') //마운트 전  photo요소 찾으면 null값
console.log(photo)

const root = document.getElementById('root') //id값이 root인 div요소에 생성한 DOM객체 마운트
root.appendChild(div)

const photo2 = document.getElementById('photo') //마운트 후 photo요소 찾아야 값이 생김
console.log(photo2)
*/


/* 6.querySelector()메소드.CSS선택자로 DOM객체 검색 (쿼리셀렉터는 id왜 class등 css선택자를 파라미터로 받음)
const img = document.querySelector('#photo') //id값이 photo인 요소 검색
console.log(img)

const p = document.querySelector('.summary') //class명이 summary인 요소 검색
console.log(p)
*/


/* 7.querySelector()메소드는 DOM객체의 메소드, DOM객체.(CSS선택자) 의 형태로 사용 가능
const parent = document.querySelector('.parent')
console.log(parent)

const img = parent.querySelector('#photo')
console.log(img)
*/


/* 8.querySelectorAll(CSS선택자) 메소드로 해당 CSS선택자의 모든 요소 검색 (유사 배열 형태 []의 '객체')
const photos = document.querySelectorAll('.photo-item') 
console.log(photos)

const imgs = document.querySelectorAll('.photo-item img')
console.log(imgs[0].src) // [index]로 접근가능

for(let img of imgs){ //java에서 for each문 
    console.log(img.alt)
}
*/

/* 9.getElementsByClassName(class이름) 메소드로 해당 클래스의 요소 가져오기
const photos = document.getElementsByClassName('photo-item')

for(let photo of photos){
    console.log(photo)
}
*/


/* 10.부모요소(Element) 접근 (요소,element 란? <> 태그로 감싸져 있는 것들)
const photos = document.querySelectorAll('.photo-item')
console.log(photos[0].parentElement.parentElement) //parentElement메소드로 부모요소 검색
console.log(photos[0].closest('#photo-container')) //closest(부모요소의 CSS선택자)메소드로 검색
*/

/* 11.자식요소(Element) 접근 (요소,element 란? <> 태그로 감싸져 있는 것들)
const parent = document.querySelector('.parent')
console.log(parent.children) //모든 자식 요소(Element) 반환
console.log(parent.childNodes) //모든 자식의 노드 반환
console.log(parent.firstElementChild) //자식의 첫번째 요소(Element) 반환 <></>태그로 감싸진것들
console.log(parent.firstChild) //자식의 첫번째 노드 반환
console.log(parent.lastElementChild) //자식의 마지막 요소(Element) 반환
console.log(parent.lastChild) //자식의 마지막 노드 반환
*/


/* 12.형제요소(Element) 접근 (형제 요소란? 자식요소에서 같은 위치에 있는 요소들)
const img = document.querySelector('#photo')
console.log(img.nextElementSibling) //자식요소 내에 다음 형제요소(Element)를 반환 
console.log(img.previousElementSibling) //이전 형제요소를 반환
console.log(img.nextSibling) //다음 형제요소의 노드 반환
console.log(img.previousSibling) //이전 형제노드를 반환
*/


/* 13. 검색한 DOM객체의 속성 조회
const img =  document.querySelector('#photo') //img 요소 속성 조회
console.log(img.id)
console.log(img.src)
console.log(img.alt)
console.log('----------------------')

const p = document.querySelector('.summary') //p요소 속성 조회
console.log(p.className)
console.log(p.innerHTML)
console.log('----------------------')

const input = document.querySelector('#search') //input요소 속성 조회
console.log(input.id)
console.log(input.type)
console.log(input.placeholder)
console.log(input.innerHTML)
*/

//연습과제

const root = document.getElementById('root')

const div = document.createElement('div')
div.id='photo-container'

const item = [];
for(i=0;i<5;i++){
    item[i] = document.createElement('div');
    item[i].className='photo-item'
    item[i].innerHTML=`<img src='http://127.0.0.1:5500' alt='photo${i+1}'/>`
    div.appendChild(item[i])
}

root.appendChild(div)

console.log(root)

const imgs = document.querySelectorAll('.photo-item img')
for(let img of imgs){
    console.log(img)
}
console.log(imgs[0].alt)

