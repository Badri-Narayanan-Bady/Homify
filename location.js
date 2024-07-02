const locationBtn = document.getElementById('location-btn');

locationBtn.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      // Use the latitude and longitude to fetch the user's location
      fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY`)
       .then(response => response.json())
       .then(data => {
          const location = data.name;
          document.getElementById('location').value = location;
        })
       .catch(error => console.error(error));
    });
  } else {
    alert('Geolocation is not supported by this browser.');
  }
});