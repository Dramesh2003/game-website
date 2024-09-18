function showSidebar(){
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'block'
}

function hideSidebar(){
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'none'
}
{
    "liveServer.settings.port"
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    breakpoints: {
        500: {
            slidesPerView: 4
        },
        900: {
            slidesPerView: 5
        }
    }
});

var swiper = new Swiper(".mySwiper1", {
slidesPerView: 3,
spaceBetween: 10,
loop: true,
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
breakpoints: {
    0: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 40,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 50,
    },
},
});

let bars = document.querySelector("#bars") 
let menu = document.querySelector("#menu") 

bars.addEventListener("click",()=>{
    menu.classList.toggle("openmenu")
})