const navbarMenu  = document.querySelector('.navbar-menu');

let add = 150;

window.addEventListener('scroll',()=>{


    if(window.scrollY > navbarMenu.offsetHeight + add){
        navbarMenu.classList.add('move');
    }else{
        navbarMenu.classList.remove('move');
    }
});




const buttons = document.querySelectorAll(".custom-button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        removeActive();
        button.classList.add("active");
    });
});

function removeActive() {
    buttons.forEach((button) => {
        button.classList.remove("active");
    });
}


let vis= 50;

const card__grid = document.querySelectorAll(".card__grid");

function card__affect() {
    card__grid.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - vis) {
            card.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", card__affect);
document.addEventListener("DOMContentLoaded", card__affect);






//*********** */
const homeBtn = document.querySelector(".Home__btn");

homeBtn.addEventListener("mouseover", () => {
  homeBtn.style.transform = "scale(1.1, 1.1)";
  
});

homeBtn.addEventListener("mouseout", () => {
  homeBtn.style.transform = "scale(1, 1)";
});

//*********** */

//! YAZININ TEKRANLANMASI VE ANİMASYONLA ÇIKMASI

const content = document.querySelector(".devoloper");
let text ="Ben bir Front End Developercıyım";
let speed =250;
let idx=1;



const writeContent=()=>{


    content.innerHTML=text.slice(0,idx);
    idx++;

    if(idx > text.length){
        idx =1;
    }
    setTimeout(writeContent,speed)
};
writeContent();

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".navbar-text-menu");
    const toggleButton = document.querySelector(".navbar-toggler");

    toggleButton.addEventListener("click", function () {
        menu.classList.toggle("show");
    });

 //!Sayfada baska yere tiklaninca kapanmasi
    document.addEventListener("click", function (e) {
        if (!toggleButton.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove("show");
        }
    });
});



//*************************************************************************************** */

