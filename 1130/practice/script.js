function createElementDIVofID(id){
    const value = document.createElement('div');
    value.id=id;
    return value;
}
function createElementDIVofClass(classs){
    const value = document.createElement('div');
    value.className=classs;
    return value;
}

const body = document.querySelector('body');

const nav = createElementDIVofID('nav');

const menu = createElementDIVofID('menu'); 
for(i=0;i<3;i++){
    const bar = createElementDIVofClass('bar'); //1.1.1
    menu.appendChild(bar);
}

const screenMode = createElementDIVofID('screen-mode'); //1.2

const circleBtn = createElementDIVofID("circle-btn"); //1.2.1

const profileMenu = createElementDIVofID('profile-menu');

const profileImg = document.createElement('img');
profileImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFYsGohywScpQ5TXRV8KbmBuo3Ccyd7xXHg&usqp=CAU"
profileImg.alt="";

screenMode.appendChild(circleBtn);
profileMenu.appendChild(profileImg);
nav.append(menu,screenMode,profileMenu);

const title = createElementDIVofID('title');

const center = createElementDIVofID('center');

const heading = createElementDIVofID('heading');
heading.innerHTML= "<h1>My photo gallery</h1>\n<h4>my old memories from my life</h4>";

const search = createElementDIVofID('search');

const searchInput = document.createElement('input');
searchInput.type = "text";
searchInput.placeholder = "Search Photo!!";

search.appendChild(searchInput);
center.append(heading,search);
title.appendChild(center);

const photoList=createElementDIVofID('photo-list');

for(i=0;i<9;i++){
    const photoContainer = createElementDIVofClass('photo-container');
    const photoCard = createElementDIVofClass('photo-card');
    const photoCardImg = document.createElement('img');
    photoCardImg.src ="data:image/jpeg;base64,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"
    photoCardImg.alt="";
    const photoName = document.createElement('div');
    photoName.className='photo-name';
    photoName.innerText="이름ㅋㅋ"

    photoCard.appendChild(photoCardImg);
    photoContainer.append(photoCard,photoName);
    photoList.appendChild(photoContainer);
}

const modalWindow = createElementDIVofClass('modal-window');

const modalHeader = createElementDIVofID("header");
modalHeader.innerText="Hell"

const modalBody = createElementDIVofID("body");
const modalBodyP = document.createElement('p');
modalBodyP.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error modi nesciunt facilis tempora qui temporibus, odio dolores reiciendis, quis voluptate ducimus quam. Voluptatum omnis, rem quam porro ipsam nam dolorum.\nLaudantium aliquam suscipit, nobis exercitationem neque inventore incidunt quos possimus numquam! Temporibus adipisci, illum in fuga earum magnam consequatur minima. Neque, labore esse tempora tenetur doloribus beatae. Facere, dolorum incidunt?\nNulla facere earum fuga doloremque magni. Aspernatur excepturi ipsam commodi in ullam? Dolore, ipsa, a dignissimos, vel nulla alias accusantium qui voluptatibus officia minus est libero! Adipisci, fugit? Architecto, quia!";

const modalFooter = createElementDIVofID('footer');

const modalFooterBtn = document.createElement('button');
modalFooterBtn.textContent='Close';

modalBody.appendChild(modalBodyP);
modalFooter.appendChild(modalFooterBtn);
modalWindow.append(modalHeader,modalBody,modalFooter);

body.append(nav,title,photoList,modalWindow);

//연습과제 3
const changeH4 = document.querySelector('h4');
changeH4.innerText="브라우저에서의 자바스크립트 연습과제3"

//연습과제 4
const changeProfile = document.querySelector('#profile-menu')
changeProfile.firstElementChild.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToEBkOHPtlZFQyhoRNQpL36YEbXW8iAlW_ug&usqp=CAU";

//연습과제 5
const changePhoto = document.querySelector('#photo-list');
changePhoto.querySelectorAll('.photo-container')[2].firstElementChild.firstElementChild.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQblPjGL9520sRXhyoqMWcbkO4vxkNcMADlfQ&usqp=CAU";

//연습과제 6
const changePhotoName = document.querySelector('#photo-list');
changePhotoName.querySelectorAll('.photo-container')[4].lastElementChild.innerText="연습과제 6 해결"

//연습과제 7
const changeModal = document.querySelector('.modal-window');
changeModal.className='modal-window hide';


