// footer: year + Last Modified
const yearSpan = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");
yearSpan.textContent = new Date().getFullYear();
lastMod.textContent = 'Last Modification: ${document.lastModified}';
const menuButton = document.querySelector('#menu');
const nav= document.querySelector('nav');
menuButton.addEventListener('click', () =>{
    nav.classList.toggle('open');
    menuButton.textContent = nav.classList.contains('open') ? 'X' : 'hamuburger';
})