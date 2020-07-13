import './styles/main.scss';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);

var swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,

  //pagination
  pagination: {
    el: '.swiper1 .swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper1 .swiper-button-next',
    prevEl: '.swiper1 .swiper-button-prev',
  },

  //scrollbar
  scrollbar: {
    el: '.swiper1 .swiper-scrollbar',
  },
});


var swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    breakpoints:{
      320:{
        slidesPerView: 1,
      },
      993:{
        slidesPerView: 2,
      },
      1219:{
        slidesPerView: 3,
      },
      1500:{
        slidesPerGroup: 4,
      },
    },
  
    //pagination
    pagination: {
      el: '.swiper2 .swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper2 .swiper-button-next',
      prevEl: '.swiper2 .swiper-button-prev',
    },
  
    //scrollbar
    scrollbar: {
      el: '.swiper2 .swiper-scrollbar',
    },
});



//Shopping cart

//Initializing cart
const ShoppingCart ={
    "davidoff": 0,
    "acuvue": 0,
    "bulgari": 0,
};

//Event
document.onclick = event => {
  var counter = 0
  if (event.target.classList.contains('add-to-cart')){
    addToCart(event.target.dataset.id);
    if (counter == 0){
      if (event.target.classList.contains('add-davidoff')){
        changeBtnStyle(document.getElementsByClassName('add-davidoff'));
      }
      else if (event.target.classList.contains('add-bulgari')){
        changeBtnStyle(document.getElementsByClassName('add-bulgari'));
      }
      else if (event.target.classList.contains('add-acuvue')){
        changeBtnStyle(document.getElementsByClassName('add-acuvue'));
      }
    };
    console.log(counter);
    counter++;
  };
};

//Function increases the value of the item in the cart
const addToCart = id =>{
  ShoppingCart[id]++;
  renderCart();
};

//Changing buttons style after click
const changeBtnStyle = elements =>{
  for (let i=0; i<elements.length;i++){
    elements[i].innerHTML = "<img src='./src/images/galo4ka.svg' class='galochka'>В КОРЗИНЕ";
    elements[i].style.color = "white"; 
    elements[i].style.background = "linear-gradient(249.3deg, #282696 0%, #09ABE4 100%)";
    elements[i].style.boxShadow = "box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25)";
    elements[i].style.border = "0px";
  };
};

//Element that shows the num of items in the cart
var cartsValue = document.getElementsByClassName("cart-value");

//Updating tha value of items in the cart
const renderCart = () =>{
  cartsValue[0].innerHTML = `Корзина (${(Object.values(ShoppingCart).reduce((curr, sum)=>sum+curr))})`;
  cartsValue[1].innerHTML = `(${(Object.values(ShoppingCart).reduce((curr, sum)=>sum+curr))})`;
};


//navmenu mob-version

var el = document.getElementsByClassName('navbar-mob');
el[0].addEventListener("touchstart", showSub, false);


function showSub(e) {
  this.children[1].style.display = (window.getComputedStyle(this.children[1]).display=="none")?'block':'none';
}





