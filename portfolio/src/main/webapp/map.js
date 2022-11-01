// Initialize and add the map
function initMap() {
    
    const UF = { lat: 29.643633, lng: -82.354927 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: UF,
    });
   
    const marker = new google.maps.Marker({
      position: UF,
      map: map,
    });
  }
  
  window.initMap = initMap;

const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})