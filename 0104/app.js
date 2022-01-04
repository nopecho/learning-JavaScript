/*
const seasons = ['spring','summer','autumn'];

const arrLength = seasons.push('winter')

console.log(seasons);
console.log(arrLength);

const multiplyBySix = []

for(let i=0; i<100 ; i++){
    multiplyBySix.push(6*i)
}

console.log(multiplyBySix)

const movies = ['Haprry potter', 'Doctor stranger', 'Iron man', 'Spider man', 'Widow'];
const moviesInfo = [];

movies.forEach( (movie,index) => moviesInfo.push({
    'title' : movie,
    'id' : index,
    'name' : movie+index
}));

console.log(moviesInfo);

const cities = ['seoul','busan','daegu'];
const citiesToAdd = ['deajeon','ulsan'];
cities.push(...citiesToAdd);

console.log(cities);

//[배열].push(추가요소) : 배열에 요소 추가


const companies = ['Samsung', 'LG', 'Google', 'Facebook', 'Amazon'];

console.log(companies.pop());
console.log(companies);
//[배열].pop() : 배열 마지막 요소 제거 후 제거 요소 반환


const fruits = ['apple','orange','watermelon']
const removedFruits = fruits.splice(1,1,'banana','strawberry')

console.log(fruits);
console.log(removedFruits);

//[배열].splice(변경 시작 인덱스, 삭제할 요소의 수, 추가할 요소 1, 추가할 요소2, ...)

const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house'];
words.sort();

console.log(words)
//[배열].sort() : 정렬 함수(기본 오름차순) 숫자를 정렬 할땐 함수를 인자로 받아 조건 비교후 정렬

const numbers = [100,3,349,87,51,84,6,6,5,7,20,474];
numbers.sort((a,b) => a-b)

console.log(numbers)
*/

//quiz 1

const userName = document.getElementById('user-name') // 사용자 이름 입력창
const userEmail = document.getElementById('user-email') // 사용자 연락처 입력창
const userAge = document.getElementById('user-age') // 사용자 나이 입력창
const userList = document.getElementById('user-list') // 사용자 리스트 출력 위치

const submitBtn = document.getElementById('user-add') //  사용자 추가 버튼
const users = [] // 사용자 리스트 배열

// 입력창 유효성 검증
function isValid(str){
    return str !== '' && str !== undefined
}

// user 정보로부터 user 에 대한 DOM 객체 생성 및 반환
function buildElement(user){
    const userEl = document.createElement('div')
   	userEl.className = 'user';
    userEl.innerText = `name: ${user.name}\n age: ${user.age}\n email: ${user.email}`
    return userEl
}

function displayUsers(user){
	userList.appendChild(user)
}

// 입력창 초기화
function initInput(){
    userName.value = ''
    userEmail.value = ''
    userAge.value = ''
}

// 사용자 추가하기
function addUser(){
    const user = {
        name : userName.value,
        age : userAge.value,
        email : userEmail.value,
    };
    if(!isValid(user.name) || !isValid(user.age) || !isValid(user.email)){
        alert("입력창 전부다 입력하세용")
    }else{
        users.push(user)
        displayUsers(buildElement(user))
    }
    console.log(users)
    initInput()
}

submitBtn.addEventListener('click', addUser)

//quiz2
const companies = ['Samsung', 'LG', 'Google', 'Facebook', 'Amazon']
const companiesReversed = []

for(let i=companies.length-1;i>=0;i--){
    companiesReversed.push(companies[i])
}

console.log(companiesReversed)



const friends = [
    {name: 'victoria', age: 13, city: 'seoul'},
    {name: 'sun', age: 34, city: 'busan'},
    {name: 'johseb', age: 25, city: 'busan'},
    {name: 'syleemomo', age: 9, city: 'seoul'},
    {name: 'hannah', age: 41, city: 'daegu'},
    {name: 'shara', age: 37, city: 'seoul'},
    {name: 'martin', age: 28, city: 'daegu'},
    {name: 'gorgia', age: 39, city: 'seoul'},
    {name: 'nana', age: 24, city: 'busan'},
    {name: 'dannel', age: 19, city: 'seoul'},
]

const newFriends = [
    {name: 'Ami', aage: 27, city: 'ulsan'},
    {name: 'gracias', aage: 21, city: 'ulsan'},
]

// //quiz3
// friends.splice(2,0,newFriends[0],newFriends[1])

// console.log(friends)

// //quiz4
// friends.splice(6,2)
// console.log(friends)

// friends.forEach((friend,index) => {
//     if(friend.city === 'seoul'){
//         friends.splice(index,1)
//     }
// })
// console.log(friends)

//quiz6
const findFriendsByAge = friends.filter(f => f.age < 30).sort((a,b) => a.age - b.age);

console.log(findFriendsByAge);

//quiz7
console.log(friends.sort((a,b) => a.name - b.name));
console.log(friends.sort((a,b) => a.name < b.name ? -1 : 1));

//quiz8
const movies = [
    {title: 'Harry Potter', release: '2003-02-22'}, 
    {title: 'Indiana Jhones', release: '2009-01-09'}, 
    {title: 'Terminator', release: '2007-04-11'},
    {title: 'Dracula', release: '2007-04-13'},
    {title: 'Jurassic Park', release: '2007-05-13'},
    {title: 'Iron man', release: '2012-12-18'},
    {title: 'Spider man', release: '2017-03-07'}
]

console.log(movies.sort((a,b) => a.release > b.release ? -1 : 1))

//quiz9

