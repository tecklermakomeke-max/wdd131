// 1. DATE AND TIME IN FOOTER
const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

year.innerHTML = new Date().getFullYear();
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;


// 2. TEMPLE DATA
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
     {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19022,
        imageUrl:"images/johannesburg.jpg"
    },
    {
        templeName: "Harare Zimbabwe",
        location: "Harare, Zimbabwe",
        dedicated: "2024, September, 8",
        area: 17450,
        imageUrl:"images/harare.jpg"
    },
];


// 3. SELECT THE GALLERY CONTAINER
const gallery = document.querySelector(".temple-gallery");


// 4. FUNCTION TO DISPLAY TEMPLES
function displayTemples(templeArray) {
    gallery.innerHTML = ""; // clear old cards
    
    templeArray.forEach(temple => {
        const card = document.createElement("section");
        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><span>LOCATION:</span> ${temple.location}</p>
            <p><span>DEDICATED:</span> ${temple.dedicated}</p>
            <p><span>SIZE:</span> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
        `;
        gallery.appendChild(card); // <-- fixed
    });
}


// 5. EVENT LISTENERS FOR FILTERS
displayTemples(temples); // Show all on page load = "Home"

document.querySelector("#home").addEventListener("click", () => {
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    displayTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900));
});

document.querySelector("#new").addEventListener("click", () => {
    displayTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000));
});

document.querySelector("#large").addEventListener("click", () => {
    displayTemples(temples.filter(temple => temple.area > 90000));
});

document.querySelector("#small").addEventListener("click", () => {
    displayTemples(temples.filter(temple => temple.area < 10000));
});