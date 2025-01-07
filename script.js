const navbarMenu  = document.querySelector('.navbar-menu');

let add = 150;

window.addEventListener('scroll',()=>{


    if(window.scrollY > navbarMenu.offsetHeight + add){
        navbarMenu.classList.add('move');
    }else{
        navbarMenu.classList.remove('move');
    }
});
