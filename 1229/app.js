// const animals = ['lion','tiger','cat','dog','pig','cat','duck','cat'];

// const sercheAnimal = animals.indexOf('cat')
// console.log(sercheAnimal) //2

// const sercheAnimal2 = animals.indexOf('cat',3)
// console.log(sercheAnimal2) //5

// const sercheAnimal3 = animals.indexOf('zzz')
// console.log(sercheAnimal3) //-1

// const animalToSerch = 'cat'; // 쿼리(query)문 찾고자 하는값
// const serchedIndexes = [];
// let foundIndex = animals.indexOf(animalToSerch)

// while( foundIndex != -1){
//     serchedIndexes.push(foundIndex)
//     foundIndex = animals.indexOf(animalToSerch, foundIndex+1)
// }
// console.log(serchedIndexes)

// const sercheAnimal4 = animals.lastIndexOf('cat')
// console.log(sercheAnimal4) //7
// //[배열].indexOf( "검색할 요소" , 검색 위치 ) => index값 리턴 (검색 요소가 없으면 -1 리턴)


// const fruits = ['apple', 'banana', 'orange', 'watermelon']

// const found = fruits.find(fruit => fruit.length > 6) 
// console.log(found)

// const foundI = fruits.findIndex(s => s.length > 6)
// console.log(foundI)

// //[배열].find((콜백함수)) => 배열의 콜백함수 리턴값에 해당되는 배열요소 반환


// const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house']

// const wordsFilltered = words.filter(word => word.length>5)
// console.log(wordsFilltered)
// //[배열].filter((콜백함수)) => 각 요소의 콜백함수 조건에 따른 새로운 배열 생성


// const numbers = [32, 6, 4, 13, 9, 57]
// console.log(numbers.some( num => num%3 ===0))
// //[배열].some((콜백함수)) => 각 요소의 콜백함수 조건이 하나라도 true면 true반환

// console.log(numbers.every( num => num%3===0))
// //[배열].some((콜백함수)) => 각 요소의 콜백함수 조건이 전부 true면 true반환

// const currentTime = [3, 8, 23]
// const timeStr =  []
// currentTime.forEach( time => timeStr.push(`${time<10 ? '0'+ time : time}`) )
// console.log(timeStr.join(':'))

// const userIDs = ['victoria', 'sun', 'johseb', 'syleemomo', 'hannah', 'shara', 'martin', 'gorgia', 'nana', 'dannel']
// userIDs.forEach(user => console.log(user+'@gmail.com'))
// //[배열].forEach((콜백함수)) => 배열의 각 요소에 대해 반복해서 실행 (리턴값 없음)

// console.log('***************************************')
// const userEmails = [
//     'victoria@gmail.com',
//     'sun@gmail.com',
//     'johseb@gmail.com',
//     'syleemomo@gmail.com',
//     'hannah@gmail.com',
//     'shara@gmail.com',
//     'martin@gmail.com',
//     'gorgia@gmail.com',
//     'nana@gmail.com',
//     'dannel@gmail.com'
// ]
// const userID = userEmails.map(user => user.split('@')[0])
// userID.forEach(user => console.log(user))
// //[배열].map((콜백함수)) => 배열 각 요소에 대해 콜백함수 실행 후 콜백함수 리턴값을 새로운 배열로 리턴


// const fruitss = ['apple', 'banana', 'peach', 'strawberry', 'watermelon']
// const icons = ['🍎', '🍌', '🍑', '🍓', '🍉']
// const rootDiv = document.getElementById('root')

// const reusltText = icons.map((icon,index) => icon+" "+fruitss[index])

// reusltText.forEach(text =>{
//     const item = document.createElement('div')
//     item.innerText = text
//     rootDiv.appendChild(item)
// })


