// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
  console.log('Website loaded');

  // Initialize Chart.js
  const ctx = document.getElementById('qualityChart').getContext('2d');
  const qualityChart = new Chart(ctx, {
      type: 'bar', // Chart type: bar, line, pie, etc.
      data: {
          labels: ['Kebersihan', 'Pelayanan', 'Keamanan', 'Fasilitas'],
          datasets: [{
              label: 'Skor Mutu',
              data: [85, 90, 80, 75], // Example data
              backgroundColor: ['#FFA601', '#98FB98', '#FF5733', '#C70039'],
              borderColor: ['#FFA601', '#98FB98', '#FF5733', '#C70039'],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  // Hamburger Menu Functionality
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('#nav-links');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('show');
  });
});
