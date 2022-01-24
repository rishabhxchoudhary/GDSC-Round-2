const nav = document.querySelector('.nav')
const home = document.getElementById('m')
const hobbies = document.getElementById('h')
const skills = document.getElementById('s')

window.addEventListener('scroll',fixnav)


function fixnav() {
    if (window.scrollY > nav.offsetHeight +150 && window.scrollY < nav.offsetHeight +1100) {
        nav.classList.add('active')
        nav.classList.remove('active1')
        home.classList.remove('current')
        hobbies.classList.add('current')
        skills.classList.remove('current')
    } 
    else if(window.scrollY > nav.offsetHeight+ 1100)  {
        nav.classList.add('active1')
        nav.classList.remove('active')
        home.classList.remove('current')
        hobbies.classList.remove('current')
        skills.classList.add('current')
    }
    else{
        nav.classList.remove('active1')
        nav.classList.remove('active')
        home.classList.add('current')
        hobbies.classList.remove('current')
        skills.classList.remove('current')
    }
}