/* ---------------Open & close side bar------------------ */

const menuButton=document.querySelector('.menu-button');
menuButton.addEventListener('click',()=>{
    document.querySelector('.side-nav').classList.toggle("show-side-nav");
});

const closeButton=document.querySelector('.close-btn');
closeButton.addEventListener('click',()=>{
    document.querySelector('.side-nav').classList.remove("show-side-nav");
});

document.addEventListener('click',(event)=>{
    if(event.target.matches("div.side-nav")){
        document.querySelector('.side-nav').classList.toggle("show-side-nav");
     }
});