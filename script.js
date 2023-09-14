const hamburger = document.getElementById('hamburger')
const navmenu = document.getElementById('navmenu')
const close = document.getElementById('close')
const moon = document.getElementById('moon')
const body = document.querySelector('body')
const navlinks = document.querySelectorAll('.navlink');

hamburger.addEventListener('click', ()=>{
    navmenu.classList.remove('hidden')
})
close.addEventListener('click',()=>{
    navmenu.classList.add('hidden')
})
navlinks.forEach(link, ()=>{
    link.addEventListener('click',()=>{
        navmenu.classList.add('hidden')
    })
})