// let age = prompt("당신의 나이는?","O")
// if(age >= 20 || age < 30){
//     document.write("청년")
// }else{
//     document.write("미성년자")
// }

console.log("hello World") //javascript 의 출력문 console.log
var name = "hyunjun"; // 변수 초기화 키워드1. var
console.log(name);
var name = "nopecho" // var키워드는 같은 변수를 초기화해도 동작 가능(재할당), 신뢰성에 문제로 잘 쓰이지 않음
console.log(name);

let name1 = "hyunjun"; //변수 초기화 키워드2. let
console.log(name1);
name1="your";
console.log(name1);
// let name1 = "gg"  << 오류 구문, let키워드는 변수 선언시 같은 이름의 변수 재할당 불가. 방어적인 프로그래밍 가능, 보통 let으로 변수 선언 권장

const number = 10; //변수 초기화 키워드3. const
const color = 0x00fff000;
const unmast = 0o0074;
const tmepaure = 21.7;
const e = -2.9e-37;
const inf = Infinity;
const ninf = -Infinity;
const nan = NaN; //Not a Numer
let Array = [number,color,unmast,tmepaure,e,inf,ninf,nan]

for(i=0;i<Array.length;i++){ //const키워드는 상수 키워드다. 조회(읽기)만 가능
    console.log(Array[i])
}

const age = 26;
const message = "she dosen't look like a girly type";
console.log(message);
const message1 = 'she dosen\'t look like a girly type'; //문자열 이스케이프 \ << 단축키로 사용
console.log(message1);
const message2 = `Happy birthday! ${name}!! Your age is ${age}`; // `템플릿 리터럴(template literal)`안에 `${변수명}`으로 문자열 연결 가능
console.log(message2);

const person={ //객체 리터럴 선언(빈 객체 선언, 여러 데이터 타입 저장) 
    name :'Hyun Jun', //문자열
    age : 26, //숫자
    isActive:false //불리언
}; 
console.log(person); //객체를 콘솔로 출력시 순서없음, 해시테이블에서 값을 받아오기 때문

const number1 = [0,1,3,3,4,5,8,7,1,2,10]; //배열 리처널 선언 (배열도 일종의 객체)
console.log(number1);

const newNumber = ["Apple","0","8",true,false,"1.557"]; // <<이처럼 데이터타입 여러개 저장 가능
console.log(newNumber);

const isLoading = true; 
const person1 = null; //null(값이 없는)
let city; // undefined(값을 찾을 수 없다)
console.log(isLoading);
console.log(person1);
console.log(city);

console.log(typeof isLoading); //typeof 키워드 : typeof 뒤에 오는 변수의 데이터타입 확인
console.log(typeof city);
console.log(typeof person); //객체 타입
console.log(typeof newNumber); //배열 타입 (객체와 배열 타입은 typeof로 확인을 해도 둘다 object타입으로 출력됨. 객체와 배열을 구분하려면 아래와 같이 타입 검사)

const fruits = ["apple", "banana", "orange"] 
const car = { 
    name: "Grandier",
    year: 2016,
    owner: 'syleemomo' };

// console.log(Array.isArray(fruits));
// console.log(Array.isArray(car));

// console.log(fruits instanceof Array);
// console.log(car instanceof Array);

//숫자형의 구분
const age2 = 27; //정수형
const temperature = 27.7; //실수형

console.log(Number.isInteger(age)); //Number클래스의 .isInteger() 메소드로 정수면 true반환 
console.log(Number.isInteger(temperature)); //실수면 false반환

//자료형 캐스팅
const age3= "32"; //문자열 타입
const temperature2="37.6";
const msg = "Hello World 4056"

const age3_cast=Number(age3); //문자열을 Number키워드로 숫자형으로 변환
const temperature2_cast=Number(temperature2);
const msg_cast=Number(msg);

console.log(typeof age3); //해당 타입은 String
console.log(typeof age3_cast); //해당 타입은 number
console.log(age3_cast); //number 타입의 32 출력

console.log(typeof temperature2);
console.log(typeof temperature2_cast);
console.log(temperature2_cast);

console.log(typeof msg);
console.log(typeof msg_cast);
console.log(msg_cast);

//문자열에서 숫자만 숫자형으로 타입 변환
const msg2 = "4056 Hello Wolrd"
const msg_cast2 = parseInt(msg); //문자열 뒤에 숫자가 있기때문에 형변환 실패 (NaN)
const msg_cast3 = parseInt(msg2); //문자열형에서 숫자만 추출해서 형변환(숫자가 문자열 앞에 있어야 적용)
console.log(msg_cast2); 
console.log(msg_cast3);

//원시 타입과 객체 타입 형변환
const age4=50; //정수형
const temp = 23.8;  //실수형
const isLoading2=true; //불리언형
const newNumber2=[4,0,5,6]; //배열
const person2 = { //객체
    name:'nopehco',
    city:'daegu'
};
const age4_cast = age4.toString(); //정수형을 String으로 형변환
const temp_cast = temp.toString(); //실수형을 String으로 형변환
const isLoading2_cast = isLoading2.toString(); //불리언타입을 String으로 형변환
const newNumber2_cast = newNumber2.toString(); //배열을 String으로 형변환
const person2_cast = person2.toString(); //객체를 String으로 형변환

// const age4_cast = Boolean(age4); //정수형을 boolean으로 형변환
// const temp_cast = Boolean(temp); //실수형을 boolean으로 형변환
// const newNumber2_cast = Boolean(newNumber2); //배열을 boolean으로 형변환
// const person2_cast = Boolean(person2); //객체를 boolean으로 형변환

//자동 형변환
const result = 31+"3"; //정수형을 문자열로 자동 형변환
console.log(result);

const result2 = 33*"3"; // 문자열을 정수형으로 자동 형변환
console.log(result2);

//변수 호이스팅 : 코드를 실행하기 전 변수,함수 선언이 파일의 맨 위로 끌어올려진것같은 현상.
console.log(a);
