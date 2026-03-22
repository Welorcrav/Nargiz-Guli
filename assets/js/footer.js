class Footer {
  constructor() {
    this.container = document.getElementById('footer')
    fetch('./data.json')
      .then((res) => res.json())
      .then((allData) => this.render(allData.footer))
  }

  render(f) {
    if (!f) return
    this.container.innerHTML = `
      <div class="footer-overlay">
        <div class="footer-content">
          <div class="footer-col">
            <h2 class="footer-logo">${f.brand}</h2>
            <p class="footer-desc">${f.description}</p>
            <div class="footer-contact">
              <p><i class="fa-solid fa-location-dot"></i> ${f.address}</p>
              <p><i class="fa-solid fa-phone"></i> ${f.phone}</p>
              <p><i class="fa-solid fa-envelope"></i> ${f.email}</p>
            </div>
          </div>
          <div class="footer-col">
            <h3>TAKLIFFLARIMIZ</h3>
            <ul>${f.offerLinks.map((l) => `<li><a href="#">${l}</a></li>`).join('')}</ul>
          </div>
          <div class="footer-col">
            <h3>TEZKOR HAVOLALAR</h3>
            <ul>${f.quickLinks.map((l) => `<li><a href="#">${l}</a></li>`).join('')}</ul>
          </div>
          <div class="footer-col">
            <h3>NEWSLETTER</h3>
            <div class="newsletter-box"><input type="email" placeholder="Email"><button>OBUNA</button></div>
          </div>
        </div>
      </div>`
  }
}
new Footer()
