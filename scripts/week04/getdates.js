const yearSpan = document.querySelector("#currentyear");
const today = new Date();
yearSpan.innerHTML = today.getFullYear();
const lastMod = document.querySelector("#lastModified");
lastMod.textContent = `Last Modification: ${document.lastModified}`;