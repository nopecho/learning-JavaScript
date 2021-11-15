//Quiz_1
let sofaPrice = 360000;

//Quiz_2
let footSize = 275;

//Quiz_3
const PI = 3.14;

//Quiz_4
const name = "nopecho";
const msg = "Happy halloween"
console.log(`${msg}, ${name}`);

//Quiz_5
const letter = "Dear syleemomo. \n\
Hello, syleemomo ^^ \n\
My name is kiki. Your sincere friend \n\
How are you thesedays? \n\
Are you busy or not? \n\
I guess you haven't sleep much last night \n\
I am spending good day thesedays ! \n\
I hope to see you soon. See you later :)"
console.log(letter)

//Quiz_6
const favoriteFruits = ["apple","banana","melon","watermelon"]

//Quiz_7
const favoriteFood = {
    name : "kimchi",
    price : 8900000,
    type : "한국인"
};

//Quiz_8
const hoursForDay = 24;
const bookName = "Harry Potter";
const isChecked = true;

console.log(typeof hoursForDay);
console.log(typeof bookName);
console.log(typeof isChecked);

//Quiz_9
const cities = ["seoul", "deagu", "busan"] ;
const bookInfo = {
    name: 'Harry Potter',
    price: 17000,
    author: 'J.K Rolling'
};

console.log(cities instanceof Array); //좌항이 Array 타입인가?
console.log(bookInfo instanceof Array);

//Quiz_10
const distanceSeoulToBusan = 370;
const sizeOfYourHeight = 275.9;

console.log(Number.isInteger(distanceSeoulToBusan)); //정수면 true
console.log(Number.isInteger(sizeOfYourHeight));

//Quiz_11
const speedOfCar = "37.5 m/s";
const heightOfYourFriend = "289 cm";

const speedOfCar_cast = parenInt(speedOfCar); //숫자형으로 형변환 parenInt()
const heightfYourFriend_cast = parseInt(heightOfYourFriend);

//Quiz_12
const heightOfYourFriend = 289;
const temperature = 13.9;
const fruits = ["apple", "banana", "orange"];

const heightOfYourFriend_cast = heightOfYourFriend.toString(); //문자열로 형변환 .toString()
const temperature_cast = temperature.toString();
const fruits_cast = fruits.toString();

