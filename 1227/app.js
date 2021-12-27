const fruits = [];

fruits[0] = 'apple';
fruits[1] = 'banana';
fruits[2] = 'oreange';

fruits.forEach(s => console.log("i like",s))

const fruits2 = [,,,,,]; //빈 배열 길이 , 로 설정 가능
for(s of fruits2){
    console.log("gi",s)
}

const fruits3 = new Array('apple','banana','orange') //new 연산자로 배열 생성 가능
fruits3.forEach(() => {console.log("hi")});

const fruits4 = new Array(3).fill(0) //메서드 채이닝(크기가 3인 배열을 0으로 fill채움)
for(let i=0;i<fruits4.length;i++){
    console.log('hi i like',fruits4[i]+1);
}

//배열 요소 CRUD (생성, 조회, 변경, 삭제)

const moveies = ['haary poter','iron man','spider man','jurassic park','super man'];
console.log('****************')
moveies.forEach( s => console.log("i'm",s)) //forEach문 배열 요소 내부 반복

for(let index in moveies){ //for in문 배열의 index값 참조하면서 반복
    console.log(moveies[index]);
}
console.log('****************')

for(let move of moveies){ //for of문 배열의 각 요소 참조하면서 반복
    console.log(move);
}
console.log('****************')

const copyMoveies = moveies; //주소 복사 (Java의 레퍼런스 참조);
const copyMoveies2 = [...moveies];

moveies[1] = null;
console.log(moveies[1]); //null로 변경
console.log(copyMoveies[1]); //레퍼런스 복사한 배열도 마찬가지로 원본 배열을 참조하고 있으므로 같이 null값으로 바뀜
console.log(copyMoveies2[1]) // 값 복사를 한 배열은 새로운 메모리 할당받음, 원본 데이터 변경해도 변경x
console.log('****************')