//quiz.1
// const lyrics = `
// Sorry Sorry Sorry Sorry
// 내가 내가 내가 먼저
// 네게 네게 네게 빠져
// 빠져 빠져 버려 baby
// Shawty Shawty Shawty Shawty
// 눈이 부셔 부셔 부셔
// 숨이 막혀 막혀 막혀
// 내가 미쳐 미쳐 baby
// 바라보는 눈빛 속에
// 눈빛 속에 나는 마치
// 나는 마치 뭐에 홀린 놈
// 이젠 벗어나지도 못해
// 걸어오는 너의 모습
// 너의 모습 너는 마치
// 내 심장을 밟고 왔나봐
// 이젠 벗어나지도 못해
// 어딜 가나 당당하게
// 웃는 너는 매력적
// 착한 여자 일색이란
// 생각들은 보편적
// 도도하게 거침 없게
// 정말 너는 환상적
// 돌이킬 수 없을만큼
// 네게 빠져 버렸어
// Sorry Sorry Sorry Sorry
// 내가 내가 내가 먼저
// 네게 네게 네게 빠져
// 빠져 빠져 버려 baby
// Shawty Shawty Shawty Shawty
// 눈이 부셔 부셔 부셔
// 숨이 막혀 막혀 막혀
// 내가 미쳐 미쳐 baby
// 딴딴 딴따다 따 따란딴
// 딴딴 딴따다 따
// 네게 반해버렸어 baby
// 딴딴 딴따다 따 따란딴
// 딴딴 딴따다 따 따라빠빠라
// Hey girl gir gir gir gir girl i
// 눈만뜨면 니 생각 Hey girl
// 자나깨나 사실 너 하나 밖에 안보여
// 말해봐 니 맘에 내가
// 말해봐 자리 잡았는지
// 말해줘 내게 말해줘
// 나는 바보 바보 바보
// 주변 사람들은 말해
// 내가 너무 적극적
// 이 세상에 그런 사람
// 어디 한둘이냐고
// 그걸 몰라 그녈 몰라
// 시기하며 하는 말
// 내가 부럽다면 그건
// 그대들이 지는 거
// Sorry Sorry Sorry Sorry
// 내가 내가 내가 먼저
// 네게 네게 네게 빠져
// 빠져 빠져 버려 baby
// Shawty Shawty Shawty Shawty
// 눈이 부셔 부셔 부셔
// 숨이 막혀 막혀 막혀
// 내가 미쳐 미쳐 baby
// 딴딴 딴따다 따 따란딴
// 딴딴 딴따다 따
// 네게 반해버렸어 baby
// 딴딴 딴따다 따 따라라라
// 딴딴 딴따다 따 따라빠빠라
// Lets dance dance dance dance
// Lets dance dance dance dance
// Lets dance dance dance dance dance dance
// Hey 이제 그만 내게 와줄래
// 정말 미칠 것만 같아 yeah
// 난 너만 사랑하고 싶어
// 절대 다시 한눈 팔 생각 없어 hey hey hey.
// 애인이라기보다 친구같은
// 내가 되고 싶어
// 너의 모든 고민 슬픔
// 함께 간직하고파
// 다시 없을 만큼 만큼
// 너를 너무 사랑해
// 내가 바란 사람 니가 바로 그
// That that that girl
// Sorry Sorry Sorry Sorry
// 내가 내가 내가 먼저
// 네게 네게 네게 빠져
// 빠져 빠져 버려 baby
// Shawty Shawty Shawty Shawty
// 눈이 부셔 부셔 부셔
// 숨이 막혀 막혀 막혀
// 내가 미쳐 미쳐 baby
// `
// const keyword1=lyrics.match(/Sorry/g)
// console.log(keyword1.length)

// const keyword2 =lyrics.match(/부셔/g)
// console.log(keyword2.length)

// // function searchWord(keyword, n){
// // 	const lyricsArray = []
// //     let findIndex = lyrics.indexOf(keyword)
// //     while(findIndex != -1){
// //         lyricsArray.push(findIndex)
// //         findIndex = lyrics.indexOf(keyword,findIndex+n)
// //     }
// //     return lyricsArray.length;
// // }

// // console.log(searchWord(keyword1, keyword1.length))
// // console.log(searchWord(keyword2, keyword2.length))

// //quiz2
// const movies = [
//     {title: 'Harry Potter', release: '2003-02-22'}, 
//     {title: 'Indiana Jhones', release: '2009-01-09'}, 
//     {title: 'Jurassic Park', release: '2007-04-13'},
//     {title: 'Iron man', release: '2012-12-18'},
//     {title: 'Spider man', release: '2017-03-07'}
// ]

// const movieRelease = movies.find( movie => {
//     const year = movie.release.split('-')[0]
//     if(year >= 2005 && year <= 2010){
//         return movie;
//     }
// })
// console.log(movieRelease)

// //quiz3
// const moiveName = movies.find( movie => movie.title.includes('man') )
// console.log(moiveName)

// //quiz4
// const moiveNameofJ = movies.find( movie => {
//     const year = movie.release.split('-')[0]
//     if(year < 2010 && movie.title.startsWith('J')) return movie;
// })
// console.log(moiveNameofJ)

// //quiz5
// const words = [
//     'abc',
//     'animal',
//     'fruit',
//     'abba',
//     'abcba',
//     'location',
//     'radar',
//     'madam',
//     'mario',
//     'level'
// ]

// const wordsAtA = words.filter(word => word.includes('a') )
// wordsAtA.forEach(word => console.log(word))

// //quiz6 , 7
// // const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 
// // fetch(API_URL)
// // .then(function(res){
// //     return res.json()
// // })
// // .then(function(products){
// //     // console.log(products)
// //     console.log('******quiz 6******')

