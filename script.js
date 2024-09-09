// Chart.js Script
const ctx = document.getElementById('qualityChart').getContext('2d');
const qualityChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Kebersihan', 'Pelayanan', 'Keamanan', 'Fasilitas'],
    datasets: [{
      label: 'Skor Mutu',
      data: [85, 90, 80, 75],
      backgroundColor: ['#FFA601', '#CA3433', '#00FFFF', '#98FB98'],
      borderColor: ['#FFA601', '#CA3433', '#00FFFF', '#98FB98'],
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

// Hamburger Menu Script
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('#nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('show');
});
