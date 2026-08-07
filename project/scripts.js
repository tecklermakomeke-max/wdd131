// set up current year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
// 1. Arrays + Objects - 3 wrestlers with descriptions
// Random fact button - index.html
const factBtn = document.getElementById('factBtn');
if (factBtn) {
  const facts = [
    "The first WrestleMania was held in 1985 at Madison Square Garden.",
    "John Cena's finishing move is called the Attitude Adjustment.",
    "Becky Lynch was the first woman to main event WrestleMania.",
    "Roman Reigns' finishing move is the Spear.",
    "The steel chair is the most used weapon in wrestling history."
  ];

  factBtn.addEventListener('click', () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('fact').textContent = randomFact;
  });
}

// Load Wrestlers - wrestlers.html WITH LAZY LOADING
const wrestlerList = document.getElementById('wrestlerList');
if (wrestlerList) {
  const wrestlers = [
    {
      name: "Roman Reigns",
      bio: "The Tribal Chief and current face of WWE. Multiple time world champion.",
      finisher: "Spear",
      image: "images/roman-reigns.jpg"
    },
    {
      name: "Becky Lynch",
      bio: "The Man. First woman to main event WrestleMania and multi-time champion.",
      finisher: "Dis-arm-her",
      image: "images/becky-lynch.jpg"
    },
    {
      name: "John Cena",
      bio: "16-time world champion and wrestling legend. You can't see him.",
      finisher: "Attitude Adjustment",
      image: "images/john-cena.jpg"
    }
  ];

  wrestlers.forEach(w => {
    wrestlerList.innerHTML += `
      <div class="card">
        <img src="${w.image}" alt="${w.name}" loading="lazy" width="300" height="300">
        <h3>${w.name}</h3>
        <p><b>Bio:</b> ${w.bio}</p>
        <p><b>Finishing Move:</b> ${w.finisher}</p>
      </div>
    `;
  });
}

// Fan Club Form - fanclub.html
const fanclubForm = document.getElementById('fanclubForm');
if (fanclubForm) {
  fanclubForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fanName').value;
    const favorite = document.getElementById('favoriteWrestler').value;
    // Save to localStorage - REQUIRED
    localStorage.setItem('fanName', name);
    localStorage.setItem('favoriteWrestler', favorite);
    let message;
    if (favorite) {
      message = `we'll send you updates about ${favorite}.`;
    } else {
      message = `we'll send you general updates about wrestling.`;
    }

    document.getElementById('fanMessage').textContent = 
      `Welcome to the Fan Club, ${name}! ${message}`;
    
    fanclubForm.reset();
  });
}