// //     const findProducts = products.filter(p => p.product_type === 'mascara')
// //     .filter(p => parseInt(p.price) < 10)
// //     console.log(findProducts)

// //     console.log('******quiz 7******')

// //     const findProducts2 = products.filter(p => p.product_type === 'lipstick')
// //     .filter(p => p.rating >4 && p.rating <5)
// //     console.log(findProducts2)
// // })

// //quiz8
// console.log('******quiz 8******')
// const friends = [
//     {name: 'victoria', age: 13, city: 'seoul'},
//     {name: 'sun', age: 34, city: 'busan'},
//     {name: 'johseb', age: 25, city: 'busan'},
//     {name: 'syleemomo', age: 9, city: 'seoul'},
//     {name: 'hannah', age: 41, city: 'daegu'},
//     {name: 'shara', age: 37, city: 'seoul'},
//     {name: 'martin', age: 28, city: 'daegu'},
//     {name: 'gorgia', age: 39, city: 'seoul'},
//     {name: 'nana', age: 24, city: 'busan'},
//     {name: 'dannel', age: 19, city: 'seoul'},
// ]
// const findFriends = friends.filter(f => f.city === 'seoul')
// .filter(f => f.age < 30)
// console.log(findFriends)

// //quiz9
// console.log('******quiz 9******')

// const findCity = {
//     seoul : 0,
//     busan : 0,
//     daegu : 0
// }
// friends.forEach(f => {
//     if(f.city === 'seoul'){
//         findCity.seoul+=1
//     }else if( f.city === 'busan'){
//         findCity.busan+=1
//     }else if( f.city === 'daegu'){
//         findCity.daegu+=1
//     }
// })
// console.log(findCity)

// //quiz10
// console.log('******quiz 10******')
// console.log(friends.some(f => f.age > 40))

// //quiz11
// console.log('******quiz 11******')
// const users = [
//     {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
//     {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
//     {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'},
//     {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'},
//     {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'},
//     {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
//     {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'},
//     {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
//     {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
//     {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
// ]

// const findUser = users.filter(user => user.age > 0 && user.age%1 === 0)
// .filter(user => user.email.includes('@') && user.email.includes('.com'))
// console.log(findUser)

//quiz12
console.log('******quiz 12******')

const rootDiv = document.getElementById('root')


const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 


function buildElement(product){
    const item = document.createElement('div')
    item.className = 'product'
    
    const img = document.createElement('img')
    img.className = 'product-img'
    img.src = product.image_link
    
    const name = document.createElement('div')
    name.className = 'product-name'
    name.innerText = product.name+"\n("+product.price+"$)"
    
    const description = document.createElement('div')
    description.className = 'product-description'
    description.innerText = product.description
    
    const type = document.createElement('div')
    type.className = 'product-type'
    type.innerText = product.product_type

    item.setAttribute('id',`${product.price}`)

    item.append(img,name,description,type)
    return item
}

function displayProduct(product){
    rootDiv.append(product)
}

// 01-04 quiz 9
fetch(API_URL)
.then(function(res){
    return res.json()
})
.then(function(products){
    const productsRefined = products.map(buildElement)
    productsRefined.forEach(displayProduct)

    productsArray = [...products];
    sortProductsArray = products.sort((a,b) => a.price - b.price );
    result = [...productsArray];
    sortResult = [...sortProductsArray];
})

const sortBtn = document.querySelector('.sort-btn')
let productsArray = []; //원본 배열
let sortProductsArray =[]; //원본 정렬 배열
let result = []; //돔 조작 
let sortResult = [];
let isSorted = false;

function removeProducts(){
    const origin = document.querySelectorAll('.product');
    origin.forEach(e => e.remove())
}


function sortProducts(e){
    const btn = e.target;

    removeProducts()
    if(!isSorted){
        btn.innerText = '정렬됨'
        isSorted = true;
        sortResult
        .sort((a,b) => a.price - b.price )
        .forEach(p => displayProduct(buildElement(p)))
    }else{
        btn.innerText = '정렬안됨'
        isSorted = false;
        result.forEach(p => displayProduct(buildElement(p)));
    }
}

sortBtn.addEventListener('click',sortProducts)

// 01-04 quiz 10

const searchInput = document.querySelector('#search-input')

function searchProductByType(e){
    const search = e.target.value
    removeProducts();
    if(!isSorted){
        result = productsArray
        .filter(p => p.product_type.includes(search))
        .forEach(p => displayProduct(buildElement(p)));
    }else{
        sortResult = sortProductsArray
        .filter(p => p.product_type.includes(search))
        .forEach(p => displayProduct(buildElement(p)));
    }
}

searchInput.addEventListener('input',searchProductByType)