self.addEventListener("install", event => {
    self.skipWaiting(); // langsung aktifkan service worker baru
  });
  
  self.addEventListener("activate", event => {
    clients.claim(); // pakai cache terbaru untuk semua tab
  });
  