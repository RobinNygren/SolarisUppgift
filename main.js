const BASE_URL = 'https://majazocom.github.io/Data/solaris.json';
let data; // Deklarera en global variabel för att lagra datan
const planetDivs = document.querySelectorAll('.planets div');

const fetchData = async () => {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error('Error fetching data');
    }

    data = await response.json(); // Tilldela datan till den globala variabeln
    console.log(data);

    data.forEach((item, index) => {
    // Lägg till en eventlyssnare på varje planet-div
      planetDivs[index].addEventListener('click', () => showPlanetInfo(item));
    });
  } catch (error) {
    console.error('Fel:', error);
  }
}

fetchData();

// Funktion för att öppna modalen och fylla den med planetinformation
function openModal(planet) {
  const planetModal = document.getElementById('planetModal');
  document.getElementById('planetName').textContent = `${planet.name}`;
  document.getElementById('planetLatinName').textContent = `${planet.latinName}`;
  document.getElementById('planetDescription').textContent = `${planet.desc}`;
  document.getElementById('planetCirc').textContent = `${planet.circumference} km`;
  document.getElementById('planetDistance').textContent = `${planet.distance} km`;
  document.getElementById('planetDayTemp').textContent = `${planet.temp.day} C`;
  document.getElementById('planetNightTemp').textContent = `${planet.temp.night} C`;
  document.getElementById('planetMoons').textContent = `${planet.moons.join(", ")}`;
  
  // Visa modalen genom att ändra dess display-egenskap
  planetModal.style.display = 'block';
  planetModal.style.display = 'flex';
}


// Funktion för att stänga modalen när användaren klickar på "X"
function closeModal() {
  const planetModal = document.getElementById('planetModal');
  planetModal.style.display = 'none';
}

// Eventlyssnare som kallas när användaren klickar på en planet för att visa information
function showPlanetInfo(planet) {
  openModal(planet);
}
// Skapa stjärnor funktionen
const starContainer = document.querySelector(".star-container");

function createStars() {
    for (let i = 0; i < 58; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        starContainer.appendChild(star);
    }
}

createStars();