// JavaScript untuk menu hamburger
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
  });

  // JavaScript untuk Chart.js
  var ctx = document.getElementById('qualityChart').getContext('2d');
  var qualityChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Kepuasan', 'Kecepatan', 'Kualitas', 'Biaya'],
      datasets: [{
        label: 'Penilaian Mutu',
        data: [80, 70, 90, 60],
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FFC300'], // Warna baru untuk setiap bar
        borderColor: ['#C70039', '#28B463', '#1F618D', '#FF5733'], // Tambahkan warna border jika diperlukan
        borderWidth: 2 // Sesuaikan ketebalan border
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
});
