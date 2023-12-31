const closeBtn = document.querySelector(".close-nav")
const openBtn = document.querySelector(".open-nav")
const nav = document.querySelector(".nav")


//event "click" always without the S. 
//classList always on capital L.
openBtn.addEventListener("click", ()=>{
    nav.classList.add("navigation-open")
})

closeBtn.addEventListener("click", ()=>{
    nav.classList.remove("navigation-open")
})