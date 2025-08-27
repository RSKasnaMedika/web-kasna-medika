// Navbar Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById('qualityChart');
  if (ctx) { // supaya tidak error di halaman lain yg ga ada chart
    new Chart(ctx.getContext('2d'), {
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
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slide-track");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".nav-btn.prev");
  const nextBtn = document.querySelector(".nav-btn.next");

  let index = 0;
  const slideWidth = slides[0].offsetWidth;
  const totalSlides = slides.length;

  function showSlide() {
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  function nextSlide() {
    index++;
    if (index >= totalSlides / 2) { // karena diduplikasi
      index = 0;
    }
    showSlide();
  }

  function prevSlide() {
    index--;
    if (index < 0) {
      index = totalSlides / 2 - 1;
    }
    showSlide();
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Auto jalan setiap 3 detik
  setInterval(nextSlide, 3000);

  // Biar responsif kalau resize
  window.addEventListener("resize", () => {
    showSlide();
  });
});
