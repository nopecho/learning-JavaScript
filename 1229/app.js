const animals = ['lion','tiger','cat','dog','pig','cat','duck','cat'];

const sercheAnimal = animals.indexOf('cat')
console.log(sercheAnimal) //2

const sercheAnimal2 = animals.indexOf('cat',3)
console.log(sercheAnimal2) //5

const sercheAnimal3 = animals.indexOf('zzz')
console.log(sercheAnimal3) //-1

const animalToSerch = 'cat'; // 쿼리(query)문 찾고자 하는값
const serchedIndexes = [];
let foundIndex = animals.indexOf(animalToSerch)

while( foundIndex != -1){
    serchedIndexes.push(foundIndex)
    foundIndex = animals.indexOf(animalToSerch, foundIndex+1)
}
console.log(serchedIndexes)

const sercheAnimal4 = animals.lastIndexOf('cat')
console.log(sercheAnimal4) //7
//[배열].indexOf( "검색할 요소" , 검색 위치 ) => index값 리턴 (검색 요소가 없으면 -1 리턴)


const fruits = ['apple', 'banana', 'orange', 'watermelon']

const found = fruits.find(fruit => fruit.length > 6) 
console.log(found)

const foundI = fruits.findIndex(s => s.length > 6)
console.log(foundI)

//[배열].find((콜백함수)) => 배열의 콜백함수 리턴값에 해당되는 배열요소 반환


const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house']

const wordsFilltered = words.filter(word => word.length>5)
console.log(wordsFilltered)
//[배열].filter((콜백함수)) => 각 요소의 콜백함수 조건에 따른 새로운 배열 생성


const numbers = [32, 6, 4, 13, 9, 57]
console.log(numbers.some( num => num%3 ===0))
//[배열].some((콜백함수)) => 각 요소의 콜백함수 조건이 하나라도 true면 true반환

console.log(numbers.every( num => num%3===0))
//[배열].some((콜백함수)) => 각 요소의 콜백함수 조건이 전부 true면 true반환

const currentTime = [3, 8, 23]
const timeStr =  []
currentTime.forEach( time => timeStr.push(`${time<10 ? '0'+ time : time}`) )
console.log(timeStr.join(':'))

const userIDs = ['victoria', 'sun', 'johseb', 'syleemomo', 'hannah', 'shara', 'martin', 'gorgia', 'nana', 'dannel']
userIDs.forEach(user => console.log(user+'@gmail.com'))
//[배열].forEach((콜백함수)) => 배열의 각 요소에 대해 반복해서 실행 (리턴값 없음)

console.log('***************************************')
const userEmails = [
    'victoria@gmail.com',
    'sun@gmail.com',
    'johseb@gmail.com',
    'syleemomo@gmail.com',
    'hannah@gmail.com',
    'shara@gmail.com',
    'martin@gmail.com',
    'gorgia@gmail.com',
    'nana@gmail.com',
    'dannel@gmail.com'
]
const userID = userEmails.map(user => user.split('@')[0])
userID.forEach(user => console.log(user))
//[배열].map((콜백함수)) => 배열 각 요소에 대해 콜백함수 실행 후 콜백함수 리턴값을 새로운 배열로 리턴


const fruitss = ['apple', 'banana', 'peach', 'strawberry', 'watermelon']
const icons = ['🍎', '🍌', '🍑', '🍓', '🍉']
const rootDiv = document.getElementById('root')

const reusltText = icons.map((icon,index) => icon+" "+fruitss[index])

reusltText.forEach(text =>{
    const item = document.createElement('div')
    item.innerText = text
    rootDiv.appendChild(item)
})




