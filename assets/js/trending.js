class TrendingProducts {
  constructor() {
    this.section = document.getElementById('trending-section')
    fetch('./data.json')
      .then((res) => res.json())
      .then((allData) => {
        this.render(allData.products)
      })
      .catch((err) => console.error('Mahsulotlar yuklanmadi:', err))
  }

  renderStars(rating) {
    let stars = ''
    for (let i = 1; i <= 5; i++) {
      stars +=
        i <= rating
          ? '<i class="fa-solid fa-star" style="color: #ffb400;"></i>'
          : '<i class="fa-regular fa-star" style="color: #ccc;"></i>'
    }
    return stars
  }

  render(products) {
    if (!products) return
    let html = `
      <div class="trending-wrapper" style="max-width: 1200px; margin: 50px auto; padding: 0 20px;">
        <h2 style="text-align: center; color: #c08d74; margin-bottom: 40px;">TRENDING PRODUCT</h2>
        <div class="product-grid">`
    products.forEach((item) => {
      html += `
        <div class="product-card">
          <div class="product-img-box">
            <img src="${item.image}" alt="${item.name}">
            <div class="product-overlay"><button class="shop-btn">Sotib Olish</button></div>
          </div>
          <div class="product-info">
            <div class="product-rating">${this.renderStars(item.rating)} <span style="font-size: 12px;">(126)</span></div>
            <h3 class="product-name">${item.name}</h3>
            <div class="product-price">
              <span class="new-price">${item.currentPrice} ${item.valut}</span>
              <span class="old-price">${item.oldPrice} ${item.valut}</span>
            </div>
          </div>
        </div>`
    })
    this.section.innerHTML = html + `</div></div>`
  }
}
document.addEventListener('DOMContentLoaded', () => {
  new TrendingProducts()
})
