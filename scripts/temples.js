// set up  current year and Last Modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
yearSpan.textContent = new Date().getFullYear();
lastMod.textContent = 'Last Modification: ${document.lastModified}';
const menuButton = document.querySelector('#menu');
const nav= document.querySelector('nav');
menuButton.addEventListener('click', () =>{
    nav.classList.toggle('open');
    menuButton.textContent = nav.classList.contains('open') ? 'X' : 'hamuburger';
})