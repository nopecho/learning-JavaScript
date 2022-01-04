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