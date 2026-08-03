// set up current year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
// 1. Arrays + Objects - 3 wrestlers with descriptions
const wrestlers = [
  {
    name: "Becky Lynch", 
    move: "Dis-Arm-Her",
    bio: "Becky Lynch is 'The Man'. She is a 6 time World Champion. Fans love her because she is tough and never gives up.",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400"
  },
  {
    name: "John Cena", 
    move: "Attitude Adjustment",
    bio: "John Cena says 'You Can't See Me'. He was World Champion 16 times. He also helps kids through Make-A-Wish.",
    img: "https://images.unsplash.com/photo-1594737625785-a6c3ddab4dd8?w=400"
  },
  {
    name: "Roman Reigns", 
    move: "Spear",
    bio: "Roman Reigns is 'The Tribal Chief'. He was World Champion for over 1000 days. He leads his family in WWE.",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400"
  }
];

// 2. Show wrestlers on the page - DOM
const list = document.getElementById("wrestlerList");
if(list) {
  wrestlers.forEach(w => {
    list.innerHTML += `
      <div class="wrestler-card">
        <img src="${w.img}" alt="${w.name}" loading="lazy">
        <h3>${w.name}</h3>
        <p><strong>Special Move:</strong> ${w.move}</p>
        <p>${w.bio}</p>
      </div>
    `;
  });
}

// 3. Conditional branching + Events + Template literals
const factBtn = document.getElementById("factBtn");
const facts = [
  "Wrestling started in the 1800s as a real sport.",
  "The Royal Rumble has 30 wrestlers.",
  "WWE stands for World Wrestling Entertainment."
];

if(factBtn) {
  factBtn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").textContent = `${facts[random]}`;
  });
}

// 4. Form + localStorage
const form = document.getElementById("fanForm");
if(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    localStorage.setItem("fanName", name); // localStorage
    document.getElementById("message").textContent = `Thanks ${name}! You joined.`;
  });
}