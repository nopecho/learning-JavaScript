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
console.log(sercheAnimal4)
//[배열].indexOf( "검색할 요소" , 검색 위치 ) => index값 리턴 (검색 요소가 없으면 -1 리턴)
