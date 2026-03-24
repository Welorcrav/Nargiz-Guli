class Testimonials {
  constructor() {
    this.section = document.getElementById('testimonials')
    this.data = []
    this.currentIndex = 0 // Hozirgi ko'rinib turgan mijoz tartib raqami (indeksi)

    fetch('./data.json')
      .then((res) => res.json())
      .then((allData) => {
        this.data = allData.testimonials
        this.render() // Ma'lumot kelgach, birinchi marta ekranga chizish
      })
      .catch((err) => console.error('Xatolik:', err))
  }

  // Yulduzchalarni chiqarish funksiyasi
  renderStars(rating) {
    let stars = ''
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars += `<i class="fa-solid fa-star" style="color: #ffb400;"></i>`
      } else {
        stars += `<i class="fa-regular fa-star" style="color: #ccc;"></i>`
      }
    }
    return stars
  }

  next() {
    this.currentIndex = this.currentIndex + 1

    if (this.currentIndex >= this.data.length) {
      this.currentIndex = 0
    }

    this.render()
  }

  prev() {
    this.currentIndex = this.currentIndex - 1

    if (this.currentIndex < 0) {
      this.currentIndex = this.data.length - 1
    }

    this.render()
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

    document.getElementById('prevBtn').onclick = () => this.prev()
    document.getElementById('nextBtn').onclick = () => this.next()
  }
}

new Testimonials()
