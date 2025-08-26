// Navbar Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Chart.js Example
const ctx = document.getElementById('qualityChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Pelayanan', 'Fasilitas', 'Kebersihan', 'Keamanan'],
    datasets: [{
      label: 'Penilaian (1-100)',
      data: [92, 88, 95, 90],
      backgroundColor: ['#0066cc','#ffcc00','#00cc99','#ff6600']
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});
