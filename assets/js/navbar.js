class Navbar {
  constructor() {
    this.navbar = document.getElementById('navbar')
    this.data = null

    fetch('./data.json')
      .then((response) => response.json())
      .then((allData) => {
        this.data = allData.navbar
        this.render()
      })
      .catch((error) => console.error('Navbar yuklanmadi:', error))
  }

  render() {
    if (!this.data || this.data.length === 0) return
    const info = this.data[0]
    const menus = [
      { name: info.navHome, link: '#home' },
      { name: info.navProduct, link: '#trending-section' },
      { name: info.navContact, link: '#contact' },
    ]

    this.navbar.innerHTML = `
      <div class="navbar-container">
        <h1 class="logo">${info.logo}</h1>
        <ul class="menu">
          ${menus.map((m) => `<li><a href="${m.link}">${m.name}</a></li>`).join('')}
        </ul>
        <div class="icons">
          <button><i class="${info.search}"></i></button>
          <button><i class="${info.featured}"></i></button>
          <button><i class="${info.user}"></i></button>
          <button><i class="${info.cart}"></i></button>
        </div>
      </div>`
  }
}
document.addEventListener('DOMContentLoaded', () => {
  new Navbar()
})
