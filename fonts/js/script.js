const headerUl = document.querySelector(".header-ul");
const bars = document.querySelector(".bars");

bars.addEventListener('click', ()=>{
    headerUl.classList.toggle('open')
})


//scrollreveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.title-h1`, {origin:'left'})
sr.reveal(`.title-h11`, {origin:'right'})
sr.reveal(`.slider-desc`, {origin:'left'})
sr.reveal(`.btn`, {origin:'right'})
sr.reveal(`.apropos-left`, {delay: 800, origin: 'left', interval: 100})
sr.reveal(`.apropos-right`, {delay: 800, origin: 'right', interval: 100})
sr.reveal(`.about-row`, {delay: 300, origin: 'bottom', interval: 100})
sr.reveal(`.container-form`, {origin:'bottom'})