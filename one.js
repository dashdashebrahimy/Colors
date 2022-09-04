const menu = document.querySelector('#mobile_menu');
const menulink = document.querySelector('.nav_menu');

const mobilemenu = () =>{
    menu.classList.toggle('is-active')
    menulink.classList.toggle('active');
}
menu.addEventListener('click',mobilemenu);