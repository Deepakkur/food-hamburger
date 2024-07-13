const hamburger = document.querySelector('.hamburger-menu-container')
const headcontent = document.querySelector('.header-content')
const closeIcon = document.querySelector('.close-icon')
const nav =  document.querySelector('nav')

hamburgerIcon.addEventListener('click', (e) => {
    e.stopPropagation()
    headcontent.classList.add('menu-open')
})

headercontent.addEventListener('click',(e) => {
    e.stopPropagation()

})

closeIcon.addEventListener('click',() => {
    headcontent.classList.remove('menu-open')

})
window.addEventListener('click',() => {
    headcontent.classList.remove('menu-open')

})