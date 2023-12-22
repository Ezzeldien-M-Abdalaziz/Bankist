'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {     // eventlistenter for all the buttons
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click',function(e){
  section1.scrollIntoView({ behavior: 'smooth' });   //WAY ONE

  /*//WAY TWO and more complicated
 const top = section1.getBoundingClientRect().y + window.scrollY;   // we should always sum the "amount scolled" to the coordinates beacuse it changes when we scroll and by summing it to "amount scolled" it will be fixed
 const left = section1.getBoundingClientRect().x + window.scrollX;
 window.scrollTo({top:top,left:left,behavior:'smooth'}); 
*/
});

//event handler for page navagation

/*  //way one to do that but this way impacts performance
document.querySelectorAll('.nav__link').forEach((el)=>{    //basically we made this event just for the smooth scroll otherwise the href already goes to the link attached to it in th HTML
  el.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth'});  // here "this.getAttribute('href')" => return the id of the element
  })
});
*/
//way two which is better 
document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();
    if(e.target.classList.contains('nav__link') && !e.target.classList.contains('btn--show-modal')){
      document.querySelector(e.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth'});
    }
})

//tabbed component event
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click',function(e){
  
  const clicked = e.target.closest('.operations__tab'); //closest() searchs for the closest or fisrt element the has the class name in this case the button itself

  if(!clicked) return;       //check if the user click one of the buttons or the span "guard clause"

    tabsContent.forEach((el)=>{                //remove the active class from the default content
      el.classList.remove('operations__content--active');
    })

    tabs.forEach((el)=>{     //remove the active class from the default tab
      el.classList.remove('operations__tab--active');
    })

      //add active class to the content according to the button clicked
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
    //add active class to the tab according to the button clicked
    clicked.classList.add('operations__tab--active');
});

//making the hover event

const nav = document.querySelector('.nav');
//const logo = document.querySelector('.nav__logo');
const lis = document.querySelectorAll('.nav__item');
const links = document.querySelectorAll('.nav__link');

nav.addEventListener('mouseover',function(e){
  const hover = e.target.closest('.nav__link');
  if(!hover) return;
  links.forEach((el)=>{
    el.style.color = 'grey';
  });

})