document.addEventListener('DOMContentLoaded', function() {
  console.log('Website loaded');
});

document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('qualityChart').getContext('2d');
  var qualityChart = new Chart(ctx, {
    type: 'bar', // tipe grafik: bar, line, pie, dll.
    data: {
      labels: ['Kebersihan', 'Pelayanan', 'Kualitas Perawatan', 'Fasilitas', 'Dokter'],
      datasets: [{
        label: 'Penilaian Mutu Rumah Sakit',
        data: [85, 90, 80, 75, 95], // contoh data penilaian
        backgroundColor: [
          '#FF6347', // Warna baru untuk 'Kebersihan' (Tomato)
          '#4682B4', // Warna baru untuk 'Pelayanan' (Steel Blue)
          '#FFD700', // Warna baru untuk 'Kualitas Perawatan' (Gold)
          '#20B2AA', // Warna baru untuk 'Fasilitas' (Light Sea Green)
          '#9370DB'  // Warna baru untuk 'Dokter' (Medium Purple)
        ],
        borderColor: [
          '#FF4500', // Warna border untuk 'Kebersihan' (Orange Red)
          '#1E90FF', // Warna border untuk 'Pelayanan' (Dodger Blue)
          '#FFA500', // Warna border untuk 'Kualitas Perawatan' (Orange)
          '#008B8B', // Warna border untuk 'Fasilitas' (Dark Cyan)
          '#8A2BE2'  // Warna border untuk 'Dokter' (Blue Violet)
        ],
        borderWidth: 2 // Mengatur ketebalan border
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
