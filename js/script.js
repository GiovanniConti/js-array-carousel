const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


const containerImg = document.querySelector(".container-img");
const containerOverlay = document.querySelector(".container-overlay");
const nav = document.querySelector(".nav");

let currentIndex = 0;

for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];
    const currentTitle = title[i];
    const currentNews = text[i];

    console.log(currentItem);
    console.log(currentTitle);
    console.log(currentNews);

    let classActiveImg = "";
    let classActiveNav = "";

    if(i === currentIndex){
        classActiveImg = "active";
        
    }
    
    containerImg.innerHTML += `<img class="img ${classActiveImg}" src="${currentItem}" alt="img${i}">`;
    containerOverlay.innerHTML += `<h1 class="title ${classActiveImg}">${currentTitle}</h1>`;
    containerOverlay.innerHTML += `<p class="news ${classActiveImg}">${currentNews}</p>`;
    nav.innerHTML += `<img class="img-nav ${classActiveNav}" src="${currentItem}" alt="img${i}">`;
}

const chevronUp = document.querySelector(".chevron-up");
const chevronDown = document.querySelector(".chevron-down");

chevronUp.addEventListener("click", function(){
    const activeImage = containerImg.querySelector(".active");
});

chevronDown.addEventListener("click", function(){

});