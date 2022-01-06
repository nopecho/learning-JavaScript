// [배열].slice(시작 인덱스, 마지막 인덱스)

const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house']
const slicedWords = words.slice(3,6)
console.log(slicedWords)

//배열 => 문자열 : 문자열 = [배열].join('구분문자')
const fruits = ['apple', 'banana', 'orange']
const fruitsStr = fruits.join('& ')
console.log(fruitsStr);

//문자열 => 배열 : [배열] = 문자열.split('구분문자')
const str = 'I joined swimming club in my highschool'
const strToArray = str.split(' ')
console.log(strToArray)

const sentence = 'I (joined) swimming <club> in my highschool'
const splitedSentence = sentence.split(/[() <>]/)
console.log(splitedSentence)

