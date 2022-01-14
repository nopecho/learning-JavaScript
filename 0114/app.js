// const Array2D = [];
// const lows = 5;
// const columns = 2;

// for (let i = 0; i < lows; i++) {
//     const element = []
//     for (let j = columns * i; j < columns * i + columns; j++) {
//         element.push(j + 1)
//     }
//     Array2D.push(element)
// }

// const Array2D = new Array(5)
// let i = 1
// console.log(Array2D.map(e => e = [i, i++]))

// const fruits = [['apple', 570], ['orange', 270], ['strawberry', 30]]

// for (let fruit of fruits) {
//     for (let i in fruit) {
//         switch (i) {
//             case '0':
//                 console.log('name', fruits[i]);
//                 break;
//             case '1':
//                 console.log('price', fruits[i]);
//                 break;
//         }
//     }
// }

// for (let fruit of fruits) {
//     fruit.push(Math.floor(Math.random() * 100 + 1))
// }
// console.log(fruits)

// console.log(fruits.toString())

// console.table(fruits)

// const persons = [
//     { name: 'sunrise', age: 23 },
//     { name: 'victoria', age: 19 },
//     { name: 'daniel', age: 28 },
//     { name: 'ammy', age: 21 },
//     { name: 'smith', age: 32 },
// ]

// const personsObj = persons.map(e => e = [e.name, e.age]); //객체배열 to 2중 배열
// console.log(personsObj);

// console.log(personsObj.map(e => e = { name: e[0], age: e[1] })); // 2중배열 to 객체 배열

// console.log(personsObj.flat(1)); //2중배열 flat(평탄화) to 그냥 배열

// const personsArray = personsObj.flat(1);
// const persons2D = []

// const graph = document.getElementById('graph');

// const points = []
// const dx = 1; //degree
// let x = 0; //degree
// let y = 0; //sin
// let radx = 0;

// //sinx값 계산 함수
// function getNextPoint() {
//     radx = x * (Math.PI / 180) //dgree to radian
//     y = Math.sin(radx);
//     points.push([x, y])
//     x += dx
// }

// function displayPoint(point) {
//     const pointEl = document.createElement('div')
//     pointEl.className = 'dot'
//     pointEl.style.left = `${point[0] * 2}px`
//     pointEl.style.top = `${(point[1] * -100) + 100}px`
//     graph.appendChild(pointEl);
// }

// for (let i = 0; i < 360; i++) {
//     getNextPoint()
// }
// console.table(points)

// points.forEach(e => displayPoint(e))

// const signDiv = document.getElementById('sign');

// const sign = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
//     [0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
//     [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ]

// const rows = sign.length;
// const columns = sign[0].length;

// function displaySign(value) {
//     const cell = document.createElement('div')
//     cell.className = value === 0 ? 'cell' : 'cell bright';
//     signDiv.appendChild(cell);
// }

// for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < columns; j++) {
//         displaySign(sign[i][j])
//     }
// }

// const mapObj = L.map('map');
// const hotels = [
//     {
//         "name": "조선 팰리스 럭셔리 컬렉션 호텔, 서울 강남 (Josun Palace, a Luxury Collection Hotel, Seoul Gangnam)",
//         "coordinate": [
//             37.502642,
//             127.041787
//         ]
//     },
//     {
//         "name": "그랜드 인터컨티넨탈 서울 파르나스 (Grand InterContinental Seoul Parnas, an IHG Hotel)",
//         "coordinate": [
//             37.50846,
//             127.061036
//         ]
//     },
//     {
//         "name": "인터컨티넨탈 서울 코엑스 (InterContinental Seoul COEX, an IHG Hotel)",
//         "coordinate": [
//             37.513481,
//             127.057276
//         ]
//     },
//     {
//         "name": "파크 하얏트 서울 (Park Hyatt Seoul)",
//         "coordinate": [
//             37.50845,
//             127.06335
//         ]
//     },
//     {
//         "name": "안다즈 서울 강남 (Andaz Seoul Gangnam)",
//         "coordinate": [
//             37.525265,
//             127.028627
//         ]
//     },
//     {
//         "name": "글래드 라이브 강남 (Glad Live Gangnam)",
//         "coordinate": [
//             37.508184,
//             127.036514
//         ]
//     }
// ];

// function displayHotel(lat, lon, msg) {
//     const map = mapObj.setView([lat, lon], 13);
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map)

//     L.marker([lat, lon]).addTo(map)
//         .bindPopup(msg)
//         .openPopup()
// }

// hotels.forEach(hotel => displayHotel(hotel.coordinate[0], hotel.coordinate[1], hotel.name));

console.log("************Quiz 1************");
const Array2D = [];
for(let i=0; i<5; i++){
    const num = 2
    Array2D.push([num*i+1,num*i+2])
}
console.log(Array2D)


console.log("************Quiz 2************");
function build2DArray(rows, columns){
    return new Array(rows).fill(new Array(columns).fill(0));
}
console.log(build2DArray(7, 3))


console.log("************Quiz 3************");
const fruits = [['apple', 570, 32], ['orange', 270, 65], ['strawberry', 30, 120]];
console.log(fruits.map(e => e = {name : e[0], price : e[1]}));

console.log("************Quiz 4************");
const newFruits = fruits.map(e => e = [e[0], e[1]*e[2]]);
console.log(newFruits);
console.log(newFruits.map(e => e={name : e[0], totalPrice : e[1]}));

console.log("************Quiz 5************");
const graph = document.getElementById('graph');

const points = []
const dx = 1; //degree
let x = 0; //degree
let y = 0; //sin
let radx = 0;

//sin값 계산 함수
function getNextPoint() {
    radx = x * (Math.PI / 180) //dgree to radian
    y = Math.sin(radx);
    points.push([x, y])
    x += dx
}

function displayPoint(point) {
    const pointEl = document.createElement('div')
    pointEl.className = 'dot'
    pointEl.style.left = `${point[0] * 2}px`
    pointEl.style.top = `${(point[1] * -100) + 100}px`
    graph.appendChild(pointEl);
}

function movingPoint(){
    graph.innerHTML = '';
    getNextPoint()
    points.forEach(point => displayPoint(point))
}

console.table(points)
setInterval(movingPoint,5)



