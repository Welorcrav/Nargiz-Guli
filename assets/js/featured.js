class FaberlicSpecial {
  constructor() {
    this.section = document.getElementById('featured-section')
    fetch('./data.json')
      .then((res) => res.json())
      .then((allData) => {
        this.render(allData.featured, allData.top_categories)
      })
      .catch((err) => console.error('Xatolik:', err))
  }

  render(banner, categories) {
    if (!banner || !categories) return
    let categoriesHtml = ''
    categories.forEach((cat) => {
      categoriesHtml += `
        <div class="category-card">
          <div class="category-img"><img src="${cat.img}" alt="${cat.name}"></div>
          <button class="category-btn shop-btn">${cat.name}</button>
        </div>`
    })

    this.section.innerHTML = `
      <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 40px 20px;">
        <div class="featured-banner">
          <div class="featured-img"><img src="${banner.image}"></div>
          <div class="featured-content">
            <h2 class="faberlic-title">${banner.title}</h2>
            <p class="faberlic-text">${banner.description}</p>
            <button class="shop-btn">${banner.btnText}</button>
          </div>
        </div>
        <div class="top-categories-box">
          <h2 class="section-title" style="margin-top: 50px;">TOP KATEGORIYALAR</h2>
          <div class="categories-grid">${categoriesHtml}</div>
        </div>
      </div>`
  }
}
new FaberlicSpecial()
