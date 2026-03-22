class Header {
  constructor() {
    this.headerContainer = document.getElementById('header-banners')
    fetch('./data.json')
      .then((res) => res.json())
      .then((allData) => {
        this.render(allData.header)
      })
      .catch((err) => console.error('Header xatosi:', err))
  }

  render(data) {
    if (!data) return
    let html = ''
    data.forEach((item, index) => {
      html += `
      <div class="banner-card item-${index}" style="background-image: url('${item.image}'); background-size: cover;">
        <div class="banner-content">
          <p class="offer-text">${item.offer}</p>
          <h2 class="banner-title">${item.name}</h2>
          <button class="shop-btn">${item.shopBtn}</button>
        </div>
      </div>`
    })
    this.headerContainer.innerHTML = html
  }
}
new Header()
