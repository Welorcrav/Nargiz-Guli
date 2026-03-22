class Banner {
  constructor() {
    this.section = document.getElementById('banner')
    fetch('./data.json')
      .then((res) => res.json())
      .then((allData) => this.render(allData.bannerInfo))
  }

  render(banner) {
    if (!banner) return
    this.section.innerHTML = banner
      .map(
        (ban) => `
      <div class="ban-product"><img src="${ban.banProduct}"></div>
      <div class="ban-pro-info">
        <h3>${ban.banOffer}</h3>
        <h2>${ban.banTitle}</h2>
        <h3>${ban.banSale}</h3>
        <button class="shop-btn" style="margin-top: 10px;">${ban.banBtn}</button>
      </div>`
      )
      .join('')
  }
}
new Banner()
