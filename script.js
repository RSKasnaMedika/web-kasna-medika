// Add interactivity here if needed

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
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 0,5
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
  