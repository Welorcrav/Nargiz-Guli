class Testimonials {
  constructor() {
    this.section = document.getElementById('testimonials')
    this.data = []
    this.currentIndex = 0
    fetch('./data.json')
      .then((res) => res.json())
      .then((allData) => {
        this.data = allData.testimonials
        this.render()
      })
  }

  renderStars(rating) {
    let stars = ''
    for (let i = 1; i <= 5; i++) {
      stars += `<i class="fa-${i <= rating ? 'solid' : 'regular'} fa-star" style="color: ${i <= rating ? '#ffb400' : '#ccc'};"></i>`
    }
    return stars
  }

  render() {
    if (!this.data || this.data.length === 0) return
    const item = this.data[this.currentIndex]
    this.section.innerHTML = `
      <div class="testimonial-overlay">
        <div class="testimonial-carousel-wrapper">
          <button class="nav-btn" id="prevBtn"><i class="fa-solid fa-chevron-left"></i></button>
          <div class="testimonial-container">
            <h2 class="test-title">Mijozlarimizning Fikrlari</h2>
            <div class="test-content">
              <div class="client-avatar"><img src="${item.avatar}"></div>
              <p class="client-comment">"${item.comment}"</p>
              <h4 class="client-name">${item.name}</h4>
              <span class="client-job">${item.job}</span>
              <div class="client-rating">${this.renderStars(item.rating)}</div>
            </div>
          </div>
          <button class="nav-btn" id="nextBtn"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>`
    document.getElementById('prevBtn').onclick = () => {
      this.currentIndex = (this.currentIndex - 1 + this.data.length) % this.data.length
      this.render()
    }
    document.getElementById('nextBtn').onclick = () => {
      this.currentIndex = (this.currentIndex + 1) % this.data.length
      this.render()
    }
  }
}
new Testimonials()
