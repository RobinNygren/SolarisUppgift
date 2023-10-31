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
  document.getElementById('planetName').textContent = `Namn: ${planet.name}`;
  document.getElementById('planetLatinName').textContent = `Latin Name: ${planet.latinName}`;
  document.getElementById('planetDescription').textContent = `Beskrivning: ${planet.desc}`;
  document.getElementById('planetCirc').textContent = `Omkrets: ${planet.circumference} km`;
  document.getElementById('planetDistance').textContent = `Avstånd från solen: ${planet.distance} km`;
  document.getElementById('planetDayTemp').textContent = `Daglig genomsnittstemperatur: ${planet.temp.day} C`;
  document.getElementById('planetNightTemp').textContent = `Nattlig genomsnittstemperatur: ${planet.temp.night} C`;
  document.getElementById('planetMoons').textContent = `Månar: ${planet.moons.join(", ")}`;
  
